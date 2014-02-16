
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

	export class NanoSourceSpan {
		
		public toObject(): any {
			return {
			//Doing the line and col fix here.
				"sp_begin": [this.file, this.start.line() + 1, this.start.character() + 1],
				"sp_end"  : [this.file, this.stop.line() + 1, this.stop.character() + 1]
			};
		}

		public toString(): string {
			return this.file + ": (" + (this.start.line() + 1) + ", " + (this.start.character() + 1) +
				") - (" + (this.stop.line() + 1) + ", " + (this.stop.character() + 1) + ")";
		}

		constructor(private file: string, private start: LineAndCharacter, private stop: LineAndCharacter) { }

	}


	/*****************************************************************************
	 *
	 *				AST Misc
	 * 
	 *****************************************************************************/

	export class NanoASTList<T extends NanoAST> extends NanoAST {
		constructor(public members: T[]) {
			super();
		}

		public toObject(): any {
			return this.members.map(m => m.toObject());
		}
	}

	export class NanoId extends NanoAST {

		constructor(public span: NanoSourceSpan, public ann: string, public id: string) {
			super();
		}

		public toObject(): any {
			return [
				[this.span.toObject(), null],
				this.id
			];
		}

	}

	export class NanoVarDecl extends NanoAST {

		public toObject(): any {
			return [
				[this.span.toObject(), null],
				this.x.toObject(),
				(this.exp) ? this.exp.toObject() : null
			];
		}

		constructor(public span: NanoSourceSpan, public ann: string, public x: NanoId, public exp?: NanoExpression) {
			super();
		}
	}

	export class NanoPropId extends NanoAST {

		public toObject(): any {
			return {
				PropId: [
					[this.span.toObject(), null],
					this.f.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public f: NanoId) {
			super();
		}
	}

	export class NanoPropString extends NanoAST {

		public toObject(): any {
			return {
				PropString: [
					[this.span.toObject(), null],
					this.s
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public s: string) {
			super();
		}
	}

	export class NanoPropNum extends NanoAST {

		public toObject(): any {
			return {
				PropNum: [
					[this.span.toObject(), null],
					this.n
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public n: number) {
			super();
		}
	}

	/*****************************************************************************
	 *
	 *				ForInit
	 * 
	 *****************************************************************************/


	export class NanoForInit extends NanoAST { }

	export class NanoNoInit extends NanoForInit {

		public toObject(): any {
			return { NoInit: [this.span.toObject(), null] };
		}

		constructor(public span: NanoSourceSpan, public ann: string) {
			super();
		}

	}

	export class NanoVarInit extends NanoForInit {

		public toObject(): any {
			return { VarInit: this.vds.toObject() };
		}

		constructor(public span: NanoSourceSpan, public ann: string, public vds: NanoASTList<NanoVarDecl>) {
			super();
		}

	}

	export class NanoExprInit extends NanoForInit {

		public toObject(): any {
			return {
				ExprInit: [
					[this.span.toObject(), null],
					this.exp.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public exp: NanoExpression) {
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
		OpAssign,
		OpAssignAdd
	}

	export class NanoAssignOp extends NanoAST {
		private _opKind: NanoAssignOpKind;

		private signToOpKind(): NanoAssignOpKind {
			switch (this.sign) {
				case "=": return NanoAssignOpKind.OpAssign;
				case "+=": return NanoAssignOpKind.OpAssignAdd;
			}
			throw new Error("Case: " + this.sign + " not handled in NanoAssignOp.signToOpKind");
		}

		public toObject() {
			var obj = {};
			obj[NanoAssignOpKind[this.signToOpKind()]] = [];
			return obj;
		}

		constructor(public sign: string) {
			super();
			this._opKind = this.signToOpKind();
		}
	}

	export enum NanoUnaryAssignOpKind {
		PrefixInc,
		PrefixDec,
		PostfixInc,
		PostfixDec
	}

	export class NanoUnaryAssignOp extends NanoAST {

		public toObject() {
			var op = {};
			op[NanoUnaryAssignOpKind[this.opKind]] = [];
			return op;
		}

		constructor(public opKind: NanoUnaryAssignOpKind) {
			super();
		}
	}

	export enum NanoPrefixOpKind {
		PrefixLNot,
		PrefixBNot,
		PrefixPlus,
		PrefixMinus,
		PrefixTypeof,
		PrefixVoid,
		PrefixDelete
	}
	
	export class NanoPrefixOp extends NanoAST {

		public toObject() {
			var op = {};
			op[NanoPrefixOpKind[this.opKind]] = [];
			return op;
		}

		constructor(public opKind: NanoPrefixOpKind) {
			super();
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
					[this.span.toObject(), null],
					this.s
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public s: string) {
			super();
		}
	}


	export class NanoLDot extends NanoLValue {

		public toObject(): any {
			return {
				LDot: [
					[this.span.toObject(), null],
					this.exp.toObject(),
					this.str
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public exp: NanoExpression, public str: string) {
			super();
		}
	}


	export class NanoLBracket extends NanoLValue {

		public toObject(): any {
			return {
				LBracket: [
					[this.span.toObject(), null],
					this.e1.toObject(),
					this.e1.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public e1: NanoExpression, public e2: NanoExpression) {
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
					[this.span.toObject(), null],
					this.op.toObject(),
					this.operand1.toObject(),
					this.operand2.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public op: NanoInfixOp, public operand1: NanoExpression, public operand2: NanoExpression) {
			super();
		}

	}

	export class NanoNumLit extends NanoExpression {

		public toObject() {
			return {
				NumLit: [
					[this.span.toObject(), null],
					this.num
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public num: number) {
			super();
		}

	}

	export class NanoIntLit extends NanoExpression {

		public toObject() {
			return {
				IntLit: [
					[this.span.toObject(), null],
					this.num
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public num: number) {
			super();
		}

	}



	export class NanoStringLit extends NanoExpression {

		public toObject() {
			return {
				StringLit: [
					[this.span.toObject(), null],
					//TODO: strings appear with '\"' in beginning and end
					this.str.toString()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public str: string) {
			super();
		}

	}



	export class NanoFuncExpr extends NanoExpression {

		public toObject() {
			return {
				FuncExpr: [
					[this.span.toObject(), null],
					(this.id) ? this.id.toObject() : null,
					this.args.toObject(),
					this.body.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public id: NanoId, public args: NanoASTList<NanoId>, public body: NanoASTList<NanoStatement>) {
			super();
		}
	}

	export class NanoVarRef extends NanoExpression {

		public toObject() {
			return {
				VarRef: [
					[this.span.toObject(), null],
					this.id.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public id: NanoId) {
			super();
		}
	}

	export class NanoDotRef extends NanoExpression {

		public toObject() {
			return {
				DotRef: [
					[this.span.toObject(), null],
					this.expression.toObject(),
					this.id.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public expression: NanoExpression, public id: NanoId) {
			super();
		}
	}

	export class NanoBracketRef extends NanoExpression {

		public toObject() {
			return {
				BracketRef: [
					[this.span.toObject(), null],
					this.e1.toObject(),
					this.e2.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public e1: NanoExpression, public e2: NanoExpression) {
			super();
		}
	}




	export class NanoCallExpr extends NanoExpression {

		public toObject() {
			return {
				CallExpr: [
					[this.span.toObject(), null],
					this.target.toObject(),
					this.args.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public target: NanoExpression, public args: NanoASTList<NanoExpression>) {
			super();
		}
	}


	export class NanoObjectLit extends NanoExpression {

		public toObject() {
			return {
				ObjectLit: [
					[this.span.toObject(), null],
					this.bindings.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public bindings: NanoASTList<INanoAST>) {
			super();
		}
	}


	export class NanoAssignExpr extends NanoExpression {

		public toObject() {
			return {
				AssignExpr: [
					[this.span.toObject(), null],
					this.assignOp.toObject(),
					this.lval.toObject(),
					this.expression.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public assignOp: NanoAssignOp, public lval: NanoLValue, public expression: NanoExpression) {
			super();
		}
	}

	export class NanoThisRef extends NanoExpression {

		public toObject() {
			return {
				ThisRef: [this.span.toObject(), null]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string) {
			super();
		}
		
	}

	export class NanoNullLit extends NanoExpression {

		public toObject() {
			return {
				NullLit: [this.span.toObject(), null]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string) {
			super();
		}
		
	}

	export class NanoBoolLit extends NanoExpression {

		public toObject() {
			return {
				BoolLit: [
					[this.span.toObject(), null],
					this.b
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public b: boolean) {
			super();
		}

	}

	export class NanoNewExpr extends NanoExpression {

		public toObject() {
			return {
				NewExpr: [
					[this.span.toObject(), null],
					this.e.toObject(),
					this.es.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public e: NanoExpression, public es: NanoASTList<NanoExpression>) {
			super();
		}

	}

	export class NanoSuperExpr extends NanoExpression {

		public toObject() {
			return {
				SuperExpr: [
					[this.span.toObject(), null],
					this.args.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public args: NanoASTList<NanoExpression>) {
			super();
		}

	}

	export class NanoUnaryAssignExpr extends NanoExpression {

		public toObject() {
			return {
				UnaryAssignExpr: [
					[this.span.toObject(), null],
					this.op.toObject(),
					this.lval.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public op: NanoUnaryAssignOp, public lval: NanoLValue) {
			super();
		}

	}

	export class NanoPrefixExpr extends NanoExpression {

		public toObject() {
			return {
				PrefixExpr: [
					[this.span.toObject(), null],
					this.op.toObject(),
					this.exp.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public op: NanoPrefixOp, public exp: NanoExpression) {
			super();
		}

	}



	/*****************************************************************************
	 *
	 *				Class Element
	 * 
	 *****************************************************************************/

	export class NanoClassElt extends NanoAST {

		public toObject(): any {
			throw new Error("NanoClassElt: child class should implement toJSON");
		}

	}

	export class NanoConstructor extends NanoClassElt {

		public toObject(): any {
			return {
				Constructor: [
					[this.span.toObject(), (this.ann) ? this.ann : null],
					(this.args) ? this.args.toObject() : null,
					this.body.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public /*Maybe*/ args: NanoASTList<NanoId>, public body: NanoASTList<NanoStatement>) {
			super();
		}
	}

	export class NanoMemberVarDecl extends NanoClassElt {

		public toObject(): any {
			return {
				MemberVarDecl: [
					[this.span.toObject(), null],
					this.mod,
					this.sta,
					this.vardecl.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public mod: boolean, public sta: boolean, public vardecl: NanoVarDecl) {
			super();
		}
	}

	export class NanoMemberMethDecl extends NanoClassElt {

		public toObject(): any {
			return {
				MemberMethDecl: [
					[this.span.toObject(), null],
					this.mod,
					this.sta,
					this.name.toObject(),
					this.args.toObject(),
					this.body.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public mod: boolean,
			public sta: boolean,
			public name: NanoId,
			public args: NanoASTList<NanoId>,
			public body: NanoASTList<NanoStatement>) {
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
			return { EmptyStmt: [this.span.toObject(), null] };
		}

		constructor(public span: NanoSourceSpan, public ann: string) {
			super();
		}
	}



	export class NanoExprStmt extends NanoStatement {

		public toObject(): any {
			return {
				ExprStmt: [
					[this.span.toObject(), null],
					this.exp.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public exp: NanoExpression) {
			super();
		}
	}

	export class NanoVarDeclStmt extends NanoStatement {

		public toObject(): any {
			return {
				VarDeclStmt: [
					[this.span.toObject(), null],
					this.varDecls.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public varDecls: NanoASTList<NanoVarDecl>) {
			super();
		}
	}

	export class NanoFunctionStmt extends NanoStatement {

		public toObject() {
			return {
				FunctionStmt: [
					[this.span.toObject(), (this.ann) ? this.ann : null],
					this.id.toObject(),
					this.args.toObject(),
					this.body.toObject()
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public id: NanoId, public args: NanoASTList<NanoId>, public body: NanoASTList<NanoStatement>) {
			super();
		}
	}

	export class NanoReturnStmt extends NanoStatement {

		public toObject() {
			return {
				ReturnStmt: [
					[this.span.toObject(), null],
					(this.expression) ? this.expression.toObject() : null
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public expression: NanoExpression) {
			super();
		}
	}

	export class NanoBlockStmt extends NanoStatement {

		public toObject() {
			return {
				BlockStmt: [
					[this.span.toObject(), null],
					this.body.toObject() 
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, public body: NanoASTList<NanoStatement>) {
			super();
		}
	}

	export class NanoClassStmt extends NanoStatement {

		public toObject() {
			return {
				ClassStmt: [
					[this.span.toObject(), null],
					this.id.toObject(),
					(this.extendsClass) ? this.extendsClass.toObject() : null,
					this.implementsInterfaces.toObject(),
					this.body.toObject() 
				]
			};
		}
		
		constructor(public span: NanoSourceSpan, public ann: string, 
			public id: NanoId,
			public extendsClass/* Maybe */: NanoId,
			public implementsInterfaces: NanoASTList<NanoId>,
			public body: NanoASTList<NanoClassElt>) {
			super();
		}
	}

	export class NanoWhileStmt extends NanoStatement {

		public toObject() {
			return {
				WhileStmt: [
					[this.span.toObject(), null],
					this.exp.toObject(),
					this.body.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public exp: NanoExpression, public body: NanoStatement) {
			super();
		}
	}

	export class NanoForStmt extends NanoStatement {

		public toObject() {
			return {
				ForStmt: [
					[this.span.toObject(), null],
					(this.init) ? this.init.toObject() : null,
					(this.test) ? this.test.toObject() : null,
					this.inc.toObject(),
					this.body.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public init: NanoForInit, /*Maybe*/ public test: NanoExpression,
			/*Maybe*/ public inc: NanoExpression, public body: NanoStatement) {
			super();
		}
	}

	export class NanoIfStmt extends NanoStatement {

		public toObject() {
			return {
				IfStmt: [
					[this.span.toObject(), null],
					this.cond.toObject(),
					this.s1.toObject(),
					this.s2.toObject()
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public cond: NanoExpression, public s1: NanoStatement, public s2: NanoStatement) {
			super();
		}
	}

	export class NanoIfSingleStmt extends NanoStatement {

		public toObject() {
			return {
				IfSingleStmt: [
					[this.span.toObject(), null],
					this.cond.toObject(),
					this.s.toObject(),
				]
			};
		}

		constructor(public span: NanoSourceSpan, public ann: string, public cond: NanoExpression, public s: NanoStatement) {
			super();
		}
	}

}
