import antlr4 from "antlr4";
import fs from "fs";
import babyduckLexer from "./parser/babyduckLexer.js";
import babyduckParser from "./parser/babyduckParser.js";
import Porfavor from "./syntactic_analyzer/porfavor.js";

const input = fs.readFileSync("main.babyduck", "utf-8");
const chars = new antlr4.InputStream(input);
const lexer = new babyduckLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new babyduckParser(tokens);
const tree = parser.programa();

const tokenObjects = tokens.tokens;
// const tokenStrings = tokenObjects.map((token) => token.text);

const listener = new Porfavor(tokenObjects);

antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

// console.log("== Tabla de Variables ==");
// console.log(listener.varTableInstance.getVariables());

// console.log("\n== Dir de Funciones ==");
// console.log(listener.funcDir.getVariables());
