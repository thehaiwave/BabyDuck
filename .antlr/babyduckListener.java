// Generated from /Users/brt/Documents/parser/XDD/babyduck.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link babyduckParser}.
 */
public interface babyduckListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link babyduckParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(babyduckParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(babyduckParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#vars}.
	 * @param ctx the parse tree
	 */
	void enterVars(babyduckParser.VarsContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#vars}.
	 * @param ctx the parse tree
	 */
	void exitVars(babyduckParser.VarsContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(babyduckParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(babyduckParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#funcs}.
	 * @param ctx the parse tree
	 */
	void enterFuncs(babyduckParser.FuncsContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#funcs}.
	 * @param ctx the parse tree
	 */
	void exitFuncs(babyduckParser.FuncsContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#body}.
	 * @param ctx the parse tree
	 */
	void enterBody(babyduckParser.BodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#body}.
	 * @param ctx the parse tree
	 */
	void exitBody(babyduckParser.BodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(babyduckParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(babyduckParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssign(babyduckParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssign(babyduckParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(babyduckParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(babyduckParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(babyduckParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(babyduckParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#exp}.
	 * @param ctx the parse tree
	 */
	void enterExp(babyduckParser.ExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#exp}.
	 * @param ctx the parse tree
	 */
	void exitExp(babyduckParser.ExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(babyduckParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(babyduckParser.TerminoContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(babyduckParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(babyduckParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#cte}.
	 * @param ctx the parse tree
	 */
	void enterCte(babyduckParser.CteContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#cte}.
	 * @param ctx the parse tree
	 */
	void exitCte(babyduckParser.CteContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#cycle}.
	 * @param ctx the parse tree
	 */
	void enterCycle(babyduckParser.CycleContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#cycle}.
	 * @param ctx the parse tree
	 */
	void exitCycle(babyduckParser.CycleContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#f_call}.
	 * @param ctx the parse tree
	 */
	void enterF_call(babyduckParser.F_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#f_call}.
	 * @param ctx the parse tree
	 */
	void exitF_call(babyduckParser.F_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link babyduckParser#print}.
	 * @param ctx the parse tree
	 */
	void enterPrint(babyduckParser.PrintContext ctx);
	/**
	 * Exit a parse tree produced by {@link babyduckParser#print}.
	 * @param ctx the parse tree
	 */
	void exitPrint(babyduckParser.PrintContext ctx);
}