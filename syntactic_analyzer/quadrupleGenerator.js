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
    const typeStack = new Stack();
    let tempIndex = 0;

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

    console.log(
      "\n============================================================================="
    );

    console.log("GENERATING QUADRUPLE FOR =", tokenArray);

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
          console.log("OPERAND STACK=", operandStack.print("name"));
          console.log("OPERATOR STACK=", operatorStack.print("name"));
          addQuadruple(operandStack, operatorStack);
        }

        operatorStack.pop();
        if (
          operatorStack.top().name === "*" ||
          operatorStack.top().name === "/"
        ) {
          addQuadruple(operandStack, operatorStack);
        }
      }

      console.log("OPERAND STACK=", operandStack.print("name"));
      console.log("OPERATOR STACK=", operatorStack.print("name"));
    }

    while (!operatorStack.isEmpty() && operatorStack.top().name !== "=") {
      console.log("OPERAND STACK=", operandStack.print("name"));
      console.log("OPERATOR STACK=", operatorStack.print("name"));
      addQuadruple(operandStack, operatorStack);
    }

    const tempVar = tempId.next().value;

    const second = operandStack.pop().name;
    const first = operandStack.pop().name;
    operandStack.push({ type: "Identifier", name: tempVar });
    quadruplesQ.push(["=", first, second]);

    console.log(quadruplesQ);

    console.log(
      "\n============================================================================="
    );
  }

  genPrintQuadruple() {}

  genConditionQuadruple() {}

  genCycleQuadruple() {}

  genFCallQuadruple() {}

  generateQuadruple(tokenArray, tokenType) {
    switch (tokenType) {
      case "assign":
        this.genAssignQuadruple(tokenArray);
        break;
      case "print":
        console.log("case");
        break;
      case "condition":
        console.log("case");
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
