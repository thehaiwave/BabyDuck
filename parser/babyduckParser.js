// Generated from babyduck.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import babyduckListener from './babyduckListener.js';
const serializedATN = [4,1,35,207,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,3,0,47,8,0,1,0,5,0,50,8,0,10,0,12,0,53,9,0,1,0,1,
0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,1,65,8,1,11,1,12,1,66,1,2,1,2,1,2,1,
2,3,2,73,8,2,1,3,1,3,1,3,1,3,3,3,79,8,3,1,3,1,3,1,3,3,3,84,8,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,99,8,4,1,5,1,5,5,5,103,8,5,
10,5,12,5,106,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,117,8,7,1,8,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,131,8,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,146,8,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,3,12,156,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,
1,14,3,14,166,8,14,1,14,1,14,3,14,170,8,14,1,15,1,15,1,15,3,15,175,8,15,
1,16,1,16,1,16,1,16,1,16,3,16,182,8,16,1,17,1,17,1,17,1,17,1,17,3,17,189,
8,17,1,18,1,18,1,18,1,18,1,18,3,18,196,8,18,1,19,3,19,199,8,19,1,19,1,19,
3,19,203,8,19,1,20,1,20,1,20,0,0,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,0,5,1,0,11,12,1,0,19,21,1,0,14,15,1,0,16,17,1,0,32,
33,208,0,42,1,0,0,0,2,58,1,0,0,0,4,72,1,0,0,0,6,74,1,0,0,0,8,98,1,0,0,0,
10,100,1,0,0,0,12,109,1,0,0,0,14,116,1,0,0,0,16,118,1,0,0,0,18,123,1,0,0,
0,20,134,1,0,0,0,22,142,1,0,0,0,24,155,1,0,0,0,26,157,1,0,0,0,28,165,1,0,
0,0,30,171,1,0,0,0,32,181,1,0,0,0,34,188,1,0,0,0,36,195,1,0,0,0,38,198,1,
0,0,0,40,204,1,0,0,0,42,43,5,1,0,0,43,44,5,13,0,0,44,46,5,30,0,0,45,47,3,
2,1,0,46,45,1,0,0,0,46,47,1,0,0,0,47,51,1,0,0,0,48,50,3,6,3,0,49,48,1,0,
0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,
0,54,55,5,2,0,0,55,56,3,10,5,0,56,57,5,3,0,0,57,1,1,0,0,0,58,64,5,4,0,0,
59,60,3,4,2,0,60,61,5,29,0,0,61,62,3,12,6,0,62,63,5,30,0,0,63,65,1,0,0,0,
64,59,1,0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,3,1,0,0,0,68,
73,5,13,0,0,69,70,5,13,0,0,70,71,5,28,0,0,71,73,3,4,2,0,72,68,1,0,0,0,72,
69,1,0,0,0,73,5,1,0,0,0,74,75,5,5,0,0,75,76,5,13,0,0,76,78,5,22,0,0,77,79,
3,8,4,0,78,77,1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,5,23,0,0,81,83,5,
24,0,0,82,84,3,2,1,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,86,3,10,
5,0,86,87,5,25,0,0,87,88,5,30,0,0,88,7,1,0,0,0,89,90,5,13,0,0,90,91,5,29,
0,0,91,99,3,12,6,0,92,93,5,13,0,0,93,94,5,29,0,0,94,95,3,12,6,0,95,96,5,
28,0,0,96,97,3,8,4,0,97,99,1,0,0,0,98,89,1,0,0,0,98,92,1,0,0,0,99,9,1,0,
0,0,100,104,5,26,0,0,101,103,3,14,7,0,102,101,1,0,0,0,103,106,1,0,0,0,104,
102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,107,108,5,27,
0,0,108,11,1,0,0,0,109,110,7,0,0,0,110,13,1,0,0,0,111,117,3,16,8,0,112,117,
3,18,9,0,113,117,3,20,10,0,114,117,3,22,11,0,115,117,3,26,13,0,116,111,1,
0,0,0,116,112,1,0,0,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,1,0,0,0,117,
15,1,0,0,0,118,119,5,13,0,0,119,120,5,18,0,0,120,121,3,30,15,0,121,122,5,
30,0,0,122,17,1,0,0,0,123,124,5,9,0,0,124,125,5,22,0,0,125,126,3,30,15,0,
126,127,5,23,0,0,127,130,3,10,5,0,128,129,5,10,0,0,129,131,3,10,5,0,130,
128,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,30,0,0,133,19,1,0,
0,0,134,135,5,7,0,0,135,136,3,10,5,0,136,137,5,8,0,0,137,138,5,22,0,0,138,
139,3,30,15,0,139,140,5,23,0,0,140,141,5,30,0,0,141,21,1,0,0,0,142,143,5,
13,0,0,143,145,5,22,0,0,144,146,3,24,12,0,145,144,1,0,0,0,145,146,1,0,0,
0,146,147,1,0,0,0,147,148,5,23,0,0,148,149,5,30,0,0,149,23,1,0,0,0,150,156,
3,30,15,0,151,152,3,30,15,0,152,153,5,28,0,0,153,154,3,24,12,0,154,156,1,
0,0,0,155,150,1,0,0,0,155,151,1,0,0,0,156,25,1,0,0,0,157,158,5,6,0,0,158,
159,5,22,0,0,159,160,3,28,14,0,160,161,5,23,0,0,161,162,5,30,0,0,162,27,
1,0,0,0,163,166,3,30,15,0,164,166,5,31,0,0,165,163,1,0,0,0,165,164,1,0,0,
0,166,169,1,0,0,0,167,168,5,28,0,0,168,170,3,28,14,0,169,167,1,0,0,0,169,
170,1,0,0,0,170,29,1,0,0,0,171,174,3,32,16,0,172,173,7,1,0,0,173,175,3,32,
16,0,174,172,1,0,0,0,174,175,1,0,0,0,175,31,1,0,0,0,176,182,3,34,17,0,177,
178,3,34,17,0,178,179,7,2,0,0,179,180,3,32,16,0,180,182,1,0,0,0,181,176,
1,0,0,0,181,177,1,0,0,0,182,33,1,0,0,0,183,189,3,36,18,0,184,185,3,36,18,
0,185,186,7,3,0,0,186,187,3,34,17,0,187,189,1,0,0,0,188,183,1,0,0,0,188,
184,1,0,0,0,189,35,1,0,0,0,190,191,5,22,0,0,191,192,3,30,15,0,192,193,5,
23,0,0,193,196,1,0,0,0,194,196,3,38,19,0,195,190,1,0,0,0,195,194,1,0,0,0,
196,37,1,0,0,0,197,199,7,2,0,0,198,197,1,0,0,0,198,199,1,0,0,0,199,202,1,
0,0,0,200,203,5,13,0,0,201,203,3,40,20,0,202,200,1,0,0,0,202,201,1,0,0,0,
203,39,1,0,0,0,204,205,7,4,0,0,205,41,1,0,0,0,20,46,51,66,72,78,83,98,104,
116,130,145,155,165,169,174,181,188,195,198,202];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class babyduckParser extends antlr4.Parser {

    static grammarFileName = "babyduck.g4";
    static literalNames = [ null, "'program'", "'main'", "'end'", "'var'", 
                            "'void'", "'print'", "'while'", "'do'", "'if'", 
                            "'else'", "'int'", "'float'", null, "'+'", "'-'", 
                            "'*'", "'/'", "'='", "'!='", "'>'", "'<'", "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "','", "':'", 
                            "';'" ];
    static symbolicNames = [ null, "Program", "Main", "End", "Var", "Void", 
                             "Print", "While", "Do", "If", "Else", "Int", 
                             "Float", "Identifier", "Plus", "Minus", "Star", 
                             "Div", "Assign", "NotEqual", "Greater", "Less", 
                             "LeftParen", "RightParen", "LeftBracket", "RightBracket", 
                             "LeftBrace", "RightBrace", "Comma", "Colon", 
                             "Semi", "CteString", "CteInt", "CteFloat", 
                             "Whitespace", "Newline" ];
    static ruleNames = [ "programa", "vars", "commaSeparatedId", "funcs", 
                         "idTypeSequence", "body", "type", "statement", 
                         "assign", "condition", "cycle", "f_call", "commaSeparatedExpression", 
                         "print", "printSequence", "expression", "exp", 
                         "termino", "factor", "factorSequence", "cte" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = babyduckParser.ruleNames;
        this.literalNames = babyduckParser.literalNames;
        this.symbolicNames = babyduckParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, babyduckParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(babyduckParser.Program);
	        this.state = 43;
	        this.match(babyduckParser.Identifier);
	        this.state = 44;
	        this.match(babyduckParser.Semi);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 45;
	            this.vars();
	        }

	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 48;
	            this.funcs();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(babyduckParser.Main);
	        this.state = 55;
	        this.body();
	        this.state = 56;
	        this.match(babyduckParser.End);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vars() {
	    let localctx = new VarsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, babyduckParser.RULE_vars);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(babyduckParser.Var);
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 59;
	            this.commaSeparatedId();
	            this.state = 60;
	            this.match(babyduckParser.Colon);
	            this.state = 61;
	            this.type();
	            this.state = 62;
	            this.match(babyduckParser.Semi);
	            this.state = 66; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commaSeparatedId() {
	    let localctx = new CommaSeparatedIdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, babyduckParser.RULE_commaSeparatedId);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(babyduckParser.Identifier);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(babyduckParser.Identifier);
	            this.state = 70;
	            this.match(babyduckParser.Comma);
	            this.state = 71;
	            this.commaSeparatedId();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcs() {
	    let localctx = new FuncsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, babyduckParser.RULE_funcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(babyduckParser.Void);
	        this.state = 75;
	        this.match(babyduckParser.Identifier);
	        this.state = 76;
	        this.match(babyduckParser.LeftParen);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 77;
	            this.idTypeSequence();
	        }

	        this.state = 80;
	        this.match(babyduckParser.RightParen);
	        this.state = 81;
	        this.match(babyduckParser.LeftBracket);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 82;
	            this.vars();
	        }

	        this.state = 85;
	        this.body();
	        this.state = 86;
	        this.match(babyduckParser.RightBracket);
	        this.state = 87;
	        this.match(babyduckParser.Semi);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idTypeSequence() {
	    let localctx = new IdTypeSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, babyduckParser.RULE_idTypeSequence);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.match(babyduckParser.Identifier);
	            this.state = 90;
	            this.match(babyduckParser.Colon);
	            this.state = 91;
	            this.type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.match(babyduckParser.Identifier);
	            this.state = 93;
	            this.match(babyduckParser.Colon);
	            this.state = 94;
	            this.type();
	            this.state = 95;
	            this.match(babyduckParser.Comma);
	            this.state = 96;
	            this.idTypeSequence();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, babyduckParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(babyduckParser.LeftBrace);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8896) !== 0)) {
	            this.state = 101;
	            this.statement();
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 107;
	        this.match(babyduckParser.RightBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, babyduckParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, babyduckParser.RULE_statement);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.condition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.cycle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.f_call();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 115;
	            this.print();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, babyduckParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(babyduckParser.Identifier);
	        this.state = 119;
	        this.match(babyduckParser.Assign);
	        this.state = 120;
	        this.expression();
	        this.state = 121;
	        this.match(babyduckParser.Semi);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, babyduckParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(babyduckParser.If);
	        this.state = 124;
	        this.match(babyduckParser.LeftParen);
	        this.state = 125;
	        this.expression();
	        this.state = 126;
	        this.match(babyduckParser.RightParen);
	        this.state = 127;
	        this.body();
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 128;
	            this.match(babyduckParser.Else);
	            this.state = 129;
	            this.body();
	        }

	        this.state = 132;
	        this.match(babyduckParser.Semi);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cycle() {
	    let localctx = new CycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, babyduckParser.RULE_cycle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(babyduckParser.While);
	        this.state = 135;
	        this.body();
	        this.state = 136;
	        this.match(babyduckParser.Do);
	        this.state = 137;
	        this.match(babyduckParser.LeftParen);
	        this.state = 138;
	        this.expression();
	        this.state = 139;
	        this.match(babyduckParser.RightParen);
	        this.state = 140;
	        this.match(babyduckParser.Semi);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	f_call() {
	    let localctx = new F_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, babyduckParser.RULE_f_call);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(babyduckParser.Identifier);
	        this.state = 143;
	        this.match(babyduckParser.LeftParen);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 1573383) !== 0)) {
	            this.state = 144;
	            this.commaSeparatedExpression();
	        }

	        this.state = 147;
	        this.match(babyduckParser.RightParen);
	        this.state = 148;
	        this.match(babyduckParser.Semi);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commaSeparatedExpression() {
	    let localctx = new CommaSeparatedExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, babyduckParser.RULE_commaSeparatedExpression);
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 150;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 151;
	            this.expression();
	            this.state = 152;
	            this.match(babyduckParser.Comma);
	            this.state = 153;
	            this.commaSeparatedExpression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, babyduckParser.RULE_print);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(babyduckParser.Print);
	        this.state = 158;
	        this.match(babyduckParser.LeftParen);
	        this.state = 159;
	        this.printSequence();
	        this.state = 160;
	        this.match(babyduckParser.RightParen);
	        this.state = 161;
	        this.match(babyduckParser.Semi);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printSequence() {
	    let localctx = new PrintSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, babyduckParser.RULE_printSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 14:
	        case 15:
	        case 22:
	        case 32:
	        case 33:
	            this.state = 163;
	            this.expression();
	            break;
	        case 31:
	            this.state = 164;
	            this.match(babyduckParser.CteString);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 167;
	            this.match(babyduckParser.Comma);
	            this.state = 168;
	            this.printSequence();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, babyduckParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.exp();
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0)) {
	            this.state = 172;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 173;
	            this.exp();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, babyduckParser.RULE_exp);
	    var _la = 0;
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.termino();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.termino();
	            this.state = 178;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 179;
	            this.exp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, babyduckParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.factor();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.factor();
	            this.state = 185;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 186;
	            this.termino();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, babyduckParser.RULE_factor);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.match(babyduckParser.LeftParen);
	            this.state = 191;
	            this.expression();
	            this.state = 192;
	            this.match(babyduckParser.RightParen);
	            break;
	        case 13:
	        case 14:
	        case 15:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.factorSequence();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factorSequence() {
	    let localctx = new FactorSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, babyduckParser.RULE_factorSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===15) {
	            this.state = 197;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 202;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.state = 200;
	            this.match(babyduckParser.Identifier);
	            break;
	        case 32:
	        case 33:
	            this.state = 201;
	            this.cte();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cte() {
	    let localctx = new CteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, babyduckParser.RULE_cte);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

babyduckParser.EOF = antlr4.Token.EOF;
babyduckParser.Program = 1;
babyduckParser.Main = 2;
babyduckParser.End = 3;
babyduckParser.Var = 4;
babyduckParser.Void = 5;
babyduckParser.Print = 6;
babyduckParser.While = 7;
babyduckParser.Do = 8;
babyduckParser.If = 9;
babyduckParser.Else = 10;
babyduckParser.Int = 11;
babyduckParser.Float = 12;
babyduckParser.Identifier = 13;
babyduckParser.Plus = 14;
babyduckParser.Minus = 15;
babyduckParser.Star = 16;
babyduckParser.Div = 17;
babyduckParser.Assign = 18;
babyduckParser.NotEqual = 19;
babyduckParser.Greater = 20;
babyduckParser.Less = 21;
babyduckParser.LeftParen = 22;
babyduckParser.RightParen = 23;
babyduckParser.LeftBracket = 24;
babyduckParser.RightBracket = 25;
babyduckParser.LeftBrace = 26;
babyduckParser.RightBrace = 27;
babyduckParser.Comma = 28;
babyduckParser.Colon = 29;
babyduckParser.Semi = 30;
babyduckParser.CteString = 31;
babyduckParser.CteInt = 32;
babyduckParser.CteFloat = 33;
babyduckParser.Whitespace = 34;
babyduckParser.Newline = 35;

babyduckParser.RULE_programa = 0;
babyduckParser.RULE_vars = 1;
babyduckParser.RULE_commaSeparatedId = 2;
babyduckParser.RULE_funcs = 3;
babyduckParser.RULE_idTypeSequence = 4;
babyduckParser.RULE_body = 5;
babyduckParser.RULE_type = 6;
babyduckParser.RULE_statement = 7;
babyduckParser.RULE_assign = 8;
babyduckParser.RULE_condition = 9;
babyduckParser.RULE_cycle = 10;
babyduckParser.RULE_f_call = 11;
babyduckParser.RULE_commaSeparatedExpression = 12;
babyduckParser.RULE_print = 13;
babyduckParser.RULE_printSequence = 14;
babyduckParser.RULE_expression = 15;
babyduckParser.RULE_exp = 16;
babyduckParser.RULE_termino = 17;
babyduckParser.RULE_factor = 18;
babyduckParser.RULE_factorSequence = 19;
babyduckParser.RULE_cte = 20;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_programa;
    }

	Program() {
	    return this.getToken(babyduckParser.Program, 0);
	};

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	Main() {
	    return this.getToken(babyduckParser.Main, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	End() {
	    return this.getToken(babyduckParser.End, 0);
	};

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	funcs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncsContext);
	    } else {
	        return this.getTypedRuleContext(FuncsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class VarsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_vars;
    }

	Var() {
	    return this.getToken(babyduckParser.Var, 0);
	};

	commaSeparatedId = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommaSeparatedIdContext);
	    } else {
	        return this.getTypedRuleContext(CommaSeparatedIdContext,i);
	    }
	};

	Colon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.Colon);
	    } else {
	        return this.getToken(babyduckParser.Colon, i);
	    }
	};


	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	Semi = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.Semi);
	    } else {
	        return this.getToken(babyduckParser.Semi, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterVars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitVars(this);
		}
	}


}



class CommaSeparatedIdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_commaSeparatedId;
    }

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	Comma() {
	    return this.getToken(babyduckParser.Comma, 0);
	};

	commaSeparatedId() {
	    return this.getTypedRuleContext(CommaSeparatedIdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterCommaSeparatedId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitCommaSeparatedId(this);
		}
	}


}



class FuncsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_funcs;
    }

	Void() {
	    return this.getToken(babyduckParser.Void, 0);
	};

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	LeftParen() {
	    return this.getToken(babyduckParser.LeftParen, 0);
	};

	RightParen() {
	    return this.getToken(babyduckParser.RightParen, 0);
	};

	LeftBracket() {
	    return this.getToken(babyduckParser.LeftBracket, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	RightBracket() {
	    return this.getToken(babyduckParser.RightBracket, 0);
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	idTypeSequence() {
	    return this.getTypedRuleContext(IdTypeSequenceContext,0);
	};

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterFuncs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitFuncs(this);
		}
	}


}



class IdTypeSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_idTypeSequence;
    }

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	Colon() {
	    return this.getToken(babyduckParser.Colon, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Comma() {
	    return this.getToken(babyduckParser.Comma, 0);
	};

	idTypeSequence() {
	    return this.getTypedRuleContext(IdTypeSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterIdTypeSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitIdTypeSequence(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_body;
    }

	LeftBrace() {
	    return this.getToken(babyduckParser.LeftBrace, 0);
	};

	RightBrace() {
	    return this.getToken(babyduckParser.RightBrace, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitBody(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_type;
    }

	Int() {
	    return this.getToken(babyduckParser.Int, 0);
	};

	Float() {
	    return this.getToken(babyduckParser.Float, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitType(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_statement;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	cycle() {
	    return this.getTypedRuleContext(CycleContext,0);
	};

	f_call() {
	    return this.getTypedRuleContext(F_callContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_assign;
    }

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(babyduckParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitAssign(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_condition;
    }

	If() {
	    return this.getToken(babyduckParser.If, 0);
	};

	LeftParen() {
	    return this.getToken(babyduckParser.LeftParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(babyduckParser.RightParen, 0);
	};

	body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyContext);
	    } else {
	        return this.getTypedRuleContext(BodyContext,i);
	    }
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	Else() {
	    return this.getToken(babyduckParser.Else, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitCondition(this);
		}
	}


}



class CycleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_cycle;
    }

	While() {
	    return this.getToken(babyduckParser.While, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	Do() {
	    return this.getToken(babyduckParser.Do, 0);
	};

	LeftParen() {
	    return this.getToken(babyduckParser.LeftParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(babyduckParser.RightParen, 0);
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterCycle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitCycle(this);
		}
	}


}



class F_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_f_call;
    }

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	LeftParen() {
	    return this.getToken(babyduckParser.LeftParen, 0);
	};

	RightParen() {
	    return this.getToken(babyduckParser.RightParen, 0);
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	commaSeparatedExpression() {
	    return this.getTypedRuleContext(CommaSeparatedExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterF_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitF_call(this);
		}
	}


}



class CommaSeparatedExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_commaSeparatedExpression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	Comma() {
	    return this.getToken(babyduckParser.Comma, 0);
	};

	commaSeparatedExpression() {
	    return this.getTypedRuleContext(CommaSeparatedExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterCommaSeparatedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitCommaSeparatedExpression(this);
		}
	}


}



class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_print;
    }

	Print() {
	    return this.getToken(babyduckParser.Print, 0);
	};

	LeftParen() {
	    return this.getToken(babyduckParser.LeftParen, 0);
	};

	printSequence() {
	    return this.getTypedRuleContext(PrintSequenceContext,0);
	};

	RightParen() {
	    return this.getToken(babyduckParser.RightParen, 0);
	};

	Semi() {
	    return this.getToken(babyduckParser.Semi, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterPrint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitPrint(this);
		}
	}


}



class PrintSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_printSequence;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CteString() {
	    return this.getToken(babyduckParser.CteString, 0);
	};

	Comma() {
	    return this.getToken(babyduckParser.Comma, 0);
	};

	printSequence() {
	    return this.getTypedRuleContext(PrintSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterPrintSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitPrintSequence(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_expression;
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	Greater() {
	    return this.getToken(babyduckParser.Greater, 0);
	};

	Less() {
	    return this.getToken(babyduckParser.Less, 0);
	};

	NotEqual() {
	    return this.getToken(babyduckParser.NotEqual, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_exp;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	Plus() {
	    return this.getToken(babyduckParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(babyduckParser.Minus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitExp(this);
		}
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	Star() {
	    return this.getToken(babyduckParser.Star, 0);
	};

	Div() {
	    return this.getToken(babyduckParser.Div, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitTermino(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_factor;
    }

	LeftParen() {
	    return this.getToken(babyduckParser.LeftParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RightParen() {
	    return this.getToken(babyduckParser.RightParen, 0);
	};

	factorSequence() {
	    return this.getTypedRuleContext(FactorSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitFactor(this);
		}
	}


}



class FactorSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_factorSequence;
    }

	Identifier() {
	    return this.getToken(babyduckParser.Identifier, 0);
	};

	cte() {
	    return this.getTypedRuleContext(CteContext,0);
	};

	Plus() {
	    return this.getToken(babyduckParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(babyduckParser.Minus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterFactorSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitFactorSequence(this);
		}
	}


}



class CteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_cte;
    }

	CteInt() {
	    return this.getToken(babyduckParser.CteInt, 0);
	};

	CteFloat() {
	    return this.getToken(babyduckParser.CteFloat, 0);
	};

	enterRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.enterCte(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitCte(this);
		}
	}


}




babyduckParser.ProgramaContext = ProgramaContext; 
babyduckParser.VarsContext = VarsContext; 
babyduckParser.CommaSeparatedIdContext = CommaSeparatedIdContext; 
babyduckParser.FuncsContext = FuncsContext; 
babyduckParser.IdTypeSequenceContext = IdTypeSequenceContext; 
babyduckParser.BodyContext = BodyContext; 
babyduckParser.TypeContext = TypeContext; 
babyduckParser.StatementContext = StatementContext; 
babyduckParser.AssignContext = AssignContext; 
babyduckParser.ConditionContext = ConditionContext; 
babyduckParser.CycleContext = CycleContext; 
babyduckParser.F_callContext = F_callContext; 
babyduckParser.CommaSeparatedExpressionContext = CommaSeparatedExpressionContext; 
babyduckParser.PrintContext = PrintContext; 
babyduckParser.PrintSequenceContext = PrintSequenceContext; 
babyduckParser.ExpressionContext = ExpressionContext; 
babyduckParser.ExpContext = ExpContext; 
babyduckParser.TerminoContext = TerminoContext; 
babyduckParser.FactorContext = FactorContext; 
babyduckParser.FactorSequenceContext = FactorSequenceContext; 
babyduckParser.CteContext = CteContext; 
