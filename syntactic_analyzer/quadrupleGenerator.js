import Stack from "../data_structures/stack.js";

class QuadrupleGenerator {
  constructor() {
    this.globalQuadruples = [];
    this.jumpStack = new Stack();
    this.currentTemp = 0;
    this.loopStartIndex = 0;
  }

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

    const second = operandStack.pop();
    const first = operandStack.pop();
    memCallback.checkMemoryTypes({ name: "=", type: "=" }, first, second);

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

  getQuadruples() {
    return this.globalQuadruples;
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
