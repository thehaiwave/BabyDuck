const Type = {
  INT: "int",
  FLOAT: "float",
  BOOL: "bool",
  ERROR: "error",
};

export const Operation = {
  ADD: "+",
  SUB: "-",
  MUL: "*",
  DIV: "/",
  ASSIGN: "=",
  NOT_EQUAL: "!=",
  GREATER: ">",
  LESS: "<",
};

function getPrecedence(op) {
  switch (op) {
    case Operation.ADD:
    case Operation.SUB:
      return 1;
    case Operation.MUL:
    case Operation.DIV:
      return 2;
    default:
      return 0;
  }
}

export const semanticCube = {
  [Type.INT]: {
    [Type.INT]: {
      [Operation.ADD]: Type.INT,
      [Operation.SUB]: Type.INT,
      [Operation.MUL]: Type.INT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.INT,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
    [Type.FLOAT]: {
      [Operation.ADD]: Type.FLOAT,
      [Operation.SUB]: Type.FLOAT,
      [Operation.MUL]: Type.FLOAT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.ERROR,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
    [Type.BOOL]: {
      [Operation.ADD]: Type.INT,
      [Operation.SUB]: Type.INT,
      [Operation.MUL]: Type.INT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.ERROR,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
  },
  [Type.FLOAT]: {
    [Type.INT]: {
      [Operation.ADD]: Type.FLOAT,
      [Operation.SUB]: Type.FLOAT,
      [Operation.MUL]: Type.FLOAT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.ERROR,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
    [Type.FLOAT]: {
      [Operation.ADD]: Type.FLOAT,
      [Operation.SUB]: Type.FLOAT,
      [Operation.MUL]: Type.FLOAT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.FLOAT,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
    [Type.BOOL]: {
      [Operation.ADD]: Type.FLOAT,
      [Operation.SUB]: Type.FLOAT,
      [Operation.MUL]: Type.FLOAT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.ERROR,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
  },
  [Type.BOOL]: {
    [Type.INT]: {
      [Operation.ADD]: Type.INT,
      [Operation.SUB]: Type.INT,
      [Operation.MUL]: Type.INT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.ERROR,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
    [Type.FLOAT]: {
      [Operation.ADD]: Type.FLOAT,
      [Operation.SUB]: Type.FLOAT,
      [Operation.MUL]: Type.FLOAT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.ERROR,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
    [Type.BOOL]: {
      [Operation.ADD]: Type.INT,
      [Operation.SUB]: Type.INT,
      [Operation.MUL]: Type.INT,
      [Operation.DIV]: Type.FLOAT,
      [Operation.ASSIGN]: Type.BOOL,
      [Operation.NOT_EQUAL]: Type.BOOL,
      [Operation.GREATER]: Type.BOOL,
      [Operation.LESS]: Type.BOOL,
    },
  },
};

const TokenTypes = {
  Program: 1,
  Main: 2,
  End: 3,
  Var: 4,
  Void: 5,
  Print: 6,
  While: 7,
  Do: 8,
  If: 9,
  Else: 10,
  Int: 11,
  Float: 12,
  Identifier: 13,
  Plus: 14,
  Minus: 15,
  Star: 16,
  Div: 17,
  Assign: 18,
  NotEqual: 19,
  Greater: 20,
  Less: 21,
  LeftParen: 22,
  RightParen: 23,
  LeftBracket: 24,
  RightBracket: 25,
  LeftBrace: 26,
  RightBrace: 27,
  Comma: 28,
  Colon: 29,
  Semi: 30,
  CteString: 31,
  CteInt: 32,
  CteFloat: 33,
  Whitespace: 34,
  Newline: 35,
  program: 1,
  main: 2,
  end: 3,
  var: 4,
  void: 5,
  print: 6,
  while: 7,
  do: 8,
  if: 9,
  else: 10,
  int: 11,
  float: 12,
  "+": 14,
  "-": 15,
  "*": 16,
  "/": 17,
  "=": 18,
  "!=": 19,
  ">": 20,
  "<": 21,
  "(": 22,
  ")": 23,
  "[": 24,
  "]": 25,
  "{": 26,
  "}": 27,
  ",": 28,
  ":": 29,
  ";": 30,
};

const TokenTypeNames = Object.fromEntries(
  Object.entries(TokenTypes).map(([key, value]) => [value, key])
);

class SemanticChecker {
  constructor() {}

  transformAntlrToArray(matchedString, start, end) {
    const matchedStr = matchedString.slice(start, end);

    const typedString = matchedStr.map((token) => {
      return { name: token.text, type: TokenTypeNames[token.type] };
    });

    return typedString;
  }
}

export default SemanticChecker;
