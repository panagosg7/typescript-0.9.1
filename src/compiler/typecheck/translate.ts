
///<reference path='..\typescript.ts' />

module TypeScript {

	export interface NJSType {
		toString(): string;
	}

	export class BoundedNJSType {

		constructor(private symbol: string, private type: NJSType) { }

		public toString() {
			return this.symbol + ": " + this.type.toString();
		}

	}

	export class TError implements NJSType {
		constructor(private msg: string) { }

		public toString(): string {
			return "Error type: " + this.msg;
		}	

	}

	export class TAnyC implements NJSType {
			
		public toString(): string {
			return "top";
		}

	}

	export var TAny = new TAnyC();

	export class TNumberC implements NJSType {

		public toString(): string {
			return "number";
		}

	}

	export var TNumber = new TNumberC();

	export class TStringC implements NJSType {

		public toString(): string {
			return "string";
		}

	}

	export var TString = new TStringC();

	export class TBooleanC implements NJSType {

		public toString(): string {
			return "boolean";
		}

	}

	export var TBoolean = new TBooleanC();

	export class TField {
		constructor(public symbol: string, public type: NJSType) {}
	}


	export class TObject implements NJSType {

		constructor(public fields: TField[]) { } 

		public toString(): string {
			var s = "";
			s += "{ "; 
			s += this.fields.map(f => (f.symbol + ": " + f.type.toString())).join(", ");
			s += " }";
			return s;
		}

	}

	export class TFunction implements NJSType {

		constructor(private tParams: TTypeParam[], private argTs: BoundedNJSType[], private returnT: NJSType) { }

		public toString(): string {
			var s = "";
			if (this.tParams.length > 0) {
				s += "forall " + this.tParams.map(p => p.toString()).join(" ") + " . ";
			}
			s += "( ";
			s += this.argTs.map(b => b.toString()).join(", ");
			s += " ) => ";
			s += this.returnT.toString();
			return s;
		}

	}

	export class TArray implements NJSType {

		constructor(private eltT: NJSType) { }

		public toString(): string {
			return "[ " + this.eltT.toString() + " ]"; 
		}

	}

	export class TTypeReference implements NJSType {

		constructor(private name: string, private params: NJSType[]) { }

		public toString(): string {
			return this.name + " [ " + this.params.map(t => t.toString()).join(", ") + " ]"; 
		}

	}

	export class TTypeParam {
		constructor(public name: string) { }

		public toString(): string {
			return this.name;
		}
	}


	/******************************************************************************
	
			Translation of TS program to NanoJS 

	******************************************************************************/

	export class Translator {


		constructor(private resolver: PullTypeResolver) { }

		public annotate(ast: AST): void {

			walkAST(ast, this.getAnnCallBack(this.resolver));

		}

