import Stack from "../data_structures/stack.js";
import babyduckListener from "../parser/babyduckListener.js";
import SemanticChecker from "./semanticChecker.js";
import QuadrupleGenerator from "./quadrupleGenerator.js";

class Porfavor extends babyduckListener {
  constructor(tokenObjects) {
    super();
    this.jumpStack = new Stack();
    this.tokenObjects = tokenObjects;

    this.contextStack = new Stack();

    this.QuadrupleGenerator = new QuadrupleGenerator();
    this.SemanticChecker = new SemanticChecker();
    this.currentContext = null;
    this.seenMain = false;
    this.startingElse = false;
    this.seenIf = false;
    this.seenElse = false;
    this.letGotof = false;
    this.ifCounter = 0;
  }

  enterPrograma(ctx) {
    console.log("Programa");
    this.contextStack.push("PROGRAMA");

    this.QuadrupleGenerator.setGoto([["GOTO", null, null]]);
  }

  exitPrograma(ctx) {
    console.log("Programa");
    this.QuadrupleGenerator.printQuadruples();
    console.log("dacontext", this.contextStack);
  }

  enterF_call(ctx) {
    console.log("FCALL");
    console.log("ONGOT=", ctx.Identifier().getText());
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
      console.log("WE IN IF LOL");

      this.contextStack.pop();
    } else if (this.contextStack.top() === "ELSE") {
      console.log("WE IN ELSE LOL");
      // this.QuadrupleGenerator.setGoto([["GOTO", null, null]]);
      this.QuadrupleGenerator.bringGoto();

      this.contextStack.pop();
    }
  }

  exitBody(ctx) {}

  enterVars(ctx) {
    console.log("Vars");
  }

  exitVars(ctx) {
    console.log("EXIT Vars");
  }

  enterFuncs(ctx) {
    console.log("Funcs");
    this.currentContext = "FUNCTION";
  }

  exitFuncs(ctx) {
    console.log("Funcs");
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
      let res = this.QuadrupleGenerator.genExpressionQuadruple(cleanArray);
      console.log("EVAL CONDT");
      this.QuadrupleGenerator.setGoto([["GOTOF", res, null]]);
      this.currentContext = "IF";
    }
  }

  exitAssign(ctx) {
    console.log("Statement");
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

    this.QuadrupleGenerator.genAssignQuadruple(cleanArray);
    this.currentContext = null;
  }

  exitStatement(ctx) {
    console.log("Statement");
  }

  enterPrint(ctx) {
    if (!ctx) return;
    console.log("PRINTING", ctx.getText());

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
        console.log("LEFT=", left);
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

    console.log("FOR REAL", cleanOne);

    for (let j = 0; j < cleanOne.length; j++) {
      if (Array.isArray(cleanOne[j])) {
        let tempVarExp = this.QuadrupleGenerator.genExpressionQuadruple(
          cleanOne[j]
        );
        this.QuadrupleGenerator.insertQuadruple([["PRINT", tempVarExp]]);
      } else {
        this.QuadrupleGenerator.insertQuadruple([["PRINT", cleanOne[j].name]]);
      }
    }
  }

  // enterPrint(ctx) {
  //   console.log("Print");
  //   const matchStart = ctx.start.tokenIndex;
  //   const matchEnd = ctx.stop.tokenIndex;

  //   const cleanArray = this.SemanticChecker.transformAntlrToArray(
  //     this.tokenObjects,
  //     matchStart,
  //     matchEnd
  //   );

  //   console.log("CLEAN=", cleanArray);
  //   function convert(array) {
  //     let result = [];
  //     let currentExpr = [];

  //     for (const token of array) {
  //       if (token.type === "CteString") {
  //         result.push(token);
  //       } else if (token.type === ",") {
  //         if (currentExpr.length > 0) {
  //           result.push(currentExpr);
  //           currentExpr = [];
  //         }
  //       } else {
  //         currentExpr.push(token);
  //       }
  //     }

  //     if (currentExpr.length > 0) {
  //       result.push(currentExpr);
  //     }

  //     return result;
  //   }

  //   console.log("XDDD", convert(cleanArray));
  // }

  enterCondition(ctx) {
    console.log("Conditionlol");
    this.contextStack.push("CONDITION");

    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    let cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    this.currentContext = "CONDITION";
    this.startingElse = cleanArray.some((el) => el.type === "else");
    this.contextStack.push("IF");
    if (this.startingElse) this.contextStack.push("ELSE");
  }

  exitCondition(ctx) {
    console.log("Condition");
    this.currentContext = null;

    // this.QuadrupleGenerator.bringGoto();
    console.log(this.contextStack);
    this.contextStack.pop();
  }
}

export default Porfavor;
