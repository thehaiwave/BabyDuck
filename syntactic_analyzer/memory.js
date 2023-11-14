import { semanticCube } from "./semanticChecker.js";

class Memory {
  constructor() {
    this.memory = {};
    this.intCounter = 0;
    this.intUpper = 999;
    this.floatCounter = 1000;
    this.floatUpper = 1999;
    this.temporalBoolCounter = 2000;
    this.temporalBoolUpper = 2999;
    this.temporalIntCounter = 3000;
    this.temporalIntUpper = 3999;
    this.temporalFloatCounter = 4000;
    this.temporalFloatUpper = 4999;
  }

  resolveVar(symbol) {
    if (symbol.type === "CteInt") {
      return "int";
    } else if (symbol.type === "CteFloat") {
      return "float";
    } else if (this.memory[symbol.name]) {
      return this.memory[symbol.name].type;
    } else {
      return null;
    }
  }

  addTempVariableToRegister(obj) {
    const { type } = obj;

    switch (type) {
      case "int":
        this.memory[obj.name] = obj;
        break;
      case "float":
        this.memory[obj.name] = obj;
        break;
      case "bool":
        this.memory[obj.name] = obj;
        break;
    }
  }

  getTempVarMemoryAddress(type) {
    switch (type) {
      case "int":
        if (this.temporalIntCounter < this.temporalIntUpper) {
          return this.temporalIntCounter++;
        } else {
          throw new Error("Out of 'temporalInt' memory");
        }
      case "float":
        if (this.temporalFloatCounter < this.temporalFloatUpper) {
          return this.temporalFloatCounter++;
        } else {
          throw new Error("Out of 'temporalFloat' memory");
        }
      case "bool":
        if (this.temporalBoolCounter < this.temporalBoolUpper) {
          return this.temporalBoolCounter++;
        } else {
          throw new Error("Out of 'temporalBoolMemory' memory");
        }
    }
  }

  insertTempVariable(name, type) {
    const addr = this.getTempVarMemoryAddress(type);
    const newVar = {
      name: name,
      type: type,
      context: "temp",
      value: null,
      addr: addr,
    };

    this.addTempVariableToRegister(newVar);
  }

  checkMemoryTypes(op, left, right) {
    const leftSymbol = this.resolveVar(left);
    const rightSymbol = this.resolveVar(right);

    if (!leftSymbol || !rightSymbol) {
      throw new Error("Variable not declared");
    }

    const returnType = semanticCube[leftSymbol][rightSymbol][op.name];

    if (returnType === "error" || returnType === undefined) {
      throw new Error("Invalid operation");
    }

    return returnType;
  }

  getVarMemoryAddress(type) {
    switch (type) {
      case "int":
        if (this.intCounter < this.intUpper) {
          return this.intCounter++;
        } else {
          throw new Error("Out of memory");
        }
      case "float":
        if (this.floatCounter < this.floatUpper) {
          return this.floatCounter++;
        } else {
          throw new Error("Out of memory");
        }
    }
  }

  addVariableToRegister(obj) {
    const { type } = obj;

    switch (type) {
      case "int":
        this.memory[obj.name] = obj;
        break;
      case "float":
        this.memory[obj.name] = obj;
        break;
    }
  }

  validateSymbol(name) {
    if (this.memory[name] || this.memory[name]) {
      if (
        this.memory[name]?.context === this.currentContext ||
        this.memory[name]?.context === this.currentContext
      ) {
        throw new Error("Variable already declared in this context");
      }
    }
  }

  allocateVariable(name, type, context) {
    this.validateSymbol(name);

    const addr = this.getVarMemoryAddress(type);
    const newVar = {
      name: name,
      type: type,
      context: context,
      value: null,
      addr: addr,
    };

    this.addVariableToRegister(newVar);
  }

  printMemory() {
    console.log("Int memory: ", this.memory);
  }

  resolve(symbol) {
    if (!isNaN(symbol)) {
      return { value: +symbol };
    } else if (this.memory[symbol]) {
      return this.memory[symbol];
    } else {
      return null;
    }
  }

  assignMemory(first, second) {
    const firstSymbol = this.resolve(first);
    const secondSymbol = this.resolve(second);

    if (!firstSymbol || secondSymbol === undefined) {
      throw new Error("Variable not declared");
    }
    let valueToAssign;

    if (typeof secondSymbol === "object") {
      valueToAssign = secondSymbol.value;
    } else {
      valueToAssign = secondSymbol;
    }

    firstSymbol.value = valueToAssign;
  }

  addSum(first, second, temp) {
    const firstSymbol = this.resolve(first);
    const secondSymbol = this.resolve(second);
    const tempSymbol = this.resolve(temp);

    if (!firstSymbol || secondSymbol === undefined) {
      throw new Error("Variable not declared");
    }

    const sum = firstSymbol.value + secondSymbol.value;
    tempSymbol.value = sum;
  }

  comparison(first, second, temp) {
    const firstSymbol = this.resolve(first);
    const secondSymbol = this.resolve(second);
    const tempSymbol = this.resolve(temp);

    if (!firstSymbol || secondSymbol === undefined) {
      throw new Error("Variable not declared");
    }

    const comp = firstSymbol.value < secondSymbol.value;
    tempSymbol.value = comp;
  }

  gotocond(temp) {
    const tempSymbol = this.resolve(temp);

    if (!tempSymbol) {
      throw new Error("Variable not declared");
    }

    return tempSymbol.value;
  }

  print(element) {
    const symbol = this.resolve(element);

    if (!symbol) {
      console.log(element);
    } else {
      console.log(symbol.value);
    }
  }

  mul(first, second, temp) {
    const firstSymbol = this.resolve(first);
    const secondSymbol = this.resolve(second);
    const tempSymbol = this.resolve(temp);

    if (!firstSymbol || secondSymbol === undefined) {
      throw new Error("Variable not declared");
    }

    const mul = firstSymbol.value * secondSymbol.value;
    tempSymbol.value = mul;
  }

  sub(first, second, temp) {
    const firstSymbol = this.resolve(first);
    const secondSymbol = this.resolve(second);
    const tempSymbol = this.resolve(temp);

    if (!firstSymbol || secondSymbol === undefined) {
      throw new Error("Variable not declared");
    }

    const sub = firstSymbol.value - secondSymbol.value;
    tempSymbol.value = sub;
  }

  gte(first, second, temp) {
    const firstSymbol = this.resolve(first);
    const secondSymbol = this.resolve(second);
    const tempSymbol = this.resolve(temp);

    if (!firstSymbol || secondSymbol === undefined) {
      throw new Error("Variable not declared");
    }

    const gte = firstSymbol.value > secondSymbol.value;
    tempSymbol.value = gte;
  }
}

export default Memory;
