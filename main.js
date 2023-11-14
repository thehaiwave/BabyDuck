import antlr4 from "antlr4";
import fs from "fs";
import babyduckLexer from "./parser/babyduckLexer.js";
import babyduckParser from "./parser/babyduckParser.js";
import Porfavor from "./syntactic_analyzer/porfavor.js";
import Memory from "./syntactic_analyzer/memory.js";
import Ayuda from "./Runner.js";

const input = fs.readFileSync("factorial.babyduck", "utf-8");
const chars = new antlr4.InputStream(input);
const lexer = new babyduckLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new babyduckParser(tokens);
const tree = parser.programa();

const memory = new Memory();
const tokenObjects = tokens.tokens;

const listener = new Porfavor(tokenObjects, memory);

antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

const quads = listener.getQuadruples();
//console.log(quads);
const runner = new Ayuda(quads, memory);
runner.run(quads, memory);
