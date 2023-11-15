export const semanticCube = {
  int: {
    int: {
      "+": "int",
      "-": "int",
      "*": "int",
      "/": "int",
      "=": "int",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
    float: {
      "+": "float",
      "-": "float",
      "*": "float",
      "/": "float",
      "=": "error",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
    bool: {
      "+": "int",
      "-": "int",
      "*": "int",
      "/": "float",
      "=": "error",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
  },
  float: {
    int: {
      "+": "float",
      "-": "float",
      "*": "float",
      "/": "float",
      "=": "error",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
    float: {
      "+": "float",
      "-": "float",
      "*": "float",
      "/": "float",
      "=": "float",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
    bool: {
      "+": "float",
      "-": "float",
      "*": "float",
      "/": "float",
      "=": "error",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
  },
  bool: {
    int: {
      "+": "int",
      "-": "int",
      "*": "int",
      "/": "float",
      "=": "error",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
    float: {
      "+": "float",
      "-": "float",
      "*": "float",
      "/": "float",
      "=": "error",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
    },
    bool: {
      "+": "int",
      "-": "int",
      "*": "int",
      "/": "float",
      "=": "bool",
      "!=": "bool",
      ">": "bool",
      "<": "bool",
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
    const matchedStr = matchedString.slice(start, end + 1);

    const typedString = matchedStr.map((token) => {
      return { name: token.text, type: TokenTypeNames[token.type] };
    });

    return typedString;
  }
}

export default SemanticChecker;
