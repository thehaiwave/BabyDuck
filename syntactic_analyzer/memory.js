class Memory {
  constructor() {
    this.intMemory = {};
    this.floatMemory = {};
    this.temporalMemory = {};
    this.funcMemory = {};
    this.intCounter = 0;
    this.intUpper = 999;
    this.floatCounter = 100;
    this.floatUpper = 1999;
    this.temporalCounter = 2000;
    this.temporalUpper = 2999;
    this.funcCounter = 3000;
    this.funcUpper = 3999;
  }

  allocateVariable(type, value) {
    if (type == "int") {
      this.intMemory.push(value);
      this.intCounter++;
    } else if (type == "float") {
      this.floatMemory.push(value);
      this.floatCounter++;
    } else if (type == "temporal") {
      this.temporalMemory.push(value);
      this.temporalCounter++;
    }
  }

  allocateFunction(type, value) {
    if (type == "func") {
      this.funcMemory.push(value);
      this.funcCounter++;
    }
  }

  getMemoryAddress(type) {
    if (type == "int") {
      return this.intCounter;
    } else if (type == "float") {
      return this.floatCounter;
    } else if (type == "temporal") {
      return this.temporalCounter;
    }
  }
}