		private getAnnCallBack(resolver: PullTypeResolver) {
			return function(path: AstPath, walker: IAstWalker) {
				var ast: AST = path.ast();
				if (!ast) return;

				var nodeType = ast.nodeType();

				switch (nodeType) {
					//case NodeType.List:
					//case NodeType.Script:
					//case NodeType.ModuleDeclaration:
					//case NodeType.InterfaceDeclaration:
					//case NodeType.ClassDeclaration:
					//case NodeType.VariableDeclaration:
					//case NodeType.VariableDeclarator:
					//case NodeType.Parameter:
					//case NodeType.TypeParameter:
					//case NodeType.ImportDeclaration:
					//case NodeType.ObjectLiteralExpression:
					//case NodeType.GenericType:
					//case NodeType.Name:
					//case NodeType.MemberAccessExpression:
					//case NodeType.GenericType:
					case NodeType.FunctionDeclaration:
						var func = <FunctionDeclaration>ast;
						var decl: PullDecl = resolver.getDeclForAST(ast);
						var type: PullTypeSymbol = decl.getSymbol().type;
						if (type == null) {
							throw Error("Function Declaration has no type");
						}


						var nJSType = type.toNJSType();
						//console.log(func.decl.name + " :tsc: " + type.toString());
						//console.log(func.decl.name + " :NJS: " + nJSType.toString());
						//console.log(func.arguments.members.map(a => (<Parameter>a).symbol));
						//console.log();
						//func.setTypeAnnotation(nJSType);
						break;
					//case NodeType.ArrayLiteralExpression:
					//case NodeType.ThisExpression:
					//case NodeType.SuperExpression:
					//case NodeType.InvocationExpression:
					//case NodeType.ObjectCreationExpression:
					//case NodeType.CastExpression:
					//case NodeType.TypeRef:
					//case NodeType.ExportAssignment:
					//case NodeType.NumericLiteral:
					//case NodeType.StringLiteral:
					//case NodeType.NullLiteral:
					//case NodeType.TrueLiteral:
					//case NodeType.FalseLiteral:
					//case NodeType.VoidExpression:
					//case NodeType.AssignmentExpression:
					//case NodeType.LogicalNotExpression:
					//case NodeType.NotEqualsWithTypeConversionExpression:
					//case NodeType.EqualsWithTypeConversionExpression:
					//case NodeType.EqualsExpression:
					//case NodeType.NotEqualsExpression:
					//case NodeType.LessThanExpression:
					//case NodeType.LessThanOrEqualExpression:
					//case NodeType.GreaterThanOrEqualExpression:
					//case NodeType.GreaterThanExpression:
					//case NodeType.AddExpression:
					//case NodeType.AddAssignmentExpression:
					//case NodeType.PlusExpression:
					//case NodeType.NegateExpression:
					//case NodeType.BitwiseNotExpression:
					//case NodeType.PostIncrementExpression:
					//case NodeType.PreIncrementExpression:
					//case NodeType.PostDecrementExpression:
					//case NodeType.PreDecrementExpression:
					//case NodeType.SubtractExpression:
					//case NodeType.MultiplyExpression:
					//case NodeType.DivideExpression:
					//case NodeType.ModuloExpression:
					//case NodeType.BitwiseOrExpression:
					//case NodeType.BitwiseAndExpression:
					//case NodeType.LeftShiftExpression:
					//case NodeType.SignedRightShiftExpression:
					//case NodeType.UnsignedRightShiftExpression:
					//case NodeType.BitwiseExclusiveOrExpression:
					//case NodeType.ExclusiveOrAssignmentExpression:
					//case NodeType.LeftShiftAssignmentExpression:
					//case NodeType.SignedRightShiftAssignmentExpression:
					//case NodeType.UnsignedRightShiftAssignmentExpression:
					//case NodeType.SubtractAssignmentExpression:
					//case NodeType.MultiplyAssignmentExpression:
					//case NodeType.DivideAssignmentExpression:
					//case NodeType.ModuloAssignmentExpression:
					//case NodeType.OrAssignmentExpression:
					//case NodeType.AndAssignmentExpression:
					//case NodeType.ElementAccessExpression:
					//case NodeType.LogicalOrExpression:
					//case NodeType.LogicalAndExpression:
					//case NodeType.TypeOfExpression:
					//case NodeType.ThrowStatement:
					//case NodeType.DeleteExpression:
					//case NodeType.ConditionalExpression:
					//case NodeType.RegularExpressionLiteral:
					//case NodeType.ParenthesizedExpression:
					//case NodeType.ExpressionStatement:
					//case NodeType.InstanceOfExpression:
					//case NodeType.CommaExpression:
					//case NodeType.InExpression:
					//case NodeType.ForStatement:
					//case NodeType.ForInStatement:
					//case NodeType.WhileStatement:
					//case NodeType.DoStatement:
					//case NodeType.IfStatement:
					//case NodeType.Block:
					//case NodeType.VariableStatement:
					//case NodeType.WithStatement:
					//case NodeType.TryStatement:
					//case NodeType.CatchClause:
					//case NodeType.ReturnStatement:
					//case NodeType.SwitchStatement:
					//case NodeType.CaseClause:
					//case NodeType.LabeledStatement:
				}
			}

		}

	}


}