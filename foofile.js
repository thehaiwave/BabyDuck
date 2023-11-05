import Queue from "./data_structures/queue.js";
import Stack from "./data_structures/stack.js";

const quadruplesQ = new Queue();
const operatorStack = new Stack();
const operandStack = new Stack();
const typeStack = new Stack();
const jumpStack = new Stack();

const exp = [
  "innerQux",
  "=",
  "(",
  "argLol",
  "+",
  "argBar",
  ")",
  "-",
  "funcCorge",
  "/",
  "192.291",
];

const operator = ["=", "+", "-", "/"];

const parent = ["(", ")"];

operandStack.push(exp[0]);
const charPointer = 0;

while (!operandStack.isEmpty()) {
  charPointer = charPointer + 1;

  const charAt = exp[charPointer];

  if (charAt in operator) {
    ope;
  }
}

// operand
// innerQux t3

// operator
// =

//quads
// t1 = + argLol argBar
// t2 = / funcCorge 192.291
// t3 = - t1 t2
// t4 = = innerQux t3
//
//
//
//
//
