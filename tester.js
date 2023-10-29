import fs from "fs";
import path from "path";
import antlr4 from "antlr4";
import babyduckLexer from "./parser/babyduckLexer.js";
import babyduckParser from "./parser/babyduckParser.js";

const TEST_DIR = "./tests";

const tester = () => {
  const statusObject = {};

  try {
    const files = fs.readdirSync(TEST_DIR);

    files.forEach((file) => {
      const filePath = path.join(TEST_DIR, file);

      if (fs.statSync(filePath).isFile()) {
        const input = fs.readFileSync(filePath, "utf-8");
        const chars = new antlr4.InputStream(input);
        const lexer = new babyduckLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new babyduckParser(tokens);
        const tree = parser.programa();

        if (!tree.exception && !parser._syntaxErrors) {
          statusObject[file] = "Archivo parseado correctamente";
        } else {
          statusObject[file] = "ERROR";
        }
      }
    });
  } catch (err) {
    console.error("ERROR:", err.message);
  }
  return statusObject;
};

const testingResult = tester();
console.log(testingResult);

export default tester;
