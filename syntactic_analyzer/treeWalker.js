import VarTable from "../varTable.js";
import FuncDir from "../funcDir.js";
import babyduckListener from "../parser/babyduckListener.js";
import QuadrupleGenerator from "./quadrupleGenerator.js";
import SemanticChecker from "./semanticChecker.js";

class TreeWalker extends babyduckListener {
  constructor(tokenObjects) {
    super();
    this.tokenObjects = tokenObjects;
    this.varTableInstance = new VarTable();
    this.funcDir = new FuncDir();
    this.QuadrupleGenerator = new QuadrupleGenerator();
    this.SemanticChecker = new SemanticChecker();
    this.currentContext = null;
    this.mainLine = null;
  }

  enterPrograma(ctx) {
    this.QuadrupleGenerator.insertQuadruple([["GOTO", "MAIN"]]);
  }

  enterExpression(ctx) {
    console.log("OH MY GOD", ctx.getText());
    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    const cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    // this.QuadrupleGenerator.generateQuadruexpple(cleanArray);

    // console.log(cleanArray);
  }

  exitPrograma(ctx) {
    // console.log("ENDPROG");
    this.QuadrupleGenerator.insertQuadruple([["END", "PATITO"]]);
    this.QuadrupleGenerator.printQuadruples();
  }

  enterFuncs(ctx) {
    const funcName = ctx.Identifier().getText();
    this.currentContext = funcName;
    console.log("FUNCTION");
  }

  exitFuncs(ctx) {
    this.currentContext = null;
  }

  exitVars(ctx) {
    console.log("VARS");
  }

  enterMain(ctx) {
    console.log("====MAIN");
  }

  // exitStatement(ctx) {
  //   console.log("STATEMENT ON" + this.currentContext);
  // }

  enterAssign(ctx) {
    console.log("ASSIGN");
  }

  exitAssign(ctx) {
    if (!ctx) {
      return;
    }
    console.log("PARENT====", ctx.parentCtx);

    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    const cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    this.QuadrupleGenerator.generateQuadruple(cleanArray, "assign");
  }

  enterF_call(ctx) {
    console.log("F_CALL");
  }

  enterPrint(ctx) {
    console.log("PRINT");
  }

  enterCondition(ctx) {
    this.currentContext = "CONDITION";
    console.log(ctx.children[2]);

    const matchStart = ctx.children[2].start.tokenIndex;
    const matchEnd = ctx.children[2].stop.tokenIndex;

    let cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    // 

    this.QuadrupleGenerator.genExpressionQuadruple(cleanArray);
    this.QuadrupleGenerator.insertQuadruple([["GOTOV", "MAIN"]]);

    console.log(cleanArray);
    // console.log(ctx.children[2].getText());
    // const matchStart = ctx.children[2].start.tokenIndex;
    // const matchEnd = ctx.children[2].stop.tokenIndex;
    // console.log(matchStart, matchEnd);
    // const matchStart = ctx.children[2].start.tokenIndex;
    // const matchEnd = ctx.children[2].stop.tokenIndex;
    // let cleanArray = this.SemanticChecker.transformAntlrToArray(
    //   this.tokenObjects,
    //   matchStart,
    //   matchEnd
    // );

    // console.log(cleanArray);
    // console.log("CONDITION", ctx.children[2].start.tokenIndex);
    // this.QuadrupleGenerator.genExpressionQuadruple(cleanArray);
  }

  exitCondition(ctx) {
    this.currentContext = null;
  }

  enterCycle(ctx) {
    console.log("CYCLE");
  }

  exitCycle(ctx) {
    this.currentContext = null;
  }

  // exitPrograma(ctx) {
  //   // programa: Program Identifier Semi vars? funcs* Main body End;
  //   console.log("LMAO");
  //   console.log(this.QuadrupleGenerator.printQuadruples());
  // }
  // exitVars(ctx) {
  //   if (!ctx) {
  //     return;
  //   }

  //   const varsContext = ctx.parentCtx.Identifier().getText();
  //   const typeQuant = ctx.commaSeparatedId().length;

