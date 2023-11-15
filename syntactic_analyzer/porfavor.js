import Stack from "../data_structures/stack.js";
import babyduckListener from "../parser/babyduckListener.js";
import SemanticChecker from "./semanticChecker.js";
import QuadrupleGenerator from "./quadrupleGenerator.js";

class Porfavor extends babyduckListener {
  constructor(tokenObjects, memory) {
    super();
    this.jumpStack = new Stack();
    this.tokenObjects = tokenObjects;
    this.contextStack = new Stack();
    this.QuadrupleGenerator = new QuadrupleGenerator();
    this.SemanticChecker = new SemanticChecker();
    this.Memory = memory;
    this.currentContext = null;
    this.seenMain = false;
    this.startingElse = false;
  }

  getQuadruples() {
    const quadruples = this.QuadrupleGenerator.getQuadruples();

    return quadruples;
  }

  enterPrograma(ctx) {
    this.contextStack.push("PROGRAMA");
    this.QuadrupleGenerator.setGoto([["GOTO", null, null]]);
  }

  exitPrograma(ctx) {
    this.QuadrupleGenerator.insertQuadruple([["ENDPROG"]]);
  }

  enterF_call(ctx) {
    this.QuadrupleGenerator.insertQuadruple([
      ["ERA", ctx.Identifier().getText()],
    ]);
  }

  enterBody(ctx) {
    if (this.seenMain === false && this.currentContext === null) {
      this.seenMain = true;
      this.contextStack.push("MAIN");

      this.QuadrupleGenerator.bringGoto();
    }
    if (this.contextStack.top() === "IF") {
      this.QuadrupleGenerator.setGoto([["GOTO", null, null]]);

      this.contextStack.pop();
    }
  }

  exitBody(ctx) {
    if (this.contextStack.top() === "ELSE") {
      this.QuadrupleGenerator.bringGoto(1);

      this.contextStack.pop();
    } else if (this.contextStack.top() === "CYCLE") {
    }
  }

  enterVars(ctx) {
    const varsContext = ctx.parentCtx.Identifier().getText();
    const typeQuant = ctx.commaSeparatedId().length;

    for (let i = 0; i < typeQuant; i++) {
      const varsType = ctx.type()[i].getText();
      const varNumbers = ctx.commaSeparatedId()[i].Identifier().length;
      if (varNumbers > 1) {
        for (let j = 0; j < varNumbers; j++) {
          const varName = ctx.commaSeparatedId()[i].Identifier()[j].getText();
          this.Memory.allocateVariable(varName, varsType, varsContext);
        }
      } else {
        const varName = ctx.commaSeparatedId()[i].Identifier()[0].getText();
        this.Memory.allocateVariable(varName, varsType, varsContext);
      }
    }
  }

  enterFuncs(ctx) {
    this.currentContext = "FUNCTION";
  }

  exitFuncs(ctx) {
    this.QuadrupleGenerator.insertQuadruple([["ENDFUNC"]]);
    this.currentContext = null;
  }

  enterExpression(ctx) {
    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    const cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    if (this.currentContext === "CONDITION") {
      let res = this.QuadrupleGenerator.genExpressionQuadruple(
        cleanArray,
        this.Memory
      );
      this.QuadrupleGenerator.setGoto([["GOTOF", res, null]]);
      this.currentContext = "IF";
    }
  }

  exitAssign(ctx) {
    if (!ctx) {
      return;
    }

    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;
    const cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    this.QuadrupleGenerator.genAssignQuadruple(cleanArray, this.Memory);
    this.currentContext = null;
  }

  enterPrint(ctx) {
    if (!ctx) return;

    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    let cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    cleanArray = cleanArray.slice(2);
    cleanArray.pop();
    cleanArray.pop();
    let lInd = 0;
    let i = 0;
    let cleanOne = [];

    for (i = 0; i < cleanArray.length; i++) {
      if (cleanArray[i].type === ",") {
        let left = cleanArray.slice(lInd, i);
        lInd = i + 1;
        if (
          left.length === 1 &&
          (left[0].type === "Identifier" || left[0].type === "CteString")
        ) {
          cleanOne.push(left[0]);
        } else {
          cleanOne.push(left);
        }
      }
    }

    let left = cleanArray.slice(lInd, i);
    lInd = i + 1;
    if (
      left.length === 1 &&
      (left[0].type === "Identifier" || left[0].type === "CteString")
    ) {
      cleanOne.push(left[0]);
    } else {
      cleanOne.push(left);
    }

    for (let j = 0; j < cleanOne.length; j++) {
      if (Array.isArray(cleanOne[j])) {
        let tempVarExp = this.QuadrupleGenerator.genExpressionQuadruple(
          cleanOne[j],
          this.Memory
        );
        this.QuadrupleGenerator.insertQuadruple([["PRINT", tempVarExp]]);
      } else {
        this.QuadrupleGenerator.insertQuadruple([["PRINT", cleanOne[j].name]]);
      }
    }
  }

  enterCycle(ctx) {
    this.contextStack.push("CYCLE");
    this.QuadrupleGenerator.cycleJump();
  }

  exitCycle(ctx) {
    const matchStart = ctx.expression().start.tokenIndex;
    const matchEnd = ctx.expression().stop.tokenIndex;
    const cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    let res = this.QuadrupleGenerator.genExpressionQuadruple(
      cleanArray,
      this.Memory
    );

    this.QuadrupleGenerator.genConditionalJumpBack(res);
    this.contextStack.pop();
  }

  enterCondition(ctx) {
    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    let cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    this.currentContext = "CONDITION";
    this.startingElse = cleanArray.some((el) => el.type === "else");

    this.contextStack.push("CONDITION");
    if (this.startingElse) {
      this.contextStack.push("IF");
      this.contextStack.push("ELSE");
    }
  }

  exitCondition(ctx) {
    this.currentContext = null;

    this.QuadrupleGenerator.bringGoto();
    this.contextStack.pop();
  }
}

export default Porfavor;
