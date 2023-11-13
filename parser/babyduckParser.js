// Generated from babyduck.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import babyduckListener from './babyduckListener.js';
const serializedATN = [4,1,35,221,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,5,0,47,8,0,10,0,12,0,50,9,0,1,0,5,0,53,8,0,10,0,
12,0,56,9,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,1,68,8,1,11,1,12,1,
69,1,2,1,2,1,2,4,2,75,8,2,11,2,12,2,76,1,2,3,2,80,8,2,1,3,1,3,1,3,1,3,3,
3,86,8,3,1,3,1,3,1,3,3,3,91,8,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,4,4,105,8,4,11,4,12,4,106,1,4,1,4,1,4,1,4,3,4,113,8,4,1,5,1,5,5,
5,117,8,5,10,5,12,5,120,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,131,
8,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,145,8,9,1,9,1,9,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,160,8,11,1,11,
1,11,1,11,1,12,1,12,1,12,1,12,1,12,3,12,170,8,12,1,13,1,13,1,13,1,13,1,13,
1,13,1,14,1,14,3,14,180,8,14,1,14,1,14,3,14,184,8,14,1,15,1,15,1,15,3,15,
189,8,15,1,16,1,16,1,16,1,16,1,16,3,16,196,8,16,1,17,1,17,1,17,1,17,1,17,
3,17,203,8,17,1,18,1,18,1,18,1,18,1,18,3,18,210,8,18,1,19,3,19,213,8,19,
1,19,1,19,3,19,217,8,19,1,20,1,20,1,20,0,0,21,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,36,38,40,0,5,1,0,11,12,1,0,19,21,1,0,14,15,1,0,16,17,
1,0,32,33,224,0,42,1,0,0,0,2,61,1,0,0,0,4,79,1,0,0,0,6,81,1,0,0,0,8,112,
1,0,0,0,10,114,1,0,0,0,12,123,1,0,0,0,14,130,1,0,0,0,16,132,1,0,0,0,18,137,
1,0,0,0,20,148,1,0,0,0,22,156,1,0,0,0,24,169,1,0,0,0,26,171,1,0,0,0,28,179,
1,0,0,0,30,185,1,0,0,0,32,195,1,0,0,0,34,202,1,0,0,0,36,209,1,0,0,0,38,212,
1,0,0,0,40,218,1,0,0,0,42,43,5,1,0,0,43,44,5,13,0,0,44,48,5,30,0,0,45,47,
3,2,1,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,54,1,
0,0,0,50,48,1,0,0,0,51,53,3,6,3,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,
0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,2,0,0,58,59,3,10,5,
0,59,60,5,3,0,0,60,1,1,0,0,0,61,67,5,4,0,0,62,63,3,4,2,0,63,64,5,29,0,0,
64,65,3,12,6,0,65,66,5,30,0,0,66,68,1,0,0,0,67,62,1,0,0,0,68,69,1,0,0,0,
69,67,1,0,0,0,69,70,1,0,0,0,70,3,1,0,0,0,71,80,5,13,0,0,72,73,5,13,0,0,73,
75,5,28,0,0,74,72,1,0,0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,78,
1,0,0,0,78,80,5,13,0,0,79,71,1,0,0,0,79,74,1,0,0,0,80,5,1,0,0,0,81,82,5,
5,0,0,82,83,5,13,0,0,83,85,5,22,0,0,84,86,3,8,4,0,85,84,1,0,0,0,85,86,1,
0,0,0,86,87,1,0,0,0,87,88,5,23,0,0,88,90,5,24,0,0,89,91,3,2,1,0,90,89,1,
0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,3,10,5,0,93,94,5,25,0,0,94,95,5,
30,0,0,95,7,1,0,0,0,96,97,5,13,0,0,97,98,5,29,0,0,98,113,3,12,6,0,99,100,
5,13,0,0,100,101,5,29,0,0,101,102,3,12,6,0,102,103,5,28,0,0,103,105,1,0,
0,0,104,99,1,0,0,0,105,106,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,108,
1,0,0,0,108,109,5,13,0,0,109,110,5,29,0,0,110,111,3,12,6,0,111,113,1,0,0,
0,112,96,1,0,0,0,112,104,1,0,0,0,113,9,1,0,0,0,114,118,5,26,0,0,115,117,
3,14,7,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,
119,121,1,0,0,0,120,118,1,0,0,0,121,122,5,27,0,0,122,11,1,0,0,0,123,124,
7,0,0,0,124,13,1,0,0,0,125,131,3,16,8,0,126,131,3,18,9,0,127,131,3,20,10,
0,128,131,3,22,11,0,129,131,3,26,13,0,130,125,1,0,0,0,130,126,1,0,0,0,130,
127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,15,1,0,0,0,132,133,5,13,
0,0,133,134,5,18,0,0,134,135,3,30,15,0,135,136,5,30,0,0,136,17,1,0,0,0,137,
138,5,9,0,0,138,139,5,22,0,0,139,140,3,30,15,0,140,141,5,23,0,0,141,144,
3,10,5,0,142,143,5,10,0,0,143,145,3,10,5,0,144,142,1,0,0,0,144,145,1,0,0,
0,145,146,1,0,0,0,146,147,5,30,0,0,147,19,1,0,0,0,148,149,5,7,0,0,149,150,
3,10,5,0,150,151,5,8,0,0,151,152,5,22,0,0,152,153,3,30,15,0,153,154,5,23,
0,0,154,155,5,30,0,0,155,21,1,0,0,0,156,157,5,13,0,0,157,159,5,22,0,0,158,
160,3,24,12,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,162,5,
23,0,0,162,163,5,30,0,0,163,23,1,0,0,0,164,170,3,30,15,0,165,166,3,30,15,
0,166,167,5,28,0,0,167,168,3,24,12,0,168,170,1,0,0,0,169,164,1,0,0,0,169,
165,1,0,0,0,170,25,1,0,0,0,171,172,5,6,0,0,172,173,5,22,0,0,173,174,3,28,
14,0,174,175,5,23,0,0,175,176,5,30,0,0,176,27,1,0,0,0,177,180,3,30,15,0,
178,180,5,31,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,183,1,0,0,0,181,182,
5,28,0,0,182,184,3,28,14,0,183,181,1,0,0,0,183,184,1,0,0,0,184,29,1,0,0,
0,185,188,3,32,16,0,186,187,7,1,0,0,187,189,3,32,16,0,188,186,1,0,0,0,188,
189,1,0,0,0,189,31,1,0,0,0,190,196,3,34,17,0,191,192,3,34,17,0,192,193,7,
2,0,0,193,194,3,32,16,0,194,196,1,0,0,0,195,190,1,0,0,0,195,191,1,0,0,0,
196,33,1,0,0,0,197,203,3,36,18,0,198,199,3,36,18,0,199,200,7,3,0,0,200,201,
3,34,17,0,201,203,1,0,0,0,202,197,1,0,0,0,202,198,1,0,0,0,203,35,1,0,0,0,
204,205,5,22,0,0,205,206,3,30,15,0,206,207,5,23,0,0,207,210,1,0,0,0,208,
210,3,38,19,0,209,204,1,0,0,0,209,208,1,0,0,0,210,37,1,0,0,0,211,213,7,2,
0,0,212,211,1,0,0,0,212,213,1,0,0,0,213,216,1,0,0,0,214,217,5,13,0,0,215,
217,3,40,20,0,216,214,1,0,0,0,216,215,1,0,0,0,217,39,1,0,0,0,218,219,7,4,
0,0,219,41,1,0,0,0,22,48,54,69,76,79,85,90,106,112,118,130,144,159,169,179,
183,188,195,202,209,212,216];


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
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 45;
	            this.vars();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 51;
	            this.funcs();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.match(babyduckParser.Main);
	        this.state = 58;
	        this.body();
	        this.state = 59;
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
	        this.state = 61;
	        this.match(babyduckParser.Var);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.commaSeparatedId();
	            this.state = 63;
	            this.match(babyduckParser.Colon);
	            this.state = 64;
	            this.type();
	            this.state = 65;
	            this.match(babyduckParser.Semi);
	            this.state = 69; 
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(babyduckParser.Identifier);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 72;
	            		this.match(babyduckParser.Identifier);
	            		this.state = 73;
	            		this.match(babyduckParser.Comma);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 76; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 78;
	            this.match(babyduckParser.Identifier);
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
	        this.state = 81;
	        this.match(babyduckParser.Void);
	        this.state = 82;
	        this.match(babyduckParser.Identifier);
	        this.state = 83;
	        this.match(babyduckParser.LeftParen);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 84;
	            this.idTypeSequence();
	        }

	        this.state = 87;
	        this.match(babyduckParser.RightParen);
	        this.state = 88;
	        this.match(babyduckParser.LeftBracket);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 89;
	            this.vars();
	        }

	        this.state = 92;
	        this.body();
	        this.state = 93;
	        this.match(babyduckParser.RightBracket);
	        this.state = 94;
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
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.match(babyduckParser.Identifier);
	            this.state = 97;
	            this.match(babyduckParser.Colon);
	            this.state = 98;
	            this.type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 99;
	            		this.match(babyduckParser.Identifier);
	            		this.state = 100;
	            		this.match(babyduckParser.Colon);
	            		this.state = 101;
	            		this.type();
	            		this.state = 102;
	            		this.match(babyduckParser.Comma);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 106; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 108;
	            this.match(babyduckParser.Identifier);
	            this.state = 109;
	            this.match(babyduckParser.Colon);
	            this.state = 110;
	            this.type();
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
	        this.state = 114;
	        this.match(babyduckParser.LeftBrace);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8896) !== 0)) {
	            this.state = 115;
	            this.statement();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
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
	        this.state = 123;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.condition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 127;
	            this.cycle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 128;
	            this.f_call();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 129;
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
	        this.state = 132;
	        this.match(babyduckParser.Identifier);
	        this.state = 133;
	        this.match(babyduckParser.Assign);
	        this.state = 134;
	        this.expression();
	        this.state = 135;
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
	        this.state = 137;
	        this.match(babyduckParser.If);
	        this.state = 138;
	        this.match(babyduckParser.LeftParen);
	        this.state = 139;
	        this.expression();
	        this.state = 140;
	        this.match(babyduckParser.RightParen);
	        this.state = 141;
	        this.body();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 142;
	            this.match(babyduckParser.Else);
	            this.state = 143;
	            this.body();
	        }

	        this.state = 146;
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
	        this.state = 148;
	        this.match(babyduckParser.While);
	        this.state = 149;
	        this.body();
	        this.state = 150;
	        this.match(babyduckParser.Do);
	        this.state = 151;
	        this.match(babyduckParser.LeftParen);
	        this.state = 152;
	        this.expression();
	        this.state = 153;
	        this.match(babyduckParser.RightParen);
	        this.state = 154;
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
	        this.state = 156;
	        this.match(babyduckParser.Identifier);
	        this.state = 157;
	        this.match(babyduckParser.LeftParen);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 1573383) !== 0)) {
	            this.state = 158;
	            this.commaSeparatedExpression();
	        }

	        this.state = 161;
	        this.match(babyduckParser.RightParen);
	        this.state = 162;
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
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.expression();
	            this.state = 166;
	            this.match(babyduckParser.Comma);
	            this.state = 167;
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
	        this.state = 171;
	        this.match(babyduckParser.Print);
	        this.state = 172;
	        this.match(babyduckParser.LeftParen);
	        this.state = 173;
	        this.printSequence();
	        this.state = 174;
	        this.match(babyduckParser.RightParen);
	        this.state = 175;
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
	        this.state = 179;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 14:
	        case 15:
	        case 22:
	        case 32:
	        case 33:
	            this.state = 177;
	            this.expression();
	            break;
	        case 31:
	            this.state = 178;
	            this.match(babyduckParser.CteString);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 181;
	            this.match(babyduckParser.Comma);
	            this.state = 182;
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
	        this.state = 185;
	        this.exp();
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0)) {
	            this.state = 186;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3670016) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 187;
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
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.termino();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            this.termino();
	            this.state = 192;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 193;
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
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.factor();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.factor();
	            this.state = 199;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 200;
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
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            this.match(babyduckParser.LeftParen);
	            this.state = 205;
	            this.expression();
	            this.state = 206;
	            this.match(babyduckParser.RightParen);
	            break;
	        case 13:
	        case 14:
	        case 15:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
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
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===15) {
	            this.state = 211;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.state = 214;
	            this.match(babyduckParser.Identifier);
	            break;
	        case 32:
	        case 33:
	            this.state = 215;
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
	        this.state = 218;
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

	vars = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarsContext);
	    } else {
	        return this.getTypedRuleContext(VarsContext,i);
	    }
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

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.Identifier);
	    } else {
	        return this.getToken(babyduckParser.Identifier, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.Comma);
	    } else {
	        return this.getToken(babyduckParser.Comma, i);
	    }
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

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.Identifier);
	    } else {
	        return this.getToken(babyduckParser.Identifier, i);
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

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(babyduckParser.Comma);
	    } else {
	        return this.getToken(babyduckParser.Comma, i);
	    }
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