  //   for (let i = 0; i < typeQuant; i++) {
  //     const varsType = ctx.type()[i].getText();
  //     const varNumbers = ctx.commaSeparatedId()[i].Identifier().length;
  //     if (varNumbers > 1) {
  //       for (let j = 0; j < varNumbers; j++) {
  //         const varName = ctx.commaSeparatedId()[i].Identifier()[j].getText();
  //         this.varTableInstance.insertVar(varName, varsType, varsContext);
  //       }
  //     } else {
  //       const varName = ctx.commaSeparatedId()[i].Identifier()[0].getText();
  //       this.varTableInstance.insertVar(varName, varsType, varsContext);
  //     }
  //   }
  // }

  // exitFuncs(ctx) {
  //   if (!ctx) {
  //     return;
  //   }

  //   const funcContext = ctx.parentCtx.Identifier().getText();
  //   const funcName = ctx.Identifier().getText();
  //   const funcArgs = {};
  //   this.currentContext = funcName;

  //   if (ctx.idTypeSequence()) {
  //     let argQuant = ctx.idTypeSequence().Identifier().length;

  //     for (let i = 0; i < argQuant; i++) {
  //       let argName = ctx.idTypeSequence().Identifier()[i].getText();
  //       let argType = ctx.idTypeSequence().type()[i].getText();
  //       if (funcArgs?.[argName] !== undefined) {
  //         throw new Error(`Duplicated argument name.`);
  //       }
  //       funcArgs[argName] = argType;
  //     }
  //   }

  //   this.funcDir.insertFunc(funcName, funcArgs, funcContext);
  // }

  // exitAssign(ctx) {
  //   if (!ctx) {
  //     return;
  //   }
  //   console.log("PARENT====", ctx.parentCtx);
  //   this.QuadrupleGenerator.insertQuadruple([
  //     ["FUNCTION", this.currentContext],
  //   ]);

  //   const matchStart = ctx.start.tokenIndex;
  //   const matchEnd = ctx.stop.tokenIndex;

  //   const cleanArray = this.SemanticChecker.transformAntlrToArray(
  //     this.tokenObjects,
  //     matchStart,
  //     matchEnd
  //   );

  //   this.QuadrupleGenerator.generateQuadruple(cleanArray, "assign");
  // }

  // exitPrint(ctx) {
  //   if (!ctx) {
  //     return;
  //   }

  //   function splitByComma(arr) {
  //     let result = [];
  //     let currentSubArray = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i].type === "CteString" || arr[i].type === "Identifier") {
  //         result.push(arr[i]);
  //       } else if (arr[i].name === "," && arr[i].type === ",") {
  //         if (currentSubArray.length > 0) {
  //           result.push(currentSubArray);
  //           currentSubArray = [];
  //         }
  //       } else {
  //         currentSubArray.push(arr[i]);
  //       }
  //     }
  //     if (currentSubArray.length > 0) {
  //       result.push(currentSubArray);
  //     }
  //     return result;
  //   }

  //   const matchStart = ctx.start.tokenIndex;
  //   const matchEnd = ctx.stop.tokenIndex;

  //   let cleanArray = this.SemanticChecker.transformAntlrToArray(
  //     this.tokenObjects,
  //     matchStart,
  //     matchEnd
  //   );

  //   cleanArray.pop();
  //   cleanArray = cleanArray.slice(2);
  //   let lmao = splitByComma(cleanArray);

  //   this.QuadrupleGenerator.generateQuadruple(lmao, "print");

  //   console.log(lmao);
  // }

  // exitCondition(ctx) {
  //   const matchStart = ctx.start.tokenIndex;
  //   const matchEnd = ctx.stop.tokenIndex;

  //   let cleanArray = this.SemanticChecker.transformAntlrToArray(
  //     this.tokenObjects,
  //     matchStart,
  //     matchEnd
  //   );

  //   const withElse = cleanArray.some((el) => el.type === "else");

  //   if (withElse) {
  //     this.QuadrupleGenerator.generateQuadruple(ctx.children, "ifElse");
  //   } else {
  //     this.QuadrupleGenerator.generateQuadruple(ctx.children, "if");
  //   }
  // }

  // exitCycle(ctx) {
  //   console.log("XD");
  //   console.log(ctx.getText());
  // }
}

export default TreeWalker;
