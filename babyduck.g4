grammar babyduck;

Program         : 'program';
Main            : 'main';
End             : 'end';
Var             : 'var';
Void            : 'void';
Print           : 'print';
While           : 'while';
Do              : 'do';
If              : 'if';
Else            : 'else';
Int             : 'int';
Float           : 'float';
Identifier      : [a-zA-Z][a-zA-Z0-9]*;

Plus            : '+';
Minus           : '-';
Star            : '*';
Div             : '/';
Assign          : '=';
NotEqual        : '!=';
Greater         : '>';
Less            : '<';

LeftParen       : '(';
RightParen      : ')';
LeftBracket     : '[';
RightBracket    : ']';
LeftBrace       : '{';
RightBrace      : '}';
Comma           : ',';
Colon           : ':';
Semi            : ';';

CteString: '"' (~["] | '\\"')* '"';
CteInt: [0-9]+;
CteFloat: [0-9]+ '.' [0-9]+;

programa: Program Identifier Semi vars? funcs* Main body End;

vars: Var (commaSeparatedId Colon type Semi)+;

commaSeparatedId: 
    Identifier 
    | (Identifier Comma)+ Identifier;


funcs: Void Identifier LeftParen idTypeSequence? RightParen LeftBracket vars? body RightBracket Semi;

idTypeSequence: 
    Identifier Colon type
    | (Identifier Colon type Comma)+ Identifier Colon type;

body: LeftBrace statement* RightBrace;

type: 
    Int
    | Float;

statement: 
    assign
    | condition
    | cycle
    | f_call
    | print;

assign: Identifier Assign expression Semi;

condition: If LeftParen expression RightParen body (Else body)? Semi;

cycle: While body Do LeftParen expression RightParen Semi;

f_call: Identifier LeftParen commaSeparatedExpression? RightParen Semi;

commaSeparatedExpression: 
    expression
    | expression Comma commaSeparatedExpression ;

print: Print LeftParen printSequence RightParen Semi;

printSequence: (expression | CteString) (Comma printSequence)?;

expression: exp ((Greater | Less | NotEqual) exp)?;

exp: 
    termino 
    | termino (Plus | Minus) exp;

termino: 
    factor
    | factor (Star | Div) termino;

factor: 
    LeftParen expression RightParen
    | factorSequence;

factorSequence: (Plus | Minus)? (Identifier | cte);

cte: 
    CteInt
    | CteFloat;

Whitespace: [ \t]+ -> skip;
Newline: ('\r' '\n'? | '\n') -> skip;