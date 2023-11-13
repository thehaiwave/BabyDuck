import Queue from "../data_structures/queue.js";
import Stack from "../data_structures/stack.js";
import { semanticCube } from "./semanticChecker.js";

class QuadrupleGenerator {
  constructor() {
    this.globalQuadruples = [];
    this.jumpStack = new Stack();
    this.currentTemp = 0;
  }

  genProgramaStart() {}

  genProgramaEnd() {}

  genTempId() {
    return "t" + this.currentTemp++;
  }

  addToQuadruple(quad) {
    const elements = [];
    quad.forEach((subarray) => {
      this.globalQuadruples.push(subarray);
    });
  }

  genAssignQuadruple(tokenArray) {
    const quadruplesQ = [];
    const operatorStack = new Stack();
    const operandStack = new Stack();

    const addQuadruple = (operandStack, operatorStack) => {
      const second = operandStack.pop().name;
      const first = operandStack.pop().name;
      const op = operatorStack.pop().name;
      const tempVar = this.genTempId();

      operandStack.push({ type: "Identifier", name: tempVar });
      quadruplesQ.push([op, first, second, tempVar]);
    };

    function evalLeft() {
      while (
        !operatorStack.isEmpty() &&
        operatorStack.top().name !== "=" &&
        operatorStack.top().name !== "("
      ) {
        addQuadruple(operandStack, operatorStack);
      }
    }

    // console.log(
    //   "\n============================================================================="
    // );

    // console.log("GENERATING QUADRUPLE FOR =", tokenArray);

    for (let token of tokenArray) {
      const { type } = token;
      if (type === "Identifier" || type === "CteInt" || type === "CteFloat") {
        operandStack.push(token);
        if (
          !operatorStack.isEmpty() &&
          (operatorStack.top().name === "*" || operatorStack.top().name === "/")
        ) {
          addQuadruple(operandStack, operatorStack);
        }
      } else if (
        type === "*" ||
        type === "/" ||
        type === "+" ||
        type === "-" ||
        type === "=" ||
        type === "("
      ) {
        operatorStack.push(token);
      } else if (type === ")") {
        while (!operatorStack.isEmpty() && operatorStack.top().name !== "(") {
          addQuadruple(operandStack, operatorStack);
        }

        operatorStack.pop();
        if (
          operatorStack.top().name === "*" ||
          operatorStack.top().name === "/"
        ) {
          addQuadruple(operandStack, operatorStack);
        }
      } else if (type === "<" || type === ">" || type === "!=") {
        evalLeft();
        operatorStack.push(token);
      }
    }

    while (!operatorStack.isEmpty() && operatorStack.top().name !== "=") {
      addQuadruple(operandStack, operatorStack);
    }

    const tempVar = this.genTempId();

    const second = operandStack.pop().name;
    const first = operandStack.pop().name;
    operandStack.push({ type: "Identifier", name: tempVar });
    quadruplesQ.push(["=", first, second]);
    this.addToQuadruple(quadruplesQ);

    // console.log("THE QUADRUPLE = ", quadruplesQ);

    // console.log(
    //   "\n============================================================================="
    // );
  }

  genExpressionQuadruple(tokenArray) {
    if (tokenArray.length === 1) {
      return tokenArray[0].name;
    }

    const quadruplesQ = [];
    const operatorStack = new Stack();
    const operandStack = new Stack();
    let latestTempVar = 0;

    const addQuadruple = (operandStack, operatorStack) => {
      const second = operandStack.pop().name;
      const first = operandStack.pop().name;
      const op = operatorStack.pop().name;
      const tempVar = this.genTempId();
      latestTempVar = tempVar;

      operandStack.push({ type: "Identifier", name: tempVar });
      quadruplesQ.push([op, first, second, tempVar]);
    };

    function evalLeft() {
      while (
        !operatorStack.isEmpty() &&
        operatorStack.top().name !== "=" &&
        operatorStack.top().name !== "("
      ) {
        addQuadruple(operandStack, operatorStack);
      }
    }

    // console.log(
    //   "\n============================================================================="
    // );

    // console.log("GENERATING QUADRUPLE FOR =", tokenArray);

    for (let token of tokenArray) {
      const { type } = token;
      if (type === "Identifier" || type === "CteInt" || type === "CteFloat") {
        operandStack.push(token);
        if (
          !operatorStack.isEmpty() &&
          (operatorStack.top().name === "*" || operatorStack.top().name === "/")
        ) {
          addQuadruple(operandStack, operatorStack);
        }
      } else if (
        type === "*" ||
        type === "/" ||
        type === "+" ||
        type === "-" ||
        type === "=" ||
        type === "("
      ) {
        operatorStack.push(token);
      } else if (type === ")") {
        while (!operatorStack.isEmpty() && operatorStack.top().name !== "(") {
          addQuadruple(operandStack, operatorStack);
        }

        operatorStack.pop();
        if (
          operatorStack.top().name === "*" ||
          operatorStack.top().name === "/"
        ) {
          addQuadruple(operandStack, operatorStack);
        }
      } else if (type === "<" || type === ">" || type === "!=") {
        evalLeft();
        operatorStack.push(token);
      }
    }

    while (!operatorStack.isEmpty() && operatorStack.top().name !== "=") {
      addQuadruple(operandStack, operatorStack);
    }

    this.addToQuadruple(quadruplesQ);

    return latestTempVar;

    // const tempVar = tempId.next().value;

    // const second = operandStack.pop().name;
    // const first = operandStack.pop().name;
    // operandStack.push({ type: "Identifier", name: tempVar });
    // quadruplesQ.push(["=", first, second]);

    // console.log("THE QUADRUPLE = ", quadruplesQ);

    // console.log(
    //   "\n============================================================================="
    // );
  }

  genPrintQuadruple(tokenArray) {
    const quadruplesQ = [];
    console.log(tokenArray);

    const lol = tokenArray.map((seq) => {
      if (seq.type === "CteString") {
        return seq.name;
      }
    });

    console.log("d", lol);
  }

  genIfElse(tokenArray) {
    console.log("IF-CONDITION=", tokenArray[2].getText());
    console.log;
  }

  genCycleQuadruple() {}

  genFCallQuadruple() {}

  generateQuadruple(tokenArray, tokenType) {
    switch (tokenType) {
      case "assign":
        this.genAssignQuadruple(tokenArray);
        break;
      case "print":
        this.genPrintQuadruple(tokenArray);
        break;
      case "if":
        console.log("case");
        break;
      case "ifElse":
        this.genIfElse(tokenArray);
        break;
      case "cycle":
        console.log("case");
        break;
      case "f_call":
        console.log("case");
        break;
    }
  }

  printQuadruples() {
    const damn = this.globalQuadruples.map((element, i) =>
      console.log(i, element)
    );
  }

  insertQuadruple(quad) {
    this.addToQuadruple(quad);
  }

  setGoto(quad) {
    this.addToQuadruple(quad);
    this.jumpStack.push(this.globalQuadruples.length - 1);
  }

  bringGoto() {
    const gotoLine = this.jumpStack.pop();
    this.globalQuadruples[gotoLine][2] = this.globalQuadruples.length;
  }
}

export default QuadrupleGenerator;
