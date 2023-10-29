import antlr4 from "antlr4";
import fs from "fs";
import VarTable from "./varTable.js";
import FuncDir from "./funcDir.js";
import babyduckLexer from "./parser/babyduckLexer.js";
import babyduckParser from "./parser/babyduckParser.js";
import babyduckListener from "./parser/babyduckListener.js";

class CustomListener extends babyduckListener {
  constructor() {
    super();
    this.varTableInstance = new VarTable();
    this.funcDir = new FuncDir();
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
}

const input = fs.readFileSync("main.babyduck", "utf-8");
const chars = new antlr4.InputStream(input);
const lexer = new babyduckLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new babyduckParser(tokens);
const tree = parser.programa();

const listener = new CustomListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
