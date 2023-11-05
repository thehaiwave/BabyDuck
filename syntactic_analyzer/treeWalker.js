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
  }

  exitVars(ctx) {
    if (!ctx) {
      return;
    }

    const varsContext = ctx.parentCtx.Identifier().getText();
    const typeQuant = ctx.commaSeparatedId().length;

    for (let i = 0; i < typeQuant; i++) {
      const varsType = ctx.type()[i].getText();
      const varNumbers = ctx.commaSeparatedId()[i].Identifier().length;
      if (varNumbers > 1) {
        for (let j = 0; j < varNumbers; j++) {
          const varName = ctx.commaSeparatedId()[i].Identifier()[j].getText();
          this.varTableInstance.insertVar(varName, varsType, varsContext);
        }
      } else {
        const varName = ctx.commaSeparatedId()[i].Identifier()[0].getText();
        this.varTableInstance.insertVar(varName, varsType, varsContext);
      }
    }
  }

  exitFuncs(ctx) {
    if (!ctx) {
      return;
    }

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
        funcArgs[argName] = argType;
      }
    }

    this.funcDir.insertFunc(funcName, funcArgs, funcContext);
  }

  exitAssign(ctx) {
    const matchStart = ctx.start.tokenIndex;
    const matchEnd = ctx.stop.tokenIndex;

    const cleanArray = this.SemanticChecker.transformAntlrToArray(
      this.tokenObjects,
      matchStart,
      matchEnd
    );

    this.QuadrupleGenerator.generateQuadruple(cleanArray, "assign");
  }
}

export default TreeWalker;
