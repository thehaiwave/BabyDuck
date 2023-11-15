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

    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;
    const funcName = ctx.Identifier().getText();

    let cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );
    let currentArg = 0;
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

        if (left[0].type === "CteString") {
          throw new Error("Cannot pass string as argument");
        }
        if (left.length === 1 && left[0].type === "Identifier") {
          cleanOne.push(left[0]);
        } else {
          cleanOne.push(left);
        }
      }
    }

    let left = cleanArray.slice(lInd, i);
    lInd = i + 1;

    if (left.length === 1 && left[0].type === "Identifier") {
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

        this.Memory.checkArgType(
          tempVarExp.latestTempVarType,
          funcName,
          currentArg
        );

        currentArg++;
        this.QuadrupleGenerator.insertQuadruple([
          ["PARAM", tempVarExp.latestTempVar],
        ]);
      } else {
        let lookedUpType = this.Memory.resolveVar(cleanOne[j]);

        this.Memory.checkArgType(lookedUpType, funcName, currentArg);

        currentArg++;
        this.QuadrupleGenerator.insertQuadruple([["PARAM", cleanOne[j].name]]);
      }
    }
    this.QuadrupleGenerator.insertQuadruple([["GOSUB", funcName]]);
  }

  enterBody(ctx) {
    if (this.seenMain === false && this.contextStack.top() === "PROGRAMA") {
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
    } else if (this.contextStack.top() === "FUNCTION") {
      this.contextStack.pop();
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
    this.contextStack.push("FUNCTION");
    const funcContext = ctx.parentCtx.Identifier().getText();
    const funcName = ctx.Identifier().getText();
    const funcArgs = {};

    if (ctx.idTypeSequence()) {
      let argQuant = ctx.idTypeSequence().Identifier().length;

      for (let i = 0; i < argQuant; i++) {
        let argName = ctx.idTypeSequence().Identifier()[i].getText();
        let argType = ctx.idTypeSequence().type()[i].getText();
        if (funcArgs?.[argName] !== undefined) {
          throw new Error(`Duplicated argument name.`);
        }
        funcArgs[argName] = { type: argType, value: null };
      }
    }

    this.Memory.insertFunc(funcName, {
      args: funcArgs,
      context: funcContext,
    });
  }

  exitFuncs(ctx) {
    this.QuadrupleGenerator.insertQuadruple([["ENDFUNC"]]);
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

      if (res.latestTempVarType !== "bool") {
        throw new Error("Condition must be boolean");
      }

      this.QuadrupleGenerator.setGoto([["GOTOF", res.latestTempVar, null]]);
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
        this.QuadrupleGenerator.insertQuadruple([
          ["PRINT", tempVarExp.latestTempVar],
        ]);
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

    if (res.latestTempVarType !== "bool") {
      throw new Error("Condition must be boolean");
    }

    this.QuadrupleGenerator.genConditionalJumpBack(res.latestTempVar);
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
