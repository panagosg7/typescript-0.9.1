
///<reference path='typescript.ts' />

module TypeScript {

	export interface INanoAST {
		toObject(): any;		
	}

	export function nanoStringify(ast: NanoAST): string {
		return JSON.stringify(ast.toObject(), undefined, 2);
	}

	export class NanoAST implements INanoAST {

		public toObject(): any {
			throw new Error("NanoAST: child class should implement toObject");
		}

	}

	var dummySourceSpan = {
		"sp_begin": ["FILE", 1, 2],
		"sp_end": ["FILE", 3, 4]
	};

	/*****************************************************************************
	 *
	 *				AST Misc
	 * 
	 *****************************************************************************/

	export class NanoASTList extends NanoAST {
		constructor(public members: NanoAST[]) {
			super();
		}

		public toObject(): any {
			return this.members.map(m => m.toObject());
		}
	}

	export class NanoId extends NanoAST {

		constructor(public id: string) {
			super();
		}

		public toObject(): any {
			return [
				dummySourceSpan,
				this.id
			];
		}

	}

	export class NanoVarDecl extends NanoAST {

		public toObject(): any {
			return [
				dummySourceSpan,
				this.x.toObject(),
				(this.exp) ? this.exp.toObject() : null
			];
		}

		constructor(public x: NanoId, public exp?: NanoExpression) {
			super();
		}
	}

	export class NanoPropId extends NanoAST {

		public toObject(): any {
			return {
				PropId: [
					dummySourceSpan,
					this.f.toObject()
				]
			};
		}

		constructor(public f: NanoId) {
			super();
		}
	}

	export class NanoPropString extends NanoAST {

		public toObject(): any {
			return {
				PropString: [
					dummySourceSpan,
					this.s
				]
			};
		}

		constructor(public s: string) {
			super();
		}
	}

	export class NanoPropNum extends NanoAST {

		public toObject(): any {
			return {
				PropNum: [
					dummySourceSpan,
					this.n
				]
			};
		}

		constructor(public n: number) {
			super();
		}
	}





	/*****************************************************************************
	 *
	 *				Operators
	 * 
	 *****************************************************************************/

	export enum NanoInfixOpKind {
		OpLT
		, OpLEq
		, OpGT
		, OpGEq
		, OpIn
		, OpInstanceof
		, OpEq
		, OpNEq
		, OpStrictEq
		, OpStrictNEq
		, OpLAnd
		, OpLOr
		, OpMul
		, OpDiv
		, OpMod
		, OpSub
		, OpLShift
		, OpSpRShift
		, OpZfRShift
		, OpBAnd
		, OpBXor
		, OpBOr
		, OpAdd			
	}

	export class NanoInfixOp extends NanoAST {
		private _opKind: NanoInfixOpKind;

		private signToOpKind(): NanoInfixOpKind {
			switch (this.sign) {
				case "<": return NanoInfixOpKind.OpLT;
				case "<=": return NanoInfixOpKind.OpLEq;
				case ">": return NanoInfixOpKind.OpGT;
				case ">=": return NanoInfixOpKind.OpGEq;
				case "in": return NanoInfixOpKind.OpIn;
				case "instanceof": return NanoInfixOpKind.OpInstanceof;
				case "==": return NanoInfixOpKind.OpEq;
				case "!=": return NanoInfixOpKind.OpNEq;
				case "===": return NanoInfixOpKind.OpStrictEq;
				case "!===": return NanoInfixOpKind.OpStrictNEq;
				case "&&": return NanoInfixOpKind.OpLAnd;
				case "||": return NanoInfixOpKind.OpLOr;
				case "*": return NanoInfixOpKind.OpMul;
				case "/": return NanoInfixOpKind.OpDiv;
				case "%": return NanoInfixOpKind.OpMod;
				case "-": return NanoInfixOpKind.OpSub;
				case "<<": return NanoInfixOpKind.OpLShift;
				case ">>": return NanoInfixOpKind.OpSpRShift;
				case ">>>": return NanoInfixOpKind.OpZfRShift;
				case "&": return NanoInfixOpKind.OpBAnd;
				case "^": return NanoInfixOpKind.OpBXor;
				case "|": return NanoInfixOpKind.OpBOr;
				case "+": return NanoInfixOpKind.OpAdd;
			}
			throw new Error("Case: " + this.sign + " not handled in NanoInfixOp.signToOpKind");
		}

		public toObject() {
			var obj = {};
			obj[NanoInfixOpKind[this.signToOpKind()]] = [];
			return obj;
		}

		constructor(public sign: string) {
			super();
			this._opKind = this.signToOpKind();
		}
	}


	export enum NanoAssignOpKind {
		OpAssign
	}

	export class NanoAssignOp extends NanoAST {
		private _opKind: NanoAssignOpKind;

		private signToOpKind(): NanoAssignOpKind {
			switch (this.sign) {
				case "=": return NanoAssignOpKind.OpAssign;
			}
			throw new Error("Case: " + this.sign + " not handled in NanoAssignOp.signToOpKind");
		}

		public toObject() {
			var obj = {};
			obj[NanoAssignOpKind[this.signToOpKind()]] = [];
			console.log(obj);
			return obj;
		}

		constructor(public sign: string) {
			super();
			this._opKind = this.signToOpKind();
		}
	}


	/*****************************************************************************
	 *
	 *				LValue
	 * 
	 *****************************************************************************/


	export class NanoLValue extends NanoAST {

	}

	export class NanoLVar extends NanoLValue {

		public toObject(): any {
			return {
				LVar: [
					dummySourceSpan,
					this.s
				]
			};
		}

		constructor(public s: string) {
			super();
		}
	}


	export class NanoLDot extends NanoLValue {

		public toObject(): any {
			return {
				LDot: [
					dummySourceSpan,
					this.exp.toObject(),
					this.str
				]
			};
		}

		constructor(public exp: NanoExpression, public str: string) {
			super();
		}
	}


	export class NanoLBracket extends NanoLValue {

		public toObject(): any {
			return {
				LBracket: [
					dummySourceSpan,
					this.e1.toObject(),
					this.e1.toObject()
				]
			};
		}

		constructor(public e1: NanoExpression, public e2: NanoExpression) {
			super();
		}
	}



	/*****************************************************************************
	 *
	 *				Expression
	 * 
	 *****************************************************************************/

	export class NanoExpression extends NanoAST {

	}

	export class NanoInfixExpr extends NanoExpression {

		public toObject() {
			return {
				InfixExpr: [
					dummySourceSpan,
					this.op.toObject(),
					this.operand1.toObject(),
					this.operand2.toObject()
				]
			};
		}

		constructor(public op: NanoInfixOp, public operand1: NanoExpression, public operand2: NanoExpression) {
			super();
		}

	}

	export class NanoNumLit extends NanoExpression {

		public toObject() {
			return {
				NumLit: [
					dummySourceSpan,
					this.num
				]
			};
		}

		constructor(public num: number) {
			super();
		}

	}

	export class NanoStringLit extends NanoExpression {

		public toObject() {
			return {
				StringLit: [
					dummySourceSpan,
					this.str
				]
			};
		}

		constructor(public str: string) {
			super();
		}

	}



	export class NanoFuncExpr extends NanoExpression {

		public toObject() {
			return {
				FuncExpr: [
					dummySourceSpan,
					(this.id) ? this.id.toObject() : null,
					this.args.toObject(),
					this.body.toObject()
				]
			};
		}
		
		constructor(public id: NanoId, public args: NanoASTList, public body: NanoASTList) {
			super();
		}
	}

	export class NanoVarRef extends NanoExpression {

		public toObject() {
			return {
				VarRef: [
					dummySourceSpan,
					this.id.toObject()
				]
			};
		}
		
		constructor(public id: NanoId) {
			super();
		}
	}

	export class NanoDotRef extends NanoExpression {

		public toObject() {
			return {
				DotRef: [
					dummySourceSpan,
					this.expression.toObject(),
					this.id.toObject()
				]
			};
		}
		
		constructor(public expression: NanoExpression, public id: NanoId) {
			super();
		}
	}



	export class NanoCallExpr extends NanoExpression {

		public toObject() {
			return {
				CallExpr: [
					dummySourceSpan,
					this.target.toObject(),
					this.args.toObject()
				]
			};
		}
		
		constructor(public target: NanoExpression, public args: NanoASTList) {
			super();
		}
	}


	export class NanoObjectLit extends NanoExpression {

		public toObject() {
			return {
				ObjectLit: [
					dummySourceSpan,
					this.bindings.toObject()
				]
			};
		}
		
		constructor(public bindings: NanoASTList) {
			super();
		}
	}


	export class NanoAssignExpr extends NanoExpression {

		public toObject() {
			return {
				AssignExpr: [
					dummySourceSpan,
					this.assignOp.toObject(),
					this.lval.toObject(),
					this.expression.toObject()
				]
			};
		}
		
		constructor(public assignOp: NanoAssignOp, public lval: NanoLValue, public expression: NanoExpression) {
			super();
		}
	}



	/*****************************************************************************
	 *
	 *				Statement
	 * 
	 *****************************************************************************/

	export class NanoStatement extends NanoAST {

		public toObject(): any {
			throw new Error("NanoStatement: child class should implement toJSON");
		}

	}
	export class NanoEmptyStmt extends NanoStatement {

		public toObject(): any {
			return { EmptyStmt: dummySourceSpan };
		}

		constructor() {
			super();
		}
	}



	export class NanoExprStmt extends NanoStatement {

		public toObject(): any {
			return {
				ExprStmt: [
					dummySourceSpan,
					this.exp.toObject()
				]
			};
		}

		constructor(public exp: NanoExpression) {
			super();
		}
	}

	export class NanoVarDeclStmt extends NanoStatement {

		public toObject(): any {
			return {
				VarDeclStmt: [
					dummySourceSpan,
					this.varDecls.toObject()
				]
			};
		}

		constructor(public varDecls: NanoASTList) {
			super();
		}
	}

	export class NanoFuncStmt extends NanoStatement {

		public toObject() {
			return {
				FunctionStmt: [
					dummySourceSpan,
					this.id.toObject(),
					this.args.toObject(),
					this.body.toObject()
				]
			};
		}
		
		constructor(public id: NanoId, public args: NanoASTList, public body: NanoASTList) {
			super();
		}
	}

	export class NanoReturnStmt extends NanoStatement {

		public toObject() {
			return {
				ReturnStmt: [
					dummySourceSpan,
					(this.expression) ? this.expression.toObject() : null
				]
			};
		}
		
		constructor(public expression: NanoExpression) {
			super();
		}
	}

	export class NanoBlockStmt extends NanoStatement {

		public toObject() {
			return {
				BlockStmt: [
					dummySourceSpan,
					this.body.toObject() 
				]
			};
		}
		
		constructor(public body: NanoASTList) {
			super();
		}
	}





}
