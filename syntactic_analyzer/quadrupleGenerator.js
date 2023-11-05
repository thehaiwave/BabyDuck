import Queue from "../data_structures/queue.js";
import Stack from "../data_structures/stack.js";
import { semanticCube } from "./semanticChecker.js";

class QuadrupleGenerator {
  constructor() {
    this.globalQuadruples = [];
  }

  genAssignQuadruple(tokenArray) {
    const quadruplesQ = [];
    const operatorStack = new Stack();
    const operandStack = new Stack();

    function* genTempId() {
      let index = 0;
      while (true) {
        yield "t" + index++;
      }
    }

    const tempId = genTempId();

    function addQuadruple(operandStack, operatorStack) {
      const second = operandStack.pop().name;
      const first = operandStack.pop().name;
      const op = operatorStack.pop().name;
      const tempVar = tempId.next().value;

      operandStack.push({ type: "Identifier", name: tempVar });
      quadruplesQ.push([op, first, second, tempVar]);
    }

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

    const tempVar = tempId.next().value;

    const second = operandStack.pop().name;
    const first = operandStack.pop().name;
    operandStack.push({ type: "Identifier", name: tempVar });
    quadruplesQ.push(["=", first, second]);

    // console.log("THE QUADRUPLE = ", quadruplesQ);

    // console.log(
    //   "\n============================================================================="
    // );
  }

  genExpressionQuadruple(tokenArray) {
    const quadruplesQ = [];
    const operatorStack = new Stack();
    const operandStack = new Stack();

    function* genTempId() {
      let index = 0;
      while (true) {
        yield "t" + index++;
      }
    }

    const tempId = genTempId();

    function addQuadruple(operandStack, operatorStack) {
      const second = operandStack.pop().name;
      const first = operandStack.pop().name;
      const op = operatorStack.pop().name;
      const tempVar = tempId.next().value;

      operandStack.push({ type: "Identifier", name: tempVar });
      quadruplesQ.push([op, first, second, tempVar]);
    }

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

    // const tempVar = tempId.next().value;

    // const second = operandStack.pop().name;
    // const first = operandStack.pop().name;
    // operandStack.push({ type: "Identifier", name: tempVar });
    // quadruplesQ.push(["=", first, second]);

    console.log("THE QUADRUPLE = ", quadruplesQ);

    // console.log(
    //   "\n============================================================================="
    // );
  }

  genPrintQuadruple(tokenArray) {
    const quadruplesQ = [];

    tokenArray.map((seq) => {
      if (Array.isArray(seq)) {
        this.genExpressionQuadruple(seq);
        console.log("xd");
      } else {
        console.log(["PRINT", seq.name]);
      }
    });
  }

  genIfElse(tokenArray) {
    console.log("IF-CONDITION=", tokenArray[2].getText());
    console.log("CONDITION-BODY=", tokenArray[4].getText());
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
}

export default QuadrupleGenerator;
