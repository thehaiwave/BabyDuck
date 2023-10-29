// Generated from /Users/brt/Documents/parser/XDD/babyduck.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class babyduckParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Program=1, Main=2, End=3, Var=4, Void=5, Print=6, While=7, Do=8, If=9, 
		Else=10, Int=11, Float=12, Identifier=13, Plus=14, Minus=15, Star=16, 
		Div=17, Assign=18, NotEqual=19, Greater=20, Less=21, LeftParen=22, RightParen=23, 
		LeftBracket=24, RightBracket=25, LeftBrace=26, RightBrace=27, Comma=28, 
		Colon=29, Semi=30, CteString=31, CteInt=32, CteFloat=33, Whitespace=34, 
		Newline=35;
	public static final int
		RULE_programa = 0, RULE_vars = 1, RULE_commaSeparatedId = 2, RULE_funcs = 3, 
		RULE_idTypeSequence = 4, RULE_body = 5, RULE_type = 6, RULE_statement = 7, 
		RULE_assign = 8, RULE_condition = 9, RULE_cycle = 10, RULE_f_call = 11, 
		RULE_commaSeparatedExpression = 12, RULE_print = 13, RULE_printSequence = 14, 
		RULE_expression = 15, RULE_exp = 16, RULE_termino = 17, RULE_factor = 18, 
		RULE_factorSequence = 19, RULE_cte = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "vars", "commaSeparatedId", "funcs", "idTypeSequence", "body", 
			"type", "statement", "assign", "condition", "cycle", "f_call", "commaSeparatedExpression", 
			"print", "printSequence", "expression", "exp", "termino", "factor", "factorSequence", 
			"cte"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "'main'", "'end'", "'var'", "'void'", "'print'", "'while'", 
			"'do'", "'if'", "'else'", "'int'", "'float'", null, "'+'", "'-'", "'*'", 
			"'/'", "'='", "'!='", "'>'", "'<'", "'('", "')'", "'['", "']'", "'{'", 
			"'}'", "','", "':'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "Program", "Main", "End", "Var", "Void", "Print", "While", "Do", 
			"If", "Else", "Int", "Float", "Identifier", "Plus", "Minus", "Star", 
			"Div", "Assign", "NotEqual", "Greater", "Less", "LeftParen", "RightParen", 
			"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "Comma", "Colon", 
			"Semi", "CteString", "CteInt", "CteFloat", "Whitespace", "Newline"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "babyduck.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public babyduckParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode Program() { return getToken(babyduckParser.Program, 0); }
		public TerminalNode Identifier() { return getToken(babyduckParser.Identifier, 0); }
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public TerminalNode Main() { return getToken(babyduckParser.Main, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public TerminalNode End() { return getToken(babyduckParser.End, 0); }
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public List<FuncsContext> funcs() {
			return getRuleContexts(FuncsContext.class);
		}
		public FuncsContext funcs(int i) {
			return getRuleContext(FuncsContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(Program);
			setState(43);
			match(Identifier);
			setState(44);
			match(Semi);
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var) {
				{
				setState(45);
				vars();
				}
			}

			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Void) {
				{
				{
				setState(48);
				funcs();
				}
				}
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(54);
			match(Main);
			setState(55);
			body();
			setState(56);
			match(End);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarsContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(babyduckParser.Var, 0); }
		public List<CommaSeparatedIdContext> commaSeparatedId() {
			return getRuleContexts(CommaSeparatedIdContext.class);
		}
		public CommaSeparatedIdContext commaSeparatedId(int i) {
			return getRuleContext(CommaSeparatedIdContext.class,i);
		}
		public List<TerminalNode> Colon() { return getTokens(babyduckParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(babyduckParser.Colon, i);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> Semi() { return getTokens(babyduckParser.Semi); }
		public TerminalNode Semi(int i) {
			return getToken(babyduckParser.Semi, i);
		}
		public VarsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vars; }
	}

	public final VarsContext vars() throws RecognitionException {
		VarsContext _localctx = new VarsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_vars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			match(Var);
			setState(64); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(59);
				commaSeparatedId();
				setState(60);
				match(Colon);
				setState(61);
				type();
				setState(62);
				match(Semi);
				}
				}
				setState(66); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Identifier );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommaSeparatedIdContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(babyduckParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(babyduckParser.Identifier, i);
		}
		public List<TerminalNode> Comma() { return getTokens(babyduckParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(babyduckParser.Comma, i);
		}
		public CommaSeparatedIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commaSeparatedId; }
	}

	public final CommaSeparatedIdContext commaSeparatedId() throws RecognitionException {
		CommaSeparatedIdContext _localctx = new CommaSeparatedIdContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_commaSeparatedId);
		try {
			int _alt;
			setState(76);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(71); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(69);
						match(Identifier);
						setState(70);
						match(Comma);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(73); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(75);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncsContext extends ParserRuleContext {
		public TerminalNode Void() { return getToken(babyduckParser.Void, 0); }
		public TerminalNode Identifier() { return getToken(babyduckParser.Identifier, 0); }
		public TerminalNode LeftParen() { return getToken(babyduckParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(babyduckParser.RightParen, 0); }
		public TerminalNode LeftBracket() { return getToken(babyduckParser.LeftBracket, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public TerminalNode RightBracket() { return getToken(babyduckParser.RightBracket, 0); }
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public IdTypeSequenceContext idTypeSequence() {
			return getRuleContext(IdTypeSequenceContext.class,0);
		}
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public FuncsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcs; }
	}

	public final FuncsContext funcs() throws RecognitionException {
		FuncsContext _localctx = new FuncsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_funcs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(Void);
			setState(79);
			match(Identifier);
			setState(80);
			match(LeftParen);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(81);
				idTypeSequence();
				}
			}

			setState(84);
			match(RightParen);
			setState(85);
			match(LeftBracket);
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var) {
				{
				setState(86);
				vars();
				}
			}

			setState(89);
			body();
			setState(90);
			match(RightBracket);
			setState(91);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdTypeSequenceContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(babyduckParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(babyduckParser.Identifier, i);
		}
		public List<TerminalNode> Colon() { return getTokens(babyduckParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(babyduckParser.Colon, i);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(babyduckParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(babyduckParser.Comma, i);
		}
		public IdTypeSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idTypeSequence; }
	}

	public final IdTypeSequenceContext idTypeSequence() throws RecognitionException {
		IdTypeSequenceContext _localctx = new IdTypeSequenceContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_idTypeSequence);
		try {
			int _alt;
			setState(109);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(93);
				match(Identifier);
				setState(94);
				match(Colon);
				setState(95);
				type();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(101); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(96);
						match(Identifier);
						setState(97);
						match(Colon);
						setState(98);
						type();
						setState(99);
						match(Comma);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(103); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(105);
				match(Identifier);
				setState(106);
				match(Colon);
				setState(107);
				type();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BodyContext extends ParserRuleContext {
		public TerminalNode LeftBrace() { return getToken(babyduckParser.LeftBrace, 0); }
		public TerminalNode RightBrace() { return getToken(babyduckParser.RightBrace, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_body; }
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(LeftBrace);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8896L) != 0)) {
				{
				{
				setState(112);
				statement();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public TerminalNode Int() { return getToken(babyduckParser.Int, 0); }
		public TerminalNode Float() { return getToken(babyduckParser.Float, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_la = _input.LA(1);
			if ( !(_la==Int || _la==Float) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public CycleContext cycle() {
			return getRuleContext(CycleContext.class,0);
		}
		public F_callContext f_call() {
			return getRuleContext(F_callContext.class,0);
		}
		public PrintContext print() {
			return getRuleContext(PrintContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_statement);
		try {
			setState(127);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(122);
				assign();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(123);
				condition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(124);
				cycle();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(125);
				f_call();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(126);
				print();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(babyduckParser.Identifier, 0); }
		public TerminalNode Assign() { return getToken(babyduckParser.Assign, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			match(Identifier);
			setState(130);
			match(Assign);
			setState(131);
			expression();
			setState(132);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(babyduckParser.If, 0); }
		public TerminalNode LeftParen() { return getToken(babyduckParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(babyduckParser.RightParen, 0); }
		public List<BodyContext> body() {
			return getRuleContexts(BodyContext.class);
		}
		public BodyContext body(int i) {
			return getRuleContext(BodyContext.class,i);
		}
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public TerminalNode Else() { return getToken(babyduckParser.Else, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(If);
			setState(135);
			match(LeftParen);
			setState(136);
			expression();
			setState(137);
			match(RightParen);
			setState(138);
			body();
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Else) {
				{
				setState(139);
				match(Else);
				setState(140);
				body();
				}
			}

			setState(143);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CycleContext extends ParserRuleContext {
		public TerminalNode While() { return getToken(babyduckParser.While, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public TerminalNode Do() { return getToken(babyduckParser.Do, 0); }
		public TerminalNode LeftParen() { return getToken(babyduckParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(babyduckParser.RightParen, 0); }
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public CycleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cycle; }
	}

	public final CycleContext cycle() throws RecognitionException {
		CycleContext _localctx = new CycleContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_cycle);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(While);
			setState(146);
			body();
			setState(147);
			match(Do);
			setState(148);
			match(LeftParen);
			setState(149);
			expression();
			setState(150);
			match(RightParen);
			setState(151);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class F_callContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(babyduckParser.Identifier, 0); }
		public TerminalNode LeftParen() { return getToken(babyduckParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(babyduckParser.RightParen, 0); }
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public CommaSeparatedExpressionContext commaSeparatedExpression() {
			return getRuleContext(CommaSeparatedExpressionContext.class,0);
		}
		public F_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_f_call; }
	}

	public final F_callContext f_call() throws RecognitionException {
		F_callContext _localctx = new F_callContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_f_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(Identifier);
			setState(154);
			match(LeftParen);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 12889153536L) != 0)) {
				{
				setState(155);
				commaSeparatedExpression();
				}
			}

			setState(158);
			match(RightParen);
			setState(159);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommaSeparatedExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Comma() { return getToken(babyduckParser.Comma, 0); }
		public CommaSeparatedExpressionContext commaSeparatedExpression() {
			return getRuleContext(CommaSeparatedExpressionContext.class,0);
		}
		public CommaSeparatedExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commaSeparatedExpression; }
	}

	public final CommaSeparatedExpressionContext commaSeparatedExpression() throws RecognitionException {
		CommaSeparatedExpressionContext _localctx = new CommaSeparatedExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_commaSeparatedExpression);
		try {
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(162);
				expression();
				setState(163);
				match(Comma);
				setState(164);
				commaSeparatedExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintContext extends ParserRuleContext {
		public TerminalNode Print() { return getToken(babyduckParser.Print, 0); }
		public TerminalNode LeftParen() { return getToken(babyduckParser.LeftParen, 0); }
		public PrintSequenceContext printSequence() {
			return getRuleContext(PrintSequenceContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(babyduckParser.RightParen, 0); }
		public TerminalNode Semi() { return getToken(babyduckParser.Semi, 0); }
		public PrintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print; }
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(Print);
			setState(169);
			match(LeftParen);
			setState(170);
			printSequence();
			setState(171);
			match(RightParen);
			setState(172);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintSequenceContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CteString() { return getToken(babyduckParser.CteString, 0); }
		public TerminalNode Comma() { return getToken(babyduckParser.Comma, 0); }
		public PrintSequenceContext printSequence() {
			return getRuleContext(PrintSequenceContext.class,0);
		}
		public PrintSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printSequence; }
	}

	public final PrintSequenceContext printSequence() throws RecognitionException {
		PrintSequenceContext _localctx = new PrintSequenceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_printSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
			case Plus:
			case Minus:
			case LeftParen:
			case CteInt:
			case CteFloat:
				{
				setState(174);
				expression();
				}
				break;
			case CteString:
				{
				setState(175);
				match(CteString);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Comma) {
				{
				setState(178);
				match(Comma);
				setState(179);
				printSequence();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode Greater() { return getToken(babyduckParser.Greater, 0); }
		public TerminalNode Less() { return getToken(babyduckParser.Less, 0); }
		public TerminalNode NotEqual() { return getToken(babyduckParser.NotEqual, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			exp();
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3670016L) != 0)) {
				{
				setState(183);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3670016L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(184);
				exp();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpContext extends ParserRuleContext {
		public TerminoContext termino() {
			return getRuleContext(TerminoContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode Plus() { return getToken(babyduckParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(babyduckParser.Minus, 0); }
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_exp);
		int _la;
		try {
			setState(192);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(187);
				termino();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(188);
				termino();
				setState(189);
				_la = _input.LA(1);
				if ( !(_la==Plus || _la==Minus) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(190);
				exp();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminoContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TerminoContext termino() {
			return getRuleContext(TerminoContext.class,0);
		}
		public TerminalNode Star() { return getToken(babyduckParser.Star, 0); }
		public TerminalNode Div() { return getToken(babyduckParser.Div, 0); }
		public TerminoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termino; }
	}

	public final TerminoContext termino() throws RecognitionException {
		TerminoContext _localctx = new TerminoContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_termino);
		int _la;
		try {
			setState(199);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(194);
				factor();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(195);
				factor();
				setState(196);
				_la = _input.LA(1);
				if ( !(_la==Star || _la==Div) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(197);
				termino();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorContext extends ParserRuleContext {
		public TerminalNode LeftParen() { return getToken(babyduckParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(babyduckParser.RightParen, 0); }
		public FactorSequenceContext factorSequence() {
			return getRuleContext(FactorSequenceContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_factor);
		try {
			setState(206);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(201);
				match(LeftParen);
				setState(202);
				expression();
				setState(203);
				match(RightParen);
				}
				break;
			case Identifier:
			case Plus:
			case Minus:
			case CteInt:
			case CteFloat:
				enterOuterAlt(_localctx, 2);
				{
				setState(205);
				factorSequence();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorSequenceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(babyduckParser.Identifier, 0); }
		public CteContext cte() {
			return getRuleContext(CteContext.class,0);
		}
		public TerminalNode Plus() { return getToken(babyduckParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(babyduckParser.Minus, 0); }
		public FactorSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factorSequence; }
	}

	public final FactorSequenceContext factorSequence() throws RecognitionException {
		FactorSequenceContext _localctx = new FactorSequenceContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_factorSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Plus || _la==Minus) {
				{
				setState(208);
				_la = _input.LA(1);
				if ( !(_la==Plus || _la==Minus) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(213);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				{
				setState(211);
				match(Identifier);
				}
				break;
			case CteInt:
			case CteFloat:
				{
				setState(212);
				cte();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CteContext extends ParserRuleContext {
		public TerminalNode CteInt() { return getToken(babyduckParser.CteInt, 0); }
		public TerminalNode CteFloat() { return getToken(babyduckParser.CteFloat, 0); }
		public CteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cte; }
	}

	public final CteContext cte() throws RecognitionException {
		CteContext _localctx = new CteContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_cte);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			_la = _input.LA(1);
			if ( !(_la==CteInt || _la==CteFloat) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001#\u00da\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0003\u0000/\b\u0000\u0001\u0000\u0005\u0000"+
		"2\b\u0000\n\u0000\f\u00005\t\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0004\u0001A\b\u0001\u000b\u0001\f\u0001B\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0004\u0002H\b\u0002\u000b\u0002\f\u0002I\u0001\u0002"+
		"\u0003\u0002M\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003S\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"X\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0004\u0004f\b\u0004\u000b\u0004\f\u0004g\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004n\b\u0004\u0001\u0005\u0001"+
		"\u0005\u0005\u0005r\b\u0005\n\u0005\f\u0005u\t\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0003\u0007\u0080\b\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003"+
		"\t\u008e\b\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u009d"+
		"\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0003\f\u00a7\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0003\u000e\u00b1\b\u000e\u0001\u000e\u0001"+
		"\u000e\u0003\u000e\u00b5\b\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0003"+
		"\u000f\u00ba\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0003\u0010\u00c1\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0003\u0011\u00c8\b\u0011\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u00cf\b\u0012\u0001\u0013\u0003"+
		"\u0013\u00d2\b\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u00d6\b\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0000\u0000\u0015\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(\u0000\u0005\u0001\u0000\u000b\f\u0001\u0000\u0013\u0015\u0001\u0000"+
		"\u000e\u000f\u0001\u0000\u0010\u0011\u0001\u0000 !\u00dd\u0000*\u0001"+
		"\u0000\u0000\u0000\u0002:\u0001\u0000\u0000\u0000\u0004L\u0001\u0000\u0000"+
		"\u0000\u0006N\u0001\u0000\u0000\u0000\bm\u0001\u0000\u0000\u0000\no\u0001"+
		"\u0000\u0000\u0000\fx\u0001\u0000\u0000\u0000\u000e\u007f\u0001\u0000"+
		"\u0000\u0000\u0010\u0081\u0001\u0000\u0000\u0000\u0012\u0086\u0001\u0000"+
		"\u0000\u0000\u0014\u0091\u0001\u0000\u0000\u0000\u0016\u0099\u0001\u0000"+
		"\u0000\u0000\u0018\u00a6\u0001\u0000\u0000\u0000\u001a\u00a8\u0001\u0000"+
		"\u0000\u0000\u001c\u00b0\u0001\u0000\u0000\u0000\u001e\u00b6\u0001\u0000"+
		"\u0000\u0000 \u00c0\u0001\u0000\u0000\u0000\"\u00c7\u0001\u0000\u0000"+
		"\u0000$\u00ce\u0001\u0000\u0000\u0000&\u00d1\u0001\u0000\u0000\u0000("+
		"\u00d7\u0001\u0000\u0000\u0000*+\u0005\u0001\u0000\u0000+,\u0005\r\u0000"+
		"\u0000,.\u0005\u001e\u0000\u0000-/\u0003\u0002\u0001\u0000.-\u0001\u0000"+
		"\u0000\u0000./\u0001\u0000\u0000\u0000/3\u0001\u0000\u0000\u000002\u0003"+
		"\u0006\u0003\u000010\u0001\u0000\u0000\u000025\u0001\u0000\u0000\u0000"+
		"31\u0001\u0000\u0000\u000034\u0001\u0000\u0000\u000046\u0001\u0000\u0000"+
		"\u000053\u0001\u0000\u0000\u000067\u0005\u0002\u0000\u000078\u0003\n\u0005"+
		"\u000089\u0005\u0003\u0000\u00009\u0001\u0001\u0000\u0000\u0000:@\u0005"+
		"\u0004\u0000\u0000;<\u0003\u0004\u0002\u0000<=\u0005\u001d\u0000\u0000"+
		"=>\u0003\f\u0006\u0000>?\u0005\u001e\u0000\u0000?A\u0001\u0000\u0000\u0000"+
		"@;\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000"+
		"\u0000BC\u0001\u0000\u0000\u0000C\u0003\u0001\u0000\u0000\u0000DM\u0005"+
		"\r\u0000\u0000EF\u0005\r\u0000\u0000FH\u0005\u001c\u0000\u0000GE\u0001"+
		"\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000"+
		"IJ\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KM\u0005\r\u0000\u0000"+
		"LD\u0001\u0000\u0000\u0000LG\u0001\u0000\u0000\u0000M\u0005\u0001\u0000"+
		"\u0000\u0000NO\u0005\u0005\u0000\u0000OP\u0005\r\u0000\u0000PR\u0005\u0016"+
		"\u0000\u0000QS\u0003\b\u0004\u0000RQ\u0001\u0000\u0000\u0000RS\u0001\u0000"+
		"\u0000\u0000ST\u0001\u0000\u0000\u0000TU\u0005\u0017\u0000\u0000UW\u0005"+
		"\u0018\u0000\u0000VX\u0003\u0002\u0001\u0000WV\u0001\u0000\u0000\u0000"+
		"WX\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000YZ\u0003\n\u0005\u0000"+
		"Z[\u0005\u0019\u0000\u0000[\\\u0005\u001e\u0000\u0000\\\u0007\u0001\u0000"+
		"\u0000\u0000]^\u0005\r\u0000\u0000^_\u0005\u001d\u0000\u0000_n\u0003\f"+
		"\u0006\u0000`a\u0005\r\u0000\u0000ab\u0005\u001d\u0000\u0000bc\u0003\f"+
		"\u0006\u0000cd\u0005\u001c\u0000\u0000df\u0001\u0000\u0000\u0000e`\u0001"+
		"\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000"+
		"gh\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ij\u0005\r\u0000\u0000"+
		"jk\u0005\u001d\u0000\u0000kl\u0003\f\u0006\u0000ln\u0001\u0000\u0000\u0000"+
		"m]\u0001\u0000\u0000\u0000me\u0001\u0000\u0000\u0000n\t\u0001\u0000\u0000"+
		"\u0000os\u0005\u001a\u0000\u0000pr\u0003\u000e\u0007\u0000qp\u0001\u0000"+
		"\u0000\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001"+
		"\u0000\u0000\u0000tv\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000"+
		"vw\u0005\u001b\u0000\u0000w\u000b\u0001\u0000\u0000\u0000xy\u0007\u0000"+
		"\u0000\u0000y\r\u0001\u0000\u0000\u0000z\u0080\u0003\u0010\b\u0000{\u0080"+
		"\u0003\u0012\t\u0000|\u0080\u0003\u0014\n\u0000}\u0080\u0003\u0016\u000b"+
		"\u0000~\u0080\u0003\u001a\r\u0000\u007fz\u0001\u0000\u0000\u0000\u007f"+
		"{\u0001\u0000\u0000\u0000\u007f|\u0001\u0000\u0000\u0000\u007f}\u0001"+
		"\u0000\u0000\u0000\u007f~\u0001\u0000\u0000\u0000\u0080\u000f\u0001\u0000"+
		"\u0000\u0000\u0081\u0082\u0005\r\u0000\u0000\u0082\u0083\u0005\u0012\u0000"+
		"\u0000\u0083\u0084\u0003\u001e\u000f\u0000\u0084\u0085\u0005\u001e\u0000"+
		"\u0000\u0085\u0011\u0001\u0000\u0000\u0000\u0086\u0087\u0005\t\u0000\u0000"+
		"\u0087\u0088\u0005\u0016\u0000\u0000\u0088\u0089\u0003\u001e\u000f\u0000"+
		"\u0089\u008a\u0005\u0017\u0000\u0000\u008a\u008d\u0003\n\u0005\u0000\u008b"+
		"\u008c\u0005\n\u0000\u0000\u008c\u008e\u0003\n\u0005\u0000\u008d\u008b"+
		"\u0001\u0000\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u008f"+
		"\u0001\u0000\u0000\u0000\u008f\u0090\u0005\u001e\u0000\u0000\u0090\u0013"+
		"\u0001\u0000\u0000\u0000\u0091\u0092\u0005\u0007\u0000\u0000\u0092\u0093"+
		"\u0003\n\u0005\u0000\u0093\u0094\u0005\b\u0000\u0000\u0094\u0095\u0005"+
		"\u0016\u0000\u0000\u0095\u0096\u0003\u001e\u000f\u0000\u0096\u0097\u0005"+
		"\u0017\u0000\u0000\u0097\u0098\u0005\u001e\u0000\u0000\u0098\u0015\u0001"+
		"\u0000\u0000\u0000\u0099\u009a\u0005\r\u0000\u0000\u009a\u009c\u0005\u0016"+
		"\u0000\u0000\u009b\u009d\u0003\u0018\f\u0000\u009c\u009b\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u009e\u0001\u0000\u0000"+
		"\u0000\u009e\u009f\u0005\u0017\u0000\u0000\u009f\u00a0\u0005\u001e\u0000"+
		"\u0000\u00a0\u0017\u0001\u0000\u0000\u0000\u00a1\u00a7\u0003\u001e\u000f"+
		"\u0000\u00a2\u00a3\u0003\u001e\u000f\u0000\u00a3\u00a4\u0005\u001c\u0000"+
		"\u0000\u00a4\u00a5\u0003\u0018\f\u0000\u00a5\u00a7\u0001\u0000\u0000\u0000"+
		"\u00a6\u00a1\u0001\u0000\u0000\u0000\u00a6\u00a2\u0001\u0000\u0000\u0000"+
		"\u00a7\u0019\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005\u0006\u0000\u0000"+
		"\u00a9\u00aa\u0005\u0016\u0000\u0000\u00aa\u00ab\u0003\u001c\u000e\u0000"+
		"\u00ab\u00ac\u0005\u0017\u0000\u0000\u00ac\u00ad\u0005\u001e\u0000\u0000"+
		"\u00ad\u001b\u0001\u0000\u0000\u0000\u00ae\u00b1\u0003\u001e\u000f\u0000"+
		"\u00af\u00b1\u0005\u001f\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000"+
		"\u00b0\u00af\u0001\u0000\u0000\u0000\u00b1\u00b4\u0001\u0000\u0000\u0000"+
		"\u00b2\u00b3\u0005\u001c\u0000\u0000\u00b3\u00b5\u0003\u001c\u000e\u0000"+
		"\u00b4\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000\u0000"+
		"\u00b5\u001d\u0001\u0000\u0000\u0000\u00b6\u00b9\u0003 \u0010\u0000\u00b7"+
		"\u00b8\u0007\u0001\u0000\u0000\u00b8\u00ba\u0003 \u0010\u0000\u00b9\u00b7"+
		"\u0001\u0000\u0000\u0000\u00b9\u00ba\u0001\u0000\u0000\u0000\u00ba\u001f"+
		"\u0001\u0000\u0000\u0000\u00bb\u00c1\u0003\"\u0011\u0000\u00bc\u00bd\u0003"+
		"\"\u0011\u0000\u00bd\u00be\u0007\u0002\u0000\u0000\u00be\u00bf\u0003 "+
		"\u0010\u0000\u00bf\u00c1\u0001\u0000\u0000\u0000\u00c0\u00bb\u0001\u0000"+
		"\u0000\u0000\u00c0\u00bc\u0001\u0000\u0000\u0000\u00c1!\u0001\u0000\u0000"+
		"\u0000\u00c2\u00c8\u0003$\u0012\u0000\u00c3\u00c4\u0003$\u0012\u0000\u00c4"+
		"\u00c5\u0007\u0003\u0000\u0000\u00c5\u00c6\u0003\"\u0011\u0000\u00c6\u00c8"+
		"\u0001\u0000\u0000\u0000\u00c7\u00c2\u0001\u0000\u0000\u0000\u00c7\u00c3"+
		"\u0001\u0000\u0000\u0000\u00c8#\u0001\u0000\u0000\u0000\u00c9\u00ca\u0005"+
		"\u0016\u0000\u0000\u00ca\u00cb\u0003\u001e\u000f\u0000\u00cb\u00cc\u0005"+
		"\u0017\u0000\u0000\u00cc\u00cf\u0001\u0000\u0000\u0000\u00cd\u00cf\u0003"+
		"&\u0013\u0000\u00ce\u00c9\u0001\u0000\u0000\u0000\u00ce\u00cd\u0001\u0000"+
		"\u0000\u0000\u00cf%\u0001\u0000\u0000\u0000\u00d0\u00d2\u0007\u0002\u0000"+
		"\u0000\u00d1\u00d0\u0001\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000\u0000"+
		"\u0000\u00d2\u00d5\u0001\u0000\u0000\u0000\u00d3\u00d6\u0005\r\u0000\u0000"+
		"\u00d4\u00d6\u0003(\u0014\u0000\u00d5\u00d3\u0001\u0000\u0000\u0000\u00d5"+
		"\u00d4\u0001\u0000\u0000\u0000\u00d6\'\u0001\u0000\u0000\u0000\u00d7\u00d8"+
		"\u0007\u0004\u0000\u0000\u00d8)\u0001\u0000\u0000\u0000\u0016.3BILRWg"+
		"ms\u007f\u008d\u009c\u00a6\u00b0\u00b4\u00b9\u00c0\u00c7\u00ce\u00d1\u00d5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}