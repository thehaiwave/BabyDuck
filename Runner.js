class Ayuda {
  constructor(quadruples, memory) {
    this.quadruples = quadruples;
    this.memory = memory;
    this.currentQuad = 0;
  }

  run() {
    while (this.currentQuad < this.quadruples.length) {
      const quad = this.quadruples[this.currentQuad];
      if (this.currentQuad === null) {
        break;
      }
      this.executeQuadruple(quad);
    }
  }

  executeQuadruple(quad) {
    const op = quad[0];

    switch (op) {
      case "GOTO":
        this.currentQuad = quad[2];
        break;
      case "=":
        this.memory.assignMemory(quad[1], quad[2]);
        this.currentQuad++;
        break;
      case "PRINT":
        this.memory.print(quad[1]);
        this.currentQuad++;
        break;
      case "+":
        this.memory.addSum(quad[1], quad[2], quad[3]);
        this.currentQuad++;
        break;

      case "-":
        this.memory.sub(quad[1], quad[2], quad[3]);
        this.currentQuad++;
        break;

      case "<":
        this.memory.comparison(quad[1], quad[2], quad[3]);
        this.currentQuad++;
        break;

      case ">":
        this.memory.gte(quad[1], quad[2], quad[3]);
        this.currentQuad++;
        break;
      case "*":
        this.memory.mul(quad[1], quad[2], quad[3]);
        this.currentQuad++;
        break;

      case "GOTOF":
        let ret = this.memory.gotocond(quad[1]);

        if (ret === false) {
          this.currentQuad = quad[2];
        } else {
          this.currentQuad++;
        }

        break;

      case "GOTOV":
        let ret2 = this.memory.gotocond(quad[1]);

        if (ret2 === true) {
          this.currentQuad = quad[2];
        } else {
          this.currentQuad++;
        }

        break;
      case "GOTO":
        this.currentQuad = quad[2];
        break;
      case "ENDPROG":
        this.currentQuad = null;
        break;
    }
  }

  resolve(arg) {
    if (typeof arg === "number" || !isNaN(arg)) {
      return Number(arg);
    } else if (this.variables[arg] !== undefined) {
      return this.variables[arg];
    } else {
      throw new Error(`Undefined variable: ${arg}`);
    }
  }
}

export default Ayuda;
