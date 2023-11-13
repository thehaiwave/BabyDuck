import Queue from "../data_structures/queue.js";
import Stack from "../data_structures/stack.js";
import { semanticCube } from "./semanticChecker.js";

class QuadrupleGenerator {
  constructor() {
    this.globalQuadruples = [];
    this.jumpStack = new Stack();
    this.currentTemp = 0;
    this.loopStartIndex = 0;
  }

  genProgramaStart() {}

  genProgramaEnd() {}

  genTempId() {
    return "t" + this.currentTemp++;
  }

  addToQuadruple(quad) {
    quad.forEach((subarray) => {
      this.globalQuadruples.push(subarray);
    });
  }

  genAssignQuadruple(tokenArray, memCallback) {
    const quadruplesQ = [];
    const operatorStack = new Stack();
    const operandStack = new Stack();

    const addQuadruple = (operandStack, operatorStack) => {
      const second = operandStack.pop();
      const first = operandStack.pop();
      const op = operatorStack.pop();

      let returnType = memCallback.checkMemoryTypes(op, first, second);
      const tempVar = this.genTempId();

      memCallback.insertTempVariable(tempVar, returnType);

      operandStack.push({ type: "Identifier", name: tempVar });
      quadruplesQ.push([op.name, first.name, second.name, tempVar]);
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

    // const tempVar = this.genTempId();

    // console.log(tempVar);
    const second = operandStack.pop();
    const first = operandStack.pop();
    memCallback.checkMemoryTypes({ name: "=", type: "=" }, first, second);
    // operandStack.push({ type: "Identifier", name: tempVar });
    quadruplesQ.push(["=", first.name, second.name]);
    this.addToQuadruple(quadruplesQ);
  }

  genExpressionQuadruple(tokenArray, memCallback) {
    if (tokenArray.length === 1) {
      return tokenArray[0].name;
    }

    const quadruplesQ = [];
    const operatorStack = new Stack();
    const operandStack = new Stack();
    let latestTempVar = 0;

    const addQuadruple = (operandStack, operatorStack) => {
      const second = operandStack.pop();
      const first = operandStack.pop();
      const op = operatorStack.pop();
      const tempVar = this.genTempId();
      latestTempVar = tempVar;
      let returnType = memCallback.checkMemoryTypes(op, first, second);
      memCallback.insertTempVariable(tempVar, returnType);

      operandStack.push({ type: "Identifier", name: tempVar });
      quadruplesQ.push([op.name, first.name, second.name, tempVar]);
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

  getQuadruples() {
    return this.globalQuadruples;
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
      console.log(element)
    );
  }

  insertQuadruple(quad) {
    this.addToQuadruple(quad);
  }

  setGoto(quad) {
    this.addToQuadruple(quad);
    this.jumpStack.push(this.globalQuadruples.length - 1);
  }

  bringGoto(offset = 0) {
    const gotoLine = this.jumpStack.pop();
    this.globalQuadruples[gotoLine][2] = this.globalQuadruples.length + offset;
  }

  cycleJump() {
    this.loopStartIndex = this.globalQuadruples.length;
  }

  genConditionalJumpBack(conditionVar) {
    this.globalQuadruples.push(["GOTOV", conditionVar, this.loopStartIndex]);
  }
}

export default QuadrupleGenerator;
