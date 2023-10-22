grammar babyduck;

///////////////////////////// WHITESPACE /////////////////////////////
WhiteSpace : [ \t\r\n]+ -> skip;

///////////////////////////// TOKENS /////////////////////////////
INTEGER: [0-9]+;

FLOAT_NUM: [0-9]+ '.' [0-9]+;

ID: [a-zA-Z] ([a-zA-Z] | [0-9])*;

STRING: '"' .*? '"';

///////////////////////////// OPERATORS /////////////////////////////
PLUS: '+';

MINUS: '-';

MULTIPLY: '*';

DIVIDE: '/';

EQUALS: '=';

NOTEQUALS: '!=';

GREATERTHAN: '>';

LESSTHAN: '<';

///////////////////////////// GRAMMAR /////////////////////////////
program: 'program' ID ';' (vars)? (funcs)* 'main' body 'end';

vars: 'var' (ID (',' ID)* ':' type ';')+;

type: 'int' | 'float';

funcs: 'void' ID '(' (ID ':' type (',' ID ':' type)*)? ')' '[' (vars)? body ']' ';';

body: '{' (statement)* '}';

statement: assign | condition | cycle | f_call | print;

assign: ID EQUALS expression ';';

expression: exp ((GREATERTHAN | LESSTHAN | NOTEQUALS) exp)?;

condition: 'if' '(' expression ')' body ('else' body)? ';';

exp: termino ((PLUS | MINUS) termino)*;

termino: factor ((MULTIPLY | DIVIDE) factor)?;

factor: ('(' expression ')') | ((MINUS | PLUS)? (ID | cte));

cte: INTEGER | FLOAT_NUM;

cycle: 'while' body 'do' '(' expression ')' ';';

f_call: ID '(' (expression (',' expression)* )? ')' ';';

print: 'print' '(' (expression | STRING) (',' (expression|STRING))* ')' ';';