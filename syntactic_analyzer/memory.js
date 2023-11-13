import { semanticCube } from "./semanticChecker.js";

class Memory {
  constructor() {
    this.intMemory = {};
    this.floatMemory = {};
    this.temporalIntMemory = {};
    this.temporalFloatMemory = {};
    this.temporalBoolMemory = {};
    this.funcMemory = {};
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
    } else if (this.intMemory[symbol.name]) {
      return this.intMemory[symbol.name].type;
    } else if (this.floatMemory[symbol.name]) {
      return this.floatMemory[symbol.name].type;
    } else if (this.temporalIntMemory[symbol.name]) {
      return this.temporalIntMemory[symbol.name].type;
    } else if (this.temporalFloatMemory[symbol.name]) {
      return this.temporalFloatMemory[symbol.name].type;
    } else if (this.temporalBoolMemory[symbol.name]) {
      return this.temporalBoolMemory[symbol.name].type;
    } else {
      return null;
    }
  }

  addTempVariableToRegister(obj) {
    const { type } = obj;

    switch (type) {
      case "int":
        this.temporalIntMemory[obj.name] = obj;
        break;
      case "float":
        this.temporalFloatMemory[obj.name] = obj;
        break;
      case "bool":
        this.temporalBoolMemory[obj.name] = obj;
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
        this.intMemory[obj.name] = obj;
        break;
      case "float":
        this.floatMemory[obj.name] = obj;
        break;
    }
  }

  validateSymbol(name) {
    if (this.intMemory[name] || this.floatMemory[name]) {
      if (
        this.intMemory[name]?.context === this.currentContext ||
        this.floatMemory[name]?.context === this.currentContext
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
    console.log("Int memory: ", this.intMemory);
    console.log("Float memory: ", this.floatMemory);
    console.log("Temporal int memory: ", this.temporalIntMemory);
    console.log("Temporal float memory: ", this.temporalFloatMemory);
    console.log("Temporal bool memory: ", this.temporalBoolMemory);
  }
}

export default Memory;
