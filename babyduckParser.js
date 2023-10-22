// Generated from babyduck.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import babyduckListener from './babyduckListener.js';
const serializedATN = [4,1,34,201,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,3,0,37,8,0,1,0,5,0,40,8,0,
10,0,12,0,43,9,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,53,8,1,10,1,12,1,56,
9,1,1,1,1,1,1,1,1,1,4,1,62,8,1,11,1,12,1,63,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,5,3,78,8,3,10,3,12,3,81,9,3,3,3,83,8,3,1,3,1,3,1,3,3,
3,88,8,3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,96,8,4,10,4,12,4,99,9,4,1,4,1,4,1,5,
1,5,1,5,1,5,1,5,3,5,108,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,3,7,118,8,7,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,127,8,8,1,8,1,8,1,9,1,9,1,9,5,9,134,8,9,
10,9,12,9,137,9,9,1,10,1,10,1,10,3,10,142,8,10,1,11,1,11,1,11,1,11,1,11,
3,11,149,8,11,1,11,1,11,3,11,153,8,11,3,11,155,8,11,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,5,14,172,8,14,10,
14,12,14,175,9,14,3,14,177,8,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,
186,8,15,1,15,1,15,1,15,3,15,191,8,15,5,15,193,8,15,10,15,12,15,196,9,15,
1,15,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,
5,1,0,8,9,1,0,32,34,1,0,27,28,1,0,29,30,1,0,23,24,208,0,32,1,0,0,0,2,48,
1,0,0,0,4,65,1,0,0,0,6,67,1,0,0,0,8,93,1,0,0,0,10,107,1,0,0,0,12,109,1,0,
0,0,14,114,1,0,0,0,16,119,1,0,0,0,18,130,1,0,0,0,20,138,1,0,0,0,22,154,1,
0,0,0,24,156,1,0,0,0,26,158,1,0,0,0,28,166,1,0,0,0,30,181,1,0,0,0,32,33,
5,1,0,0,33,34,5,25,0,0,34,36,5,2,0,0,35,37,3,2,1,0,36,35,1,0,0,0,36,37,1,
0,0,0,37,41,1,0,0,0,38,40,3,6,3,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,
0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,3,0,0,45,46,3,8,4,
0,46,47,5,4,0,0,47,1,1,0,0,0,48,61,5,5,0,0,49,54,5,25,0,0,50,51,5,6,0,0,
51,53,5,25,0,0,52,50,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,
57,1,0,0,0,56,54,1,0,0,0,57,58,5,7,0,0,58,59,3,4,2,0,59,60,5,2,0,0,60,62,
1,0,0,0,61,49,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,3,1,0,
0,0,65,66,7,0,0,0,66,5,1,0,0,0,67,68,5,10,0,0,68,69,5,25,0,0,69,82,5,11,
0,0,70,71,5,25,0,0,71,72,5,7,0,0,72,79,3,4,2,0,73,74,5,6,0,0,74,75,5,25,
0,0,75,76,5,7,0,0,76,78,3,4,2,0,77,73,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,
0,79,80,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,82,70,1,0,0,0,82,83,1,0,0,0,
83,84,1,0,0,0,84,85,5,12,0,0,85,87,5,13,0,0,86,88,3,2,1,0,87,86,1,0,0,0,
87,88,1,0,0,0,88,89,1,0,0,0,89,90,3,8,4,0,90,91,5,14,0,0,91,92,5,2,0,0,92,
7,1,0,0,0,93,97,5,15,0,0,94,96,3,10,5,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,
1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,16,0,0,101,
9,1,0,0,0,102,108,3,12,6,0,103,108,3,16,8,0,104,108,3,26,13,0,105,108,3,
28,14,0,106,108,3,30,15,0,107,102,1,0,0,0,107,103,1,0,0,0,107,104,1,0,0,
0,107,105,1,0,0,0,107,106,1,0,0,0,108,11,1,0,0,0,109,110,5,25,0,0,110,111,
5,31,0,0,111,112,3,14,7,0,112,113,5,2,0,0,113,13,1,0,0,0,114,117,3,18,9,
0,115,116,7,1,0,0,116,118,3,18,9,0,117,115,1,0,0,0,117,118,1,0,0,0,118,15,
1,0,0,0,119,120,5,17,0,0,120,121,5,11,0,0,121,122,3,14,7,0,122,123,5,12,
0,0,123,126,3,8,4,0,124,125,5,18,0,0,125,127,3,8,4,0,126,124,1,0,0,0,126,
127,1,0,0,0,127,128,1,0,0,0,128,129,5,2,0,0,129,17,1,0,0,0,130,135,3,20,
10,0,131,132,7,2,0,0,132,134,3,20,10,0,133,131,1,0,0,0,134,137,1,0,0,0,135,
133,1,0,0,0,135,136,1,0,0,0,136,19,1,0,0,0,137,135,1,0,0,0,138,141,3,22,
11,0,139,140,7,3,0,0,140,142,3,22,11,0,141,139,1,0,0,0,141,142,1,0,0,0,142,
21,1,0,0,0,143,144,5,11,0,0,144,145,3,14,7,0,145,146,5,12,0,0,146,155,1,
0,0,0,147,149,7,2,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,152,1,0,0,0,150,
153,5,25,0,0,151,153,3,24,12,0,152,150,1,0,0,0,152,151,1,0,0,0,153,155,1,
0,0,0,154,143,1,0,0,0,154,148,1,0,0,0,155,23,1,0,0,0,156,157,7,4,0,0,157,
25,1,0,0,0,158,159,5,19,0,0,159,160,3,8,4,0,160,161,5,20,0,0,161,162,5,11,
0,0,162,163,3,14,7,0,163,164,5,12,0,0,164,165,5,2,0,0,165,27,1,0,0,0,166,
167,5,25,0,0,167,176,5,11,0,0,168,173,3,14,7,0,169,170,5,6,0,0,170,172,3,
14,7,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,
177,1,0,0,0,175,173,1,0,0,0,176,168,1,0,0,0,176,177,1,0,0,0,177,178,1,0,
0,0,178,179,5,12,0,0,179,180,5,2,0,0,180,29,1,0,0,0,181,182,5,21,0,0,182,
185,5,11,0,0,183,186,3,14,7,0,184,186,5,26,0,0,185,183,1,0,0,0,185,184,1,
0,0,0,186,194,1,0,0,0,187,190,5,6,0,0,188,191,3,14,7,0,189,191,5,26,0,0,
190,188,1,0,0,0,190,189,1,0,0,0,191,193,1,0,0,0,192,187,1,0,0,0,193,196,
1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,
197,198,5,12,0,0,198,199,5,2,0,0,199,31,1,0,0,0,21,36,41,54,63,79,82,87,
97,107,117,126,135,141,148,152,154,173,176,185,190,194];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class babyduckParser extends antlr4.Parser {

    static grammarFileName = "babyduck.g4";
    static literalNames = [ null, "'program'", "';'", "'main'", "'end'", 
                            "'var'", "','", "':'", "'int'", "'float'", "'void'", 
                            "'('", "')'", "'['", "']'", "'{'", "'}'", "'if'", 
                            "'else'", "'while'", "'do'", "'print_w'", null, 
                            null, null, null, null, "'+'", "'-'", "'*'", 
                            "'/'", "'='", "'!='", "'>'", "'<'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "WhiteSpace", 
                             "INTEGER", "FLOAT_NUM", "ID", "STRING", "PLUS", 
                             "MINUS", "MULTIPLY", "DIVIDE", "EQUALS", "NOTEQUALS", 
                             "GREATERTHAN", "LESSTHAN" ];
    static ruleNames = [ "program", "vars", "type", "funcs", "body", "statement", 
                         "assign", "expression", "condition", "exp", "termino", 
                         "factor", "cte", "cycle", "f_call", "print" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = babyduckParser.ruleNames;
        this.literalNames = babyduckParser.literalNames;
        this.symbolicNames = babyduckParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, babyduckParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(babyduckParser.T__0);
	        this.state = 33;
	        this.match(babyduckParser.ID);
	        this.state = 34;
	        this.match(babyduckParser.T__1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 35;
	            this.vars();
	        }

	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 38;
	            this.funcs();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(babyduckParser.T__2);
	        this.state = 45;
	        this.body();
	        this.state = 46;
	        this.match(babyduckParser.T__3);
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
	        this.state = 48;
	        this.match(babyduckParser.T__4);
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.match(babyduckParser.ID);
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 50;
	                this.match(babyduckParser.T__5);
	                this.state = 51;
	                this.match(babyduckParser.ID);
	                this.state = 56;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 57;
	            this.match(babyduckParser.T__6);
	            this.state = 58;
	            this.type();
	            this.state = 59;
	            this.match(babyduckParser.T__1);
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===25);
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
	    this.enterRule(localctx, 4, babyduckParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
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



	funcs() {
	    let localctx = new FuncsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, babyduckParser.RULE_funcs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(babyduckParser.T__9);
	        this.state = 68;
	        this.match(babyduckParser.ID);
	        this.state = 69;
	        this.match(babyduckParser.T__10);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 70;
	            this.match(babyduckParser.ID);
	            this.state = 71;
	            this.match(babyduckParser.T__6);
	            this.state = 72;
	            this.type();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 73;
	                this.match(babyduckParser.T__5);
	                this.state = 74;
	                this.match(babyduckParser.ID);
	                this.state = 75;
	                this.match(babyduckParser.T__6);
	                this.state = 76;
	                this.type();
	                this.state = 81;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 84;
	        this.match(babyduckParser.T__11);
	        this.state = 85;
	        this.match(babyduckParser.T__12);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 86;
	            this.vars();
	        }

	        this.state = 89;
	        this.body();
	        this.state = 90;
	        this.match(babyduckParser.T__13);
	        this.state = 91;
	        this.match(babyduckParser.T__1);
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
	    this.enterRule(localctx, 8, babyduckParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(babyduckParser.T__14);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36306944) !== 0)) {
	            this.state = 94;
	            this.statement();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(babyduckParser.T__15);
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
	    this.enterRule(localctx, 10, babyduckParser.RULE_statement);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.condition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.cycle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 105;
	            this.f_call();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 106;
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
	    this.enterRule(localctx, 12, babyduckParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(babyduckParser.ID);
	        this.state = 110;
	        this.match(babyduckParser.EQUALS);
	        this.state = 111;
	        this.expression();
	        this.state = 112;
	        this.match(babyduckParser.T__1);
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
	    this.enterRule(localctx, 14, babyduckParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.exp();
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 115;
	            _la = this._input.LA(1);
	            if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, babyduckParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(babyduckParser.T__16);
	        this.state = 120;
	        this.match(babyduckParser.T__10);
	        this.state = 121;
	        this.expression();
	        this.state = 122;
	        this.match(babyduckParser.T__11);
	        this.state = 123;
	        this.body();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 124;
	            this.match(babyduckParser.T__17);
	            this.state = 125;
	            this.body();
	        }

	        this.state = 128;
	        this.match(babyduckParser.T__1);
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
	    this.enterRule(localctx, 18, babyduckParser.RULE_exp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.termino();
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27 || _la===28) {
	            this.state = 131;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 132;
	            this.termino();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	    this.enterRule(localctx, 20, babyduckParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.factor();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29 || _la===30) {
	            this.state = 139;
	            _la = this._input.LA(1);
	            if(!(_la===29 || _la===30)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 140;
	            this.factor();
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
	    this.enterRule(localctx, 22, babyduckParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.match(babyduckParser.T__10);
	            this.state = 144;
	            this.expression();
	            this.state = 145;
	            this.match(babyduckParser.T__11);
	            break;
	        case 23:
	        case 24:
	        case 25:
	        case 27:
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27 || _la===28) {
	                this.state = 147;
	                _la = this._input.LA(1);
	                if(!(_la===27 || _la===28)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 152;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 25:
	                this.state = 150;
	                this.match(babyduckParser.ID);
	                break;
	            case 23:
	            case 24:
	                this.state = 151;
	                this.cte();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
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
	    this.enterRule(localctx, 24, babyduckParser.RULE_cte);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
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



	cycle() {
	    let localctx = new CycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, babyduckParser.RULE_cycle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(babyduckParser.T__18);
	        this.state = 159;
	        this.body();
	        this.state = 160;
	        this.match(babyduckParser.T__19);
	        this.state = 161;
	        this.match(babyduckParser.T__10);
	        this.state = 162;
	        this.expression();
	        this.state = 163;
	        this.match(babyduckParser.T__11);
	        this.state = 164;
	        this.match(babyduckParser.T__1);
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
	    this.enterRule(localctx, 28, babyduckParser.RULE_f_call);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(babyduckParser.ID);
	        this.state = 167;
	        this.match(babyduckParser.T__10);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 461375488) !== 0)) {
	            this.state = 168;
	            this.expression();
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 169;
	                this.match(babyduckParser.T__5);
	                this.state = 170;
	                this.expression();
	                this.state = 175;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 178;
	        this.match(babyduckParser.T__11);
	        this.state = 179;
	        this.match(babyduckParser.T__1);
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
	    this.enterRule(localctx, 30, babyduckParser.RULE_print);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(babyduckParser.T__20);
	        this.state = 182;
	        this.match(babyduckParser.T__10);
	        this.state = 185;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 23:
	        case 24:
	        case 25:
	        case 27:
	        case 28:
	            this.state = 183;
	            this.expression();
	            break;
	        case 26:
	            this.state = 184;
	            this.match(babyduckParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 187;
	            this.match(babyduckParser.T__5);
	            this.state = 190;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 11:
	            case 23:
	            case 24:
	            case 25:
	            case 27:
	            case 28:
	                this.state = 188;
	                this.expression();
	                break;
	            case 26:
	                this.state = 189;
	                this.match(babyduckParser.STRING);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 197;
	        this.match(babyduckParser.T__11);
	        this.state = 198;
	        this.match(babyduckParser.T__1);
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
babyduckParser.T__0 = 1;
babyduckParser.T__1 = 2;
babyduckParser.T__2 = 3;
babyduckParser.T__3 = 4;
babyduckParser.T__4 = 5;
babyduckParser.T__5 = 6;
babyduckParser.T__6 = 7;
babyduckParser.T__7 = 8;
babyduckParser.T__8 = 9;
babyduckParser.T__9 = 10;
babyduckParser.T__10 = 11;
babyduckParser.T__11 = 12;
babyduckParser.T__12 = 13;
babyduckParser.T__13 = 14;
babyduckParser.T__14 = 15;
babyduckParser.T__15 = 16;
babyduckParser.T__16 = 17;
babyduckParser.T__17 = 18;
babyduckParser.T__18 = 19;
babyduckParser.T__19 = 20;
babyduckParser.T__20 = 21;
babyduckParser.WhiteSpace = 22;
babyduckParser.INTEGER = 23;
babyduckParser.FLOAT_NUM = 24;
babyduckParser.ID = 25;
babyduckParser.STRING = 26;
babyduckParser.PLUS = 27;
babyduckParser.MINUS = 28;
babyduckParser.MULTIPLY = 29;
babyduckParser.DIVIDE = 30;
babyduckParser.EQUALS = 31;
babyduckParser.NOTEQUALS = 32;
babyduckParser.GREATERTHAN = 33;
babyduckParser.LESSTHAN = 34;

babyduckParser.RULE_program = 0;
babyduckParser.RULE_vars = 1;
babyduckParser.RULE_type = 2;
babyduckParser.RULE_funcs = 3;
babyduckParser.RULE_body = 4;
babyduckParser.RULE_statement = 5;
babyduckParser.RULE_assign = 6;
babyduckParser.RULE_expression = 7;
babyduckParser.RULE_condition = 8;
babyduckParser.RULE_exp = 9;
babyduckParser.RULE_termino = 10;
babyduckParser.RULE_factor = 11;
babyduckParser.RULE_cte = 12;
babyduckParser.RULE_cycle = 13;
babyduckParser.RULE_f_call = 14;
babyduckParser.RULE_print = 15;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = babyduckParser.RULE_program;
    }

	ID() {
	    return this.getToken(babyduckParser.ID, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
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
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof babyduckListener ) {
	        listener.exitProgram(this);
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

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.ID);
	    } else {
	        return this.getToken(babyduckParser.ID, i);
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

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.ID);
	    } else {
	        return this.getToken(babyduckParser.ID, i);
	    }
	};


	body() {
	    return this.getTypedRuleContext(BodyContext,0);
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

	ID() {
	    return this.getToken(babyduckParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(babyduckParser.EQUALS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	GREATERTHAN() {
	    return this.getToken(babyduckParser.GREATERTHAN, 0);
	};

	LESSTHAN() {
	    return this.getToken(babyduckParser.LESSTHAN, 0);
	};

	NOTEQUALS() {
	    return this.getToken(babyduckParser.NOTEQUALS, 0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.PLUS);
	    } else {
	        return this.getToken(babyduckParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.MINUS);
	    } else {
	        return this.getToken(babyduckParser.MINUS, i);
	    }
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

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MULTIPLY() {
	    return this.getToken(babyduckParser.MULTIPLY, 0);
	};

	DIVIDE() {
	    return this.getToken(babyduckParser.DIVIDE, 0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ID() {
	    return this.getToken(babyduckParser.ID, 0);
	};

	cte() {
	    return this.getTypedRuleContext(CteContext,0);
	};

	MINUS() {
	    return this.getToken(babyduckParser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(babyduckParser.PLUS, 0);
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

	INTEGER() {
	    return this.getToken(babyduckParser.INTEGER, 0);
	};

	FLOAT_NUM() {
	    return this.getToken(babyduckParser.FLOAT_NUM, 0);
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

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	ID() {
	    return this.getToken(babyduckParser.ID, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
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

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.STRING);
	    } else {
	        return this.getToken(babyduckParser.STRING, i);
	    }
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




babyduckParser.ProgramContext = ProgramContext; 
babyduckParser.VarsContext = VarsContext; 
babyduckParser.TypeContext = TypeContext; 
babyduckParser.FuncsContext = FuncsContext; 
babyduckParser.BodyContext = BodyContext; 
babyduckParser.StatementContext = StatementContext; 
babyduckParser.AssignContext = AssignContext; 
babyduckParser.ExpressionContext = ExpressionContext; 
babyduckParser.ConditionContext = ConditionContext; 
babyduckParser.ExpContext = ExpContext; 
babyduckParser.TerminoContext = TerminoContext; 
babyduckParser.FactorContext = FactorContext; 
babyduckParser.CteContext = CteContext; 
babyduckParser.CycleContext = CycleContext; 
babyduckParser.F_callContext = F_callContext; 
babyduckParser.PrintContext = PrintContext; 
