class IRInterpreter {
  constructor(quadruples) {
    this.quadruples = quadruples;
    this.variables = {};
    this.currentQuad = 0;
  }

  run() {
    while (this.currentQuad < this.quadruples.length) {
      const quad = this.quadruples[this.currentQuad];
      this.executeQuadruple(quad);
    }
  }

  executeQuadruple(quad) {
    const [op, arg1, arg2, result] = quad;

    switch (op) {
      case "GOTO":
        this.currentQuad = arg2 - 1;
        break;
      case "GOTOF":
        if (!this.resolve(arg1)) {
          this.currentQuad = arg2 - 1;
        }
        break;
      case "=":
        this.variables[result] = this.resolve(arg1);
        break;
      case "+":
        this.variables[result] = this.resolve(arg1) + this.resolve(arg2);
        break;
      case "<":
        this.variables[result] = this.resolve(arg1) < this.resolve(arg2);
        break;
      case "PRINT":
        console.log(this.resolve(arg1));
        break;
      // Add cases for other operations if needed
      default:
        break;
    }

    this.currentQuad++;
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

// Example usage
const quadruples = [
  ["GOTO", null, 1],
  ["=", "n", "10"],
  ["=", "first", "0"],
  ["=", "second", "1"],
  ["=", "count", "0"],
  ["PRINT", '"Fibonacci sequence: "'],
  ["+", "first", "second", "t4"],
  ["=", "next", "t4"],
  ["<", "count", "2", "t6"],
  ["GOTOF", "t6", 13],
  ["PRINT", "count"],
  ["PRINT", '" "'],
  ["GOTO", null, 17],
  ["PRINT", "next"],
  ["PRINT", '" "'],
  ["=", "first", "second"],
  ["=", "second", "next"],
  ["+", "count", "1", "t9"],
  ["=", "count", "t9"],
  ["+", "n", "1", "t11"],
  ["<", "count", "t11", "t12"],
  ["GOTOV", "t12", 6],
];

// [ 'GOTO', null, 1 ]
// [ '=', 'n', '10' ]
// [ '=', 'first', '0' ]
// [ '=', 'second', '1' ]
// [ '=', 'count', '0' ]
// [ 'PRINT', '"Fibonacci sequence: "' ]
// [ '+', 'first', 'second', 't0' ]
// [ '=', 'next', 't0' ]
// [ '<', 'count', '2', 't1' ]
// [ 'GOTOF', 't1', 13 ]
// [ 'PRINT', 'count' ]
// [ 'PRINT', '" "' ]
// [ 'GOTO', null, 17 ]
// [ 'PRINT', 'next' ]
// [ 'PRINT', '" "' ]
// [ '=', 'first', 'second' ]
// [ '=', 'second', 'next' ]
// [ '+', 'count', '1', 't2' ]
// [ '=', 'count', 't2' ]
// [ '+', 'n', '1', 't3' ]
// [ '<', 'count', 't3', 't4' ]
// [ 'GOTOV', 't4', 6 ]
// [ 'ENDPROG' ]

const interpreter = new IRInterpreter(quadruples);
interpreter.run();
