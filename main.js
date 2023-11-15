import antlr4 from "antlr4";
import fs from "fs";
import babyduckLexer from "./parser/babyduckLexer.js";
import babyduckParser from "./parser/babyduckParser.js";
import Porfavor from "./syntactic_analyzer/porfavor.js";
import Memory from "./syntactic_analyzer/memory.js";
import Ayuda from "./Runner.js";

const args = process.argv.slice(2);
const inputFile = fs.readFileSync(args[0], "utf-8");
const chars = new antlr4.InputStream(inputFile);
const lexer = new babyduckLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new babyduckParser(tokens);

const tree = parser.programa();

// throw syntax error before proceeding with tree alk
if (tree.exception || parser._syntaxErrors) {
  throw new Error("Syntax error");
}

// initialize memory
const memory = new Memory();
// get global tokens
const tokenObjects = tokens.tokens;

// initialize listener
const listener = new Porfavor(tokenObjects, memory);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

// get quadruples back from listener
const quads = listener.getQuadruples();
console.table(quads);

// initialize runner
const runner = new Ayuda(quads, memory);
// give it the quads and the memory
runner.run(quads, memory);
