
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

	/*****************************************************************************
	 *
	 *				Operators
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
		}

		public toObject() {
			return {
				InfixOp: "defaultSpan",
				kind: NanoInfixOpKind[this.signToOpKind()]
			};
		}

		constructor(public sign: string) {
			super();
			this._opKind = this.signToOpKind();
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
				InfixExpr: "defaultSpan",
				op: this.op.toObject(),
				operand1: this.operand1.toObject(),
				operand2: this.operand2.toObject()				
			};
		}

		constructor(public op: NanoInfixOp, public operand1: NanoExpression, public operand2: NanoExpression) {
			super();
		}

	}

	export class NanoNumLit extends NanoExpression {

		public toObject() {
			return {
				NumLit: "defaultSpan",
				num: this.num
			};
		}

		constructor(public num: number) {
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

	export class NanoExprStmt extends NanoStatement {

		public toObject(): any {
			return {
				ExprStmt: "defaultSpan",
				expr: this.exp.toObject()
			};
		}

		constructor(public exp: NanoExpression) {
			super();
		}
	}


}
