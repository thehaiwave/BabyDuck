import antlr4 from "antlr4";
import fs from "fs";
import babyduckLexer from "./babyduckLexer.js";
import babyduckParser from "./babyduckParser.js";

const input = fs.readFileSync("test_input.txt", "utf-8");
const chars = new antlr4.InputStream(input);
const lexer = new babyduckLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new babyduckParser(tokens);
const tree = parser.program();

if (!tree.exception && !parser._syntaxErrors)
  console.log("EXITO: Archivo parseado correctamente");
