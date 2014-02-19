//
// Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

///<reference path='typescript.ts' />

module TypeScript {
    export interface IASTSpan {
        minChar: number;
        limChar: number;
        trailingTriviaWidth: number;
    }

    export class ASTSpan implements IASTSpan {
        public minChar: number = -1;  // -1 = "undefined" or "compiler generated"
        public limChar: number = -1;  // -1 = "undefined" or "compiler generated"
        public trailingTriviaWidth = 0;
    }

    var astID = 0;

    export function structuralEqualsNotIncludingPosition(ast1: AST, ast2: AST): boolean {
        return structuralEquals(ast1, ast2, false);
    }

    export function structuralEqualsIncludingPosition(ast1: AST, ast2: AST): boolean {
        return structuralEquals(ast1, ast2, true);
    }

    function structuralEquals(ast1: AST, ast2: AST, includingPosition: boolean): boolean {
        if (ast1 === ast2) {
            return true;
        }

        return ast1 !== null && ast2 !== null &&
               ast1.nodeType() === ast2.nodeType() &&
               ast1.structuralEquals(ast2, includingPosition);
    }

    function astArrayStructuralEquals(array1: AST[], array2: AST[], includingPosition: boolean): boolean {
        return ArrayUtilities.sequenceEquals(array1, array2,
            includingPosition ? structuralEqualsIncludingPosition : structuralEqualsNotIncludingPosition);
    }



	//NanoJS - begin
	var document: Document = null;
	export function setASTDocument(doc: Document) {
		document = doc;		
	}

	var semInfoChain: SemanticInfoChain = null;
	export function setASTSemInfoChain(sic: SemanticInfoChain) {
		semInfoChain = sic;
	}
	//NanoJS - end


    export interface IAST extends IASTSpan {
		nodeType(): NodeType;
		astID: number;
		astIDString: string;
		getLength(): number;

		toNanoAST(): NanoAST;
		toNanoExp(): NanoExpression;
		toNanoStmt(): NanoStatement;
		toNanoLValue(): NanoLValue;
		toNanoClassElt(): NanoClassElt;
		toNanoForInit(): NanoForInit;
		toNanoVarDecl(anns: NanoBindAnnotation[]): NanoVarDecl;

    }

	export class AST implements IAST {
		public minChar: number = -1;  // -1 = "undefined" or "compiler generated"
		public limChar: number = -1;  // -1 = "undefined" or "compiler generated"
		public trailingTriviaWidth = 0;

		private _flags = ASTFlags.None;

		public typeCheckPhase = -1;
		public astIDString: string = astID.toString();
		public astID: number = astID++;

		// These are used to store type resolution information directly on the AST, rather than
		// within a data map, if the useDirectTypeStorage flag is set
		public symbol: PullSymbol = null;
		public aliasSymbol: PullSymbol = null;
		public decl: PullDecl = null;

		private _preComments: Comment[] = null;
		private _postComments: Comment[] = null;
		private _docComments: Comment[] = null;

		constructor() {
		}

		public nodeType(): NodeType {
			throw Errors.abstract();
		}

		public isStatement() {
			return false;
		}

		public preComments(): Comment[] {
			return this._preComments;
		}

		public postComments(): Comment[] {
			return this._postComments;
		}

		public setPreComments(comments: Comment[]) {
			if (comments && comments.length) {
				this._preComments = comments;
			}
			else if (this._preComments) {
				this._preComments = null;
			}
		}

		public setPostComments(comments: Comment[]) {
			if (comments && comments.length) {
				this._postComments = comments;
			}
			else if (this._postComments) {
				this._postComments = null;
			}
		}

		public shouldEmit(): boolean {
			return true;
		}

		public getFlags(): ASTFlags {
			return this._flags;
		}

		// Must only be called from SyntaxTreeVisitor
		public setFlags(flags: ASTFlags): void {
			this._flags = flags;
		}

		public getLength(): number {
			return this.limChar - this.minChar;
		}

		//public getID(): number {
		//    var result = this.astID;
		//    if (result === -1) {
		//        result = astID++;
		//        this.astID = result;
		//    }

		//    return result;
		//}

		public isDeclaration() { return false; }

		public emit(emitter: Emitter) {
			emitter.emitComments(this, true);
			emitter.recordSourceMappingStart(this);
			this.emitWorker(emitter);
			emitter.recordSourceMappingEnd(this);
			emitter.emitComments(this, false);
		}

		public emitWorker(emitter: Emitter) {
			throw Errors.abstract();
		}

		public docComments(): Comment[] {
			if (!this.isDeclaration() || !this.preComments() || this.preComments().length === 0) {
				return [];
			}

			if (!this._docComments) {
				var preComments = this.preComments();
				var preCommentsLength = preComments.length;
				var docComments = new Array<Comment>();
				for (var i = preCommentsLength - 1; i >= 0; i--) {
					if (preComments[i].isDocComment()) {
						docComments.push(preComments[i]);
						continue;
					}
					break;
				}

				this._docComments = docComments.reverse();
			}

			return this._docComments;
		}

		public structuralEquals(ast: AST, includingPosition: boolean): boolean {
			if (includingPosition) {
				if (this.minChar !== ast.minChar || this.limChar !== ast.limChar) {
					return false;
				}
			}

			return this._flags === ast._flags &&
				astArrayStructuralEquals(this.preComments(), ast.preComments(), includingPosition) &&
				astArrayStructuralEquals(this.postComments(), ast.postComments(), includingPosition);
		}

		//NanoJS - begin
		public toNanoAST(): NanoAST {
			throw new Error("toNanoAST not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoExp(): NanoExpression {
			throw new Error("toNanoExp not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoStmt(): NanoStatement {
			throw new Error("toNanoStmt not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoMemList(): NanoASTList<NanoAST> {
			throw new Error("toNanoMemList not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoLValue(): NanoLValue {
			throw new Error("toNanoLValue not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoClassElt(): NanoClassElt {
			throw new Error("toNanoClassElt not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoForInit(): NanoForInit {
			throw new Error("toNanoForInit not implemented for " + NodeType[this.nodeType()]);
		}

		public toNanoVarDecl(anns: NanoBindAnnotation[]): NanoVarDecl {
			throw new Error("toNanoVarDecl not implemented for " + NodeType[this.nodeType()]);
		}

		public getSourceSpan(): NanoSourceSpan {
			if (document) {
			//Adjusting the line and column in NanoSourceSpan
				var startLineAndChar = document.lineMap.getLineAndCharacterFromPosition(this.minChar);
				var stopLineAndChar = document.lineMap.getLineAndCharacterFromPosition(this.limChar);
				return new NanoSourceSpan(document.fileName, startLineAndChar, stopLineAndChar);
			}
			console.log("Something went wrong with the lineMap.");
			process.exit(1);
		}

    /** Returns annotations of the current AST node */
		public getNanoAnnotations(): NanoAnnotation[] {
			var annStrings: string[] = [];
			var pre = this.preComments();
			if (pre) {
				pre.forEach((p: Comment) => {
					//Kill the end-of-line
					var s = p.text.join(" ");
					var t = s.match("/\*@(([^])*)\\*/");
					if (t && t[1]) {
						annStrings = annStrings.concat([t[1]]);
					}
				});
			}
			//TODO: possibly add check for multiple annotations on a single FunctionStmt etc.
			return annStrings.map(s => NanoAnnotation.createAnnotation(s));
		}

    /** Returns all annotations (recursively) of the AST rooted at the current node */
		public getAllNanoAnnotations(): NanoAnnotation[] {
			var annots: NanoAnnotation[] = [];
			TypeScript.getAstWalkerFactory().walk(this, function (cur: AST, parent: AST, walker: IAstWalker) {
				annots = annots.concat(cur.getNanoAnnotations());
				return cur;
			});
			return annots;
		}

		public getAllComments(): Comment[]{
			var cmnts: Comment[] = [];
			TypeScript.getAstWalkerFactory().walk(this, function (cur: AST, parent: AST, walker: IAstWalker) {
				if (cur.preComments())
					cmnts = cmnts.concat(cur.preComments());
				return cur;
			});
			return cmnts;
		}
		
		//NanoJS - end

   }

    export class ASTList extends AST {
        constructor(public members: AST[], public separatorCount?: number) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.List;
        }

        public emit(emitter: Emitter) {
            emitter.recordSourceMappingStart(this);
            emitter.emitModuleElements(this);
            emitter.recordSourceMappingEnd(this);
        }

        public structuralEquals(ast: ASTList, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   astArrayStructuralEquals(this.members, ast.members, includingPosition);
        }

		//NanoJS - begin
		public toNanoAST(): NanoASTList<NanoAST> {
			return new NanoASTList(this.members.map(m => m.toNanoAST()));
		}

		public toNanoExp(): NanoASTList<NanoExpression> {
			return new NanoASTList(this.members.map(m => m.toNanoExp()));
		}

		public toNanoStmt(): NanoASTList<NanoExpression> {
			return new NanoASTList(this.members.map(m => m.toNanoStmt()));
		}

		public toNanoMemList(): NanoASTList<NanoAST> {
			return new NanoASTList(this.members.map(m => m.toNanoMemList()));
		}

		public toNanoClassElt(): NanoASTList<NanoClassElt> {
			return new NanoASTList(this.members.map(m => m.toNanoClassElt()));
		}

		public toNanoVarDecl(anns: NanoBindAnnotation[]): NanoASTList<NanoVarDecl> {
			return new NanoASTList(this.members.map(m => m.toNanoVarDecl(anns)));
		}
		//NanoJS - end

    }

    export class Identifier extends AST {
        private _text: string;

        // 'actualText' is the text that the user has entered for the identifier. the text might 
        // include any Unicode escape sequences (e.g.: \u0041 for 'A'). 'text', however, contains 
        // the resolved value of any escape sequences in the actual text; so in the previous 
        // example, actualText = '\u0041', text = 'A'.
        //
        // For purposes of finding a symbol, use text, as this will allow you to match all 
        // variations of the variable text. For full-fidelity translation of the user input, such
        // as emitting, use the actualText field.
        constructor(public actualText: string, text: string) {
            super();
            this._text = text;
        }

        public text(): string {
            if (!this._text) {
                this._text = Syntax.massageEscapes(this.actualText);
            }

            return this._text;
        }

        public nodeType(): NodeType {
            return NodeType.Name;
        }

        public isMissing() { return false; }

        public emit(emitter: Emitter) {
            emitter.emitName(this, true);
        }

        public structuralEquals(ast: Identifier, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.actualText === ast.actualText &&
                   this.isMissing() === ast.isMissing();
        }


		//NanoJS - begin
		public toNanoLValue(): NanoLValue {
			return new NanoLVar(this.getSourceSpan(), this.getNanoAnnotations(), this.actualText);
		}

		public toNanoAST(): NanoId {
			return new NanoId(this.getSourceSpan(), this.getNanoAnnotations(), this.actualText);
		}

		public toNanoExp(): NanoExpression {
			return new NanoVarRef(this.getSourceSpan(), this.getNanoAnnotations(), this.toNanoAST());
		}
		//NanoJS - end
    }

    export class MissingIdentifier extends Identifier {
        constructor() {
            super("__missing", "__missing");
        }

        public isMissing() {
            return true;
        }

        public emit(emitter: Emitter) {
            // Emit nothing for a missing ID
        }
    }

    export class LiteralExpression extends AST {
        constructor(private _nodeType: NodeType) {
            super();
        }

        public nodeType(): NodeType {
            return this._nodeType;
        }

        public emitWorker(emitter: Emitter) {
            switch (this.nodeType()) {
                case NodeType.NullLiteral:
                    emitter.writeToOutput("null");
                    break;
                case NodeType.FalseLiteral:
                    emitter.writeToOutput("false");
                    break;
                case NodeType.TrueLiteral:
                    emitter.writeToOutput("true");
                    break;
                default:
                    throw Errors.abstract();
            }
        }

        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition);
        }

		//NanoJS - begin
		public toNanoExp(): NanoExpression {
            switch (this.nodeType()) {
                case NodeType.NullLiteral:
					return new NanoNullLit(this.getSourceSpan(), this.getNanoAnnotations());
                case NodeType.FalseLiteral:
					return new NanoBoolLit(this.getSourceSpan(), this.getNanoAnnotations(), false);
                case NodeType.TrueLiteral:
					return new NanoBoolLit(this.getSourceSpan(), this.getNanoAnnotations(), true);
                default:
                    throw Errors.abstract();
            }
		}
		//NanoJS - end

    }

    export class ThisExpression extends AST {
        public nodeType(): NodeType {
            return NodeType.ThisExpression;
        }

        public emitWorker(emitter: Emitter) {
            if (emitter.thisFunctionDeclaration && (hasFlag(emitter.thisFunctionDeclaration.getFunctionFlags(), FunctionFlags.IsFatArrowFunction))) {
                emitter.writeToOutput("_this");
            }
            else {
                emitter.writeToOutput("this");
            }
        }

        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition);
        }

		//NanoJS - begin
		public toNanoExp() {
			return new NanoThisRef(this.getSourceSpan(), this.getNanoAnnotations());
		}
		//NanoJS - end

    }

    export class SuperExpression extends AST {
        public nodeType(): NodeType {
            return NodeType.SuperExpression;
        }

        public emitWorker(emitter: Emitter) {
            emitter.emitSuperReference();
        }

        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition);
        }
    }

    export class ParenthesizedExpression extends AST {
        constructor(public expression: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ParenthesizedExpression;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("(");
            this.expression.emit(emitter);
            emitter.writeToOutput(")");
        }

        public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.expression, ast.expression, includingPosition);
        }

		//NanoJS - begin
		public toNanoAST(): NanoAST {
			return this.expression.toNanoAST();
		}

		public toNanoExp(): NanoExpression {
			return this.expression.toNanoExp();
		}
		//NanoJS - end

    }

	export class UnaryExpression extends AST {
		constructor(private _nodeType: NodeType, public operand: AST, public castTerm: TypeReference) {
			super();
		}

		public nodeType(): NodeType {
			return this._nodeType;
		}

		public emitWorker(emitter: Emitter) {
			switch (this.nodeType()) {
				case NodeType.PostIncrementExpression:
					this.operand.emit(emitter);
					emitter.writeToOutput("++");
					break;
				case NodeType.LogicalNotExpression:
					emitter.writeToOutput("!");
					this.operand.emit(emitter);
					break;
				case NodeType.PostDecrementExpression:
					this.operand.emit(emitter);
					emitter.writeToOutput("--");
					break;
				case NodeType.ObjectLiteralExpression:
					emitter.emitObjectLiteral(this);
					break;
				case NodeType.ArrayLiteralExpression:
					emitter.emitArrayLiteral(this);
					break;
				case NodeType.BitwiseNotExpression:
					emitter.writeToOutput("~");
					this.operand.emit(emitter);
					break;
				case NodeType.NegateExpression:
					emitter.writeToOutput("-");
					if (this.operand.nodeType() === NodeType.NegateExpression || this.operand.nodeType() === NodeType.PreDecrementExpression) {
						emitter.writeToOutput(" ");
					}
					this.operand.emit(emitter);
					break;
				case NodeType.PlusExpression:
					emitter.writeToOutput("+");
					if (this.operand.nodeType() === NodeType.PlusExpression || this.operand.nodeType() === NodeType.PreIncrementExpression) {
						emitter.writeToOutput(" ");
					}
					this.operand.emit(emitter);
					break;
				case NodeType.PreIncrementExpression:
					emitter.writeToOutput("++");
					this.operand.emit(emitter);
					break;
				case NodeType.PreDecrementExpression:
					emitter.writeToOutput("--");
					this.operand.emit(emitter);
					break;
				case NodeType.TypeOfExpression:
					emitter.writeToOutput("typeof ");
					this.operand.emit(emitter);
					break;
				case NodeType.DeleteExpression:
					emitter.writeToOutput("delete ");
					this.operand.emit(emitter);
					break;
				case NodeType.VoidExpression:
					emitter.writeToOutput("void ");
					this.operand.emit(emitter);
					break;
				case NodeType.CastExpression:
					this.operand.emit(emitter);
					break;
				default:
					throw Errors.abstract();
			}
		}

		public structuralEquals(ast: UnaryExpression, includingPosition: boolean): boolean {
			return super.structuralEquals(ast, includingPosition) &&
				structuralEquals(this.castTerm, ast.castTerm, includingPosition) &&
				structuralEquals(this.operand, ast.operand, includingPosition);
		}

		//NanoJS - begin

		public toNanoExp(): NanoExpression {
			switch (this.nodeType()) {
				case NodeType.ObjectLiteralExpression:
					return new NanoObjectLit(this.getSourceSpan(), this.getNanoAnnotations(), this.operand.toNanoMemList());
				case NodeType.PostIncrementExpression:
					return new NanoUnaryAssignExpr(this.getSourceSpan(), this.getNanoAnnotations(), new NanoUnaryAssignOp(NanoUnaryAssignOpKind.PostfixInc), this.operand.toNanoLValue());
				case NodeType.PreIncrementExpression:
					return new NanoUnaryAssignExpr(this.getSourceSpan(), this.getNanoAnnotations(), new NanoUnaryAssignOp(NanoUnaryAssignOpKind.PrefixInc), this.operand.toNanoLValue());
				case NodeType.PostDecrementExpression:
					return new NanoUnaryAssignExpr(this.getSourceSpan(), this.getNanoAnnotations(), new NanoUnaryAssignOp(NanoUnaryAssignOpKind.PostfixDec), this.operand.toNanoLValue());
				case NodeType.PreDecrementExpression:
					return new NanoUnaryAssignExpr(this.getSourceSpan(), this.getNanoAnnotations(), new NanoUnaryAssignOp(NanoUnaryAssignOpKind.PrefixDec), this.operand.toNanoLValue());

				case NodeType.NegateExpression:
					return new NanoPrefixExpr(this.getSourceSpan(), this.getNanoAnnotations(), new NanoPrefixOp(NanoPrefixOpKind.PrefixMinus), this.operand.toNanoExp());
					
				default:
					throw new Error("UnaryExpression:toNanoExp nodetype not supported: " + NodeType[this.nodeType()]);
			}
		}
		//NanoJS - begin



    }

    export interface ICallExpression extends IAST {
        target: AST;
        typeArguments: ASTList;
        arguments: ASTList;
        closeParenSpan: ASTSpan;
        callResolutionData: PullAdditionalCallResolutionData;
    }

    export class ObjectCreationExpression extends AST implements ICallExpression {
        callResolutionData: PullAdditionalCallResolutionData = null;
        constructor(public target: AST,
                    public typeArguments: ASTList,
                    public arguments: ASTList,
                    public closeParenSpan: ASTSpan) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ObjectCreationExpression;
        }

        public emitWorker(emitter: Emitter) {
            emitter.emitNew(this, this.target, this.arguments);
        }

        public structuralEquals(ast: ObjectCreationExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                structuralEquals(this.target, ast.target, includingPosition) &&
                structuralEquals(this.typeArguments, ast.typeArguments, includingPosition) &&
                structuralEquals(this.arguments, ast.arguments, includingPosition);
        }

		//NanoJS - begin
		public toNanoExp(): NanoExpression {
			return new NanoNewExpr(this.getSourceSpan(), this.getNanoAnnotations(), this.target.toNanoExp(), this.arguments.toNanoExp());
		}
		//NanoJS - begin

    }

    export class InvocationExpression extends AST implements ICallExpression {
        callResolutionData: PullAdditionalCallResolutionData = null;
        constructor(public target: AST,
                    public typeArguments: ASTList,
                    public arguments: ASTList,
                    public closeParenSpan: ASTSpan) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.InvocationExpression;
        }

        public emitWorker(emitter: Emitter) {
            emitter.emitCall(this, this.target, this.arguments);
        }

        public structuralEquals(ast: InvocationExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.target, ast.target, includingPosition) &&
                   structuralEquals(this.typeArguments, ast.typeArguments, includingPosition) &&
                   structuralEquals(this.arguments, ast.arguments, includingPosition);
        }

		//NanoJS - begin
		public toNanoExp(): NanoExpression {
			if (this.target.nodeType() === NodeType.SuperExpression) {
				return new NanoSuperExpr(this.getSourceSpan(), this.getNanoAnnotations(), this.arguments.toNanoExp());
			}
			return new NanoCallExpr(this.getSourceSpan(), this.getNanoAnnotations(), this.target.toNanoExp(), this.arguments.toNanoExp());	
		}
		//NanoJS - end

    }

    export class BinaryExpression extends AST {
        constructor(private _nodeType: NodeType,
                    public operand1: AST,
                    public operand2: AST) {
            super();
        }

        public nodeType(): NodeType {
            return this._nodeType;
        }
        public static getTextForBinaryToken(nodeType: NodeType): string {
            switch (nodeType) {
                case NodeType.CommaExpression: return ",";
                case NodeType.AssignmentExpression: return "=";
                case NodeType.AddAssignmentExpression: return "+=";
                case NodeType.SubtractAssignmentExpression: return "-=";
                case NodeType.MultiplyAssignmentExpression: return "*=";
                case NodeType.DivideAssignmentExpression: return "/=";
                case NodeType.ModuloAssignmentExpression: return "%=";
                case NodeType.AndAssignmentExpression: return "&=";
                case NodeType.ExclusiveOrAssignmentExpression: return "^=";
                case NodeType.OrAssignmentExpression: return "|=";
                case NodeType.LeftShiftAssignmentExpression: return "<<=";
                case NodeType.SignedRightShiftAssignmentExpression: return ">>=";
                case NodeType.UnsignedRightShiftAssignmentExpression: return ">>>=";
                case NodeType.LogicalOrExpression: return "||";
                case NodeType.LogicalAndExpression: return "&&";
                case NodeType.BitwiseOrExpression: return "|";
                case NodeType.BitwiseExclusiveOrExpression: return "^";
                case NodeType.BitwiseAndExpression: return "&";
                case NodeType.EqualsWithTypeConversionExpression: return "==";
                case NodeType.NotEqualsWithTypeConversionExpression: return "!=";
                case NodeType.EqualsExpression: return "===";
                case NodeType.NotEqualsExpression: return "!==";
                case NodeType.LessThanExpression: return "<";
                case NodeType.GreaterThanExpression: return ">";
                case NodeType.LessThanOrEqualExpression: return "<=";
                case NodeType.GreaterThanOrEqualExpression: return ">=";
                case NodeType.InstanceOfExpression: return "instanceof";
                case NodeType.InExpression: return "in";
                case NodeType.LeftShiftExpression: return "<<";
                case NodeType.SignedRightShiftExpression: return ">>";
                case NodeType.UnsignedRightShiftExpression: return ">>>";
                case NodeType.MultiplyExpression: return "*";
                case NodeType.DivideExpression: return "/";
                case NodeType.ModuloExpression: return "%";
                case NodeType.AddExpression: return "+";
                case NodeType.SubtractExpression: return "-";
            }

            throw Errors.invalidOperation();
        }

        public emitWorker(emitter: Emitter) {
            switch (this.nodeType()) {
                case NodeType.MemberAccessExpression:
                    if (!emitter.tryEmitConstant(this)) {
                        this.operand1.emit(emitter);
                        emitter.writeToOutput(".");
                        emitter.emitName(<Identifier>this.operand2, false);
                    }
                    break;
                case NodeType.ElementAccessExpression:
                    emitter.emitIndex(this.operand1, this.operand2);
                    break;

                case NodeType.Member:
                    if (this.operand2.nodeType() === NodeType.FunctionDeclaration && (<FunctionDeclaration>this.operand2).isAccessor()) {
                        var funcDecl = <FunctionDeclaration>this.operand2;
                        if (hasFlag(funcDecl.getFunctionFlags(), FunctionFlags.GetAccessor)) {
                            emitter.writeToOutput("get ");
                        }
                        else {
                            emitter.writeToOutput("set ");
                        }
                        this.operand1.emit(emitter);
                    }
                    else {
                        this.operand1.emit(emitter);
                        emitter.writeToOutputTrimmable(": ");
                    }
                    this.operand2.emit(emitter);
                    break;
                case NodeType.CommaExpression:
                    this.operand1.emit(emitter);
                    emitter.writeToOutput(", ");
                    this.operand2.emit(emitter);
                    break;
                default:
                    {
                        this.operand1.emit(emitter);
                        var binOp = BinaryExpression.getTextForBinaryToken(this.nodeType());
                        if (binOp === "instanceof") {
                            emitter.writeToOutput(" instanceof ");
                        }
                        else if (binOp === "in") {
                            emitter.writeToOutput(" in ");
                        }
                        else {
                            emitter.writeToOutputTrimmable(" " + binOp + " ");
                        }
                        this.operand2.emit(emitter);
                    }
            }
        }

        public structuralEquals(ast: BinaryExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.operand1, ast.operand1, includingPosition) &&
                   structuralEquals(this.operand2, ast.operand2, includingPosition);
        }


		//NanoJS - begin
		public toNanoAST(): NanoExpression {
            switch (this.nodeType()) {
				case NodeType.MemberAccessExpression: {
					switch (this.operand2.nodeType()) {
						case NodeType.Name:
							return new NanoLDot(this.getSourceSpan(), this.getNanoAnnotations(), this.operand1.toNanoExp(), (<Identifier>this.operand2).actualText);
					}
					throw new Error("UNIMMPLEMENTED:BinaryExpression:toNanoAST:MemberAccessExpression:op2-nonId");
				}
				default: {
					throw new Error("UNIMMPLEMENTED:BinaryExpression:toNanoAST:Expression");
				}
            }
		}

		public toNanoLValue(): NanoLValue {
            switch (this.nodeType()) {
				case NodeType.MemberAccessExpression: {
					switch (this.operand2.nodeType()) {
						case NodeType.Name:
							return new NanoLDot(this.getSourceSpan(), this.getNanoAnnotations(), this.operand1.toNanoExp(), (<Identifier>this.operand2).actualText);
					}
				}
				case NodeType.ElementAccessExpression: 
					return new NanoLBracket(this.getSourceSpan(), this.getNanoAnnotations(), this.operand1.toNanoExp(), this.operand2.toNanoExp());
				default: {
					throw new Error("UNIMMPLEMENTED:BinaryExpression:toNanoLValue");
				}
            }
		}



		public toNanoExp(): NanoExpression {
            switch (this.nodeType()) {
				case NodeType.MemberAccessExpression: {
					switch (this.operand2.nodeType()) {
						case NodeType.Name:
							return new NanoDotRef(this.getSourceSpan(), this.getNanoAnnotations(), 
								this.operand1.toNanoExp(),
								(<Identifier>this.operand2).toNanoAST());
					}
					throw new Error("UNIMMPLEMENTED:BinaryExpression:toNanoAST:MemberAccessExpression:op2-nonId");
				}

				case NodeType.AssignmentExpression: 
					return new NanoAssignExpr(this.getSourceSpan(), this.getNanoAnnotations(), 
						new NanoAssignOp(BinaryExpression.getTextForBinaryToken(this.nodeType())),
						this.operand1.toNanoLValue(),
						this.operand2.toNanoExp());

				case NodeType.ElementAccessExpression: 
					return new NanoBracketRef(this.getSourceSpan(), this.getNanoAnnotations(), this.operand1.toNanoExp(), this.operand2.toNanoExp());

				case NodeType.AddExpression:
				case NodeType.SubtractExpression:
				case NodeType.MultiplyExpression:
				case NodeType.DivideExpression:
				case NodeType.EqualsExpression:
				case NodeType.EqualsWithTypeConversionExpression:
				case NodeType.GreaterThanExpression:
				case NodeType.GreaterThanOrEqualExpression:
				case NodeType.LessThanExpression:
				case NodeType.LessThanOrEqualExpression:
				case NodeType.LogicalOrExpression:
				case NodeType.LogicalAndExpression:
					return new NanoInfixExpr(this.getSourceSpan(), this.getNanoAnnotations(), 
						new NanoInfixOp(BinaryExpression.getTextForBinaryToken(this.nodeType())),
						this.operand1.toNanoExp(),
						this.operand2.toNanoExp());

				case NodeType.AddAssignmentExpression:
				case NodeType.SubtractAssignmentExpression:
				case NodeType.DivideAssignmentExpression:
				case NodeType.MultiplyAssignmentExpression:
					return new NanoAssignExpr(this.getSourceSpan(), this.getNanoAnnotations(), 
						new NanoAssignOp(BinaryExpression.getTextForBinaryToken(this.nodeType())),
						this.operand1.toNanoLValue(),
						this.operand2.toNanoExp());

				default: 
					throw new Error("UNIMMPLEMENTED:BinaryExpression:toNanoExp:Expression for : " + NodeType[this.nodeType()]);
            }
		}


		public toNanoMemList(): NanoASTList<NanoAST> {
            switch (this.nodeType()) {
                case NodeType.Member: {
					switch (this.operand1.nodeType()) {
						case NodeType.Name:
							return new NanoASTList( [
								new NanoPropId(this.getSourceSpan(), this.getNanoAnnotations(), (<Identifier>this.operand1).toNanoAST()),
								this.operand2.toNanoExp()
							]);
						case NodeType.NumericLiteral:
							return new NanoASTList([
								new NanoPropNum(this.getSourceSpan(), this.getNanoAnnotations(), (<NumberLiteral>this.operand1).value),
								this.operand2.toNanoExp()
							]);
						case NodeType.StringLiteral:
							return new NanoASTList([
								new NanoPropString(this.getSourceSpan(), this.getNanoAnnotations(), (<StringLiteral>this.operand1).actualText),
								this.operand2.toNanoExp()
							]);
					}
				}
				default:
					throw new Error("UNIMMPLEMENTED:BinaryExpression:toNanoMemList:default");
            }
		}
		//NanoJS - begin

    }

    export class ConditionalExpression extends AST {
        constructor(public operand1: AST,
                    public operand2: AST,
                    public operand3: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ConditionalExpression;
        }

        public emitWorker(emitter: Emitter) {
            this.operand1.emit(emitter);
            emitter.writeToOutput(" ? ");
            this.operand2.emit(emitter);
            emitter.writeToOutput(" : ");
            this.operand3.emit(emitter);
        }

        public structuralEquals(ast: ConditionalExpression, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.operand1, ast.operand1, includingPosition) &&
                   structuralEquals(this.operand2, ast.operand2, includingPosition) &&
                   structuralEquals(this.operand3, ast.operand3, includingPosition);
        }
    }

    export class NumberLiteral extends AST {
        private _text: string;

        constructor(public value: number,
                    text: string) {
            super();
            this._text = text;
        }

        public text(): string {
            return this._text;
        }

        public nodeType(): NodeType {
            return NodeType.NumericLiteral;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput(this._text);
        }

        public structuralEquals(ast: NumberLiteral, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.value === ast.value &&
                   this._text === ast._text;
        }

		//NanoJS - begin
		public toNanoExp(): NanoExpression {

      //console.log("NumberLiteral: " + this.getNanoAnnotations().map(a =>
      //      JSON.stringify(a.toObject())));

			if (this.text().indexOf(".") === -1) {
			//No decimal part
				return new NanoIntLit(this.getSourceSpan(), this.getNanoAnnotations(), this.value);
			}
			else {
				return new NanoNumLit(this.getSourceSpan(), this.getNanoAnnotations(), this.value);
			}
		}
		//NanoJS - end

    }

    export class RegexLiteral extends AST {
        constructor(public text: string) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.RegularExpressionLiteral;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput(this.text);
        }

        public structuralEquals(ast: RegexLiteral, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.text === ast.text;
        }
    }

    export class StringLiteral extends AST {
        private _text: string;

        constructor(public actualText: string, text: string) {
            super();
            this._text = text;
        }

        public text(): string {
            return this._text;
        }

        public nodeType(): NodeType {
            return NodeType.StringLiteral;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput(this.actualText);
        }

        public structuralEquals(ast: StringLiteral, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.actualText === ast.actualText;
        }

		//NanoJS - begin
		public toNanoExp(): NanoStringLit {
			return new NanoStringLit(this.getSourceSpan(), this.getNanoAnnotations(), this.actualText);
		}
		//NanoJS - end



    }

    export class ImportDeclaration extends AST {
        private _varFlags = VariableFlags.None;
        constructor(public id: Identifier, public alias: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ImportDeclaration;
        }

        public isDeclaration() { return true; }

        public getVarFlags(): VariableFlags {
            return this._varFlags;
        }

        // Must only be called from SyntaxTreeVisitor
        public setVarFlags(flags: VariableFlags): void {
            this._varFlags = flags;
        }

        public isExternalImportDeclaration() {
            if (this.alias.nodeType() == NodeType.Name) {
                var text = (<Identifier>this.alias).actualText;
                return isQuoted(text);
            }

            return false;
        }

        public emit(emitter: Emitter) {
            emitter.emitImportDeclaration(this);
        }

        public getAliasName(aliasAST: AST = this.alias): string {
            if (aliasAST.nodeType() == NodeType.TypeRef) {
                aliasAST = (<TypeReference>aliasAST).term;
            }

            if (aliasAST.nodeType() === NodeType.Name) {
                return (<Identifier>aliasAST).actualText;
            } else {
                var dotExpr = <BinaryExpression>aliasAST;
                return this.getAliasName(dotExpr.operand1) + "." + this.getAliasName(dotExpr.operand2);
            }
        }

        public firstAliasedModToString() {
            if (this.alias.nodeType() === NodeType.Name) {
                return (<Identifier>this.alias).actualText;
            }
            else {
                var dotExpr = <TypeReference>this.alias;
                var firstMod = <Identifier>(<BinaryExpression>dotExpr.term).operand1;
                return firstMod.actualText;
            }
        }

        public structuralEquals(ast: ImportDeclaration, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                this._varFlags === ast._varFlags &&
                structuralEquals(this.id, ast.id, includingPosition) &&
                structuralEquals(this.alias, ast.alias, includingPosition);
        }
    }

    export class ExportAssignment extends AST {
        constructor(public id: Identifier) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ExportAssignment;
        }

        public structuralEquals(ast: ExportAssignment, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.id, ast.id, includingPosition);
        }

        public emit(emitter: Emitter) {
            emitter.setExportAssignmentIdentifier(this.id.actualText);
        }
    }

    export class BoundDecl extends AST {
        public constantValue: number = null;
        private _varFlags = VariableFlags.None;

        constructor(public id: Identifier, public typeExpr: AST, public init: AST) {
            super();
        }

        public isDeclaration() { return true; }

        public getVarFlags(): VariableFlags {
            return this._varFlags;
        }

        // Must only be called from SyntaxTreeVisitor
        public setVarFlags(flags: VariableFlags): void {
            this._varFlags = flags;
        }

        public isProperty() { return hasFlag(this.getVarFlags(), VariableFlags.Property); }

        public structuralEquals(ast: BoundDecl, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this._varFlags === ast._varFlags &&
                   structuralEquals(this.init, ast.init, includingPosition) &&
                   structuralEquals(this.typeExpr, ast.typeExpr, includingPosition) &&
                   structuralEquals(this.id, ast.id, includingPosition);
        }
    }

    export class VariableDeclarator extends BoundDecl {
        constructor(id: Identifier, typeExpr: AST, init: AST) {
            super(id, typeExpr, init);
        }

        public nodeType(): NodeType {
            return NodeType.VariableDeclarator;
        }

        public isStatic() { return hasFlag(this.getVarFlags(), VariableFlags.Static); }

        public emit(emitter: Emitter) {
            emitter.emitVariableDeclarator(this);
        }

		//NanoJS - begin
		public toNanoVarDecl(anns: NanoBindAnnotation[]): NanoVarDecl {
			//All necessary binders need to be in @anns@
			return new NanoVarDecl(this.getSourceSpan(),
				anns.filter(a => a.getBinderName() === this.id.text()),
				this.id.toNanoAST(), (this.init) ? this.init.toNanoExp() : null);
		}

		public toNanoClassElt(): NanoClassElt {
			// Adding the annotations in the enclosing NanoVarDecl instead of the top-level.
			return new NanoMemberVarDecl(this.getSourceSpan(), [], 
				hasFlag(this.getVarFlags(), VariableFlags.Public),
				hasFlag(this.getVarFlags(), VariableFlags.Static),
				new NanoVarDecl(this.getSourceSpan(), this.getNanoAnnotations(), this.id.toNanoAST(), (this.init) ? this.init.toNanoExp() : null));
		}
		//NanoJS - end
    }

    export class Parameter extends BoundDecl {
        constructor(id: Identifier, typeExpr: AST, init: AST, public isOptional: boolean) {
            super(id, typeExpr, init);
        }

        public nodeType(): NodeType {
            return NodeType.Parameter;
        }

        public isOptionalArg(): boolean { return this.isOptional || this.init; }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput(this.id.actualText);
        }

        public structuralEquals(ast: Parameter, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.isOptional === ast.isOptional;
        }

		//NanoJS - begin
		public toNanoAST(): NanoAST {
			return this.id.toNanoAST();
		}		
		//NanoJS - end

    }

    export class FunctionDeclaration extends AST {
        public hint: string = null;
        private _functionFlags = FunctionFlags.None;
        public classDecl: ClassDeclaration = null;

        public returnStatementsWithExpressions: ReturnStatement[];

        constructor(public name: Identifier,
                    public block: Block,
                    public isConstructor: boolean,
                    public typeArguments: ASTList,
                    public arguments: ASTList,
                    public returnTypeAnnotation: AST,
                    public variableArgList: boolean) {
            super();
        }

        public isDeclaration() { return true; }

        public nodeType(): NodeType {
            return NodeType.FunctionDeclaration;
        }

        public getFunctionFlags(): FunctionFlags {
            return this._functionFlags;
        }

        // Must only be called from SyntaxTreeVisitor
        public setFunctionFlags(flags: FunctionFlags): void {
            this._functionFlags = flags;
        }

        public structuralEquals(ast: FunctionDeclaration, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this._functionFlags === ast._functionFlags &&
                   this.hint === ast.hint &&
                   this.variableArgList === ast.variableArgList &&
                   structuralEquals(this.name, ast.name, includingPosition) &&
                   structuralEquals(this.block, ast.block, includingPosition) &&
                   this.isConstructor === ast.isConstructor &&
                   structuralEquals(this.typeArguments, ast.typeArguments, includingPosition) &&
                   structuralEquals(this.arguments, ast.arguments, includingPosition);
        }

        public shouldEmit(): boolean {
            return !hasFlag(this.getFunctionFlags(), FunctionFlags.Signature) &&
                   !hasFlag(this.getFunctionFlags(), FunctionFlags.Ambient);
        }

        public emit(emitter: Emitter) {
            emitter.emitFunction(this);
        }

        public getNameText() {
            if (this.name) {
                return this.name.actualText;
            }
            else {
                return this.hint;
            }
        }

        public isMethod() {
            return (this.getFunctionFlags() & FunctionFlags.Method) !== FunctionFlags.None;
        }

        public isCallMember() { return hasFlag(this.getFunctionFlags(), FunctionFlags.CallMember); }
        public isConstructMember() { return hasFlag(this.getFunctionFlags(), FunctionFlags.ConstructMember); }
        public isIndexerMember() { return hasFlag(this.getFunctionFlags(), FunctionFlags.IndexerMember); }
        public isSpecialFn() { return this.isCallMember() || this.isIndexerMember() || this.isConstructMember(); }
        public isAccessor() { return hasFlag(this.getFunctionFlags(), FunctionFlags.GetAccessor) || hasFlag(this.getFunctionFlags(), FunctionFlags.SetAccessor); }
        public isGetAccessor() { return hasFlag(this.getFunctionFlags(), FunctionFlags.GetAccessor); }
        public isSetAccessor() { return hasFlag(this.getFunctionFlags(), FunctionFlags.SetAccessor); }
        public isStatic() { return hasFlag(this.getFunctionFlags(), FunctionFlags.Static); }

        public isSignature() { return (this.getFunctionFlags() & FunctionFlags.Signature) !== FunctionFlags.None; }


		//NanoJS begin
		private signature: PullSignatureSymbol[] = [];

		public setSignarure(s: PullSignatureSymbol[]) {
			this.signature = s;
		}

		public getSignature(): PullSignatureSymbol[] {
			return this.signature;
		}

		//TypeScript bunches up function expressions and statements. So we'll need 
		//to give implementations for both and have the caller decide which one to use.
		public toNanoExp(): NanoExpression {			
			return new NanoFuncExpr(this.getSourceSpan(), this.getNanoAnnotations(), 
				(this.name) ? this.name.toNanoAST() : null,
				<NanoASTList<NanoId>>this.arguments.toNanoAST(),
				new NanoASTList([this.block.toNanoStmt()]));
		}

		public toNanoStmt(): NanoStatement {

			if (!this.block) {
				throw new Error("UNIMPLEMENTED:FunctionDeclaration.toNanoStmt:No Block");
			}

			//TODO: use this inferred type if none is specified.
			//var tFunSig = new TFunctionSig(this.getSignature().map(p => p.toTFunctionSigMember()));

			function arrays_equal(a: string[], b: string[]): boolean {
				return !(a < b || b < a);
			}
	
			var name = this.name.text();
			var anns = this.getNanoAnnotations();
			var bindAnns: NanoBindAnnotation[] = <NanoBindAnnotation[]> anns.filter(a => a.getKind() === AnnotKind.RawBind);
			var bindAnnNames: string[] = bindAnns.map(a => (<NanoBindAnnotation>a).getBinderName());

			if (bindAnnNames.length > 0 && !arrays_equal(bindAnnNames, [name])) {
				throw new Error(name + " should have a single annotation.");
			}

			return new NanoFunctionStmt(this.getSourceSpan(), anns,
				this.name.toNanoAST(),
				<NanoASTList<NanoId>>this.arguments.toNanoAST(),
				new NanoASTList([this.block.toNanoStmt()]));
		}

		public toNanoClassElt(): NanoClassElt {
			// Nano annotations sanity checks.
			function arrays_equal(a: string[], b: string[]): boolean {
				return !(a < b || b < a);
			}
			var name = (this.isConstructor) ? "constructor" : this.name.text();
			var anns = this.getNanoAnnotations();
			var bindAnns: NanoBindAnnotation[] = <NanoBindAnnotation[]> anns.filter(a => a.getKind() === AnnotKind.RawBind);
			var bindAnnNames: string[] = bindAnns.map(a => (<NanoBindAnnotation>a).getBinderName());

			if (bindAnnNames.length > 0 && !arrays_equal(bindAnnNames, [name])) {
				throw new Error(name + " should have a single annotation.");
			}

			if (this.isConstructor) {
				//TODO: use this inferred type if none is specified.
				//var tFunSig = new TFunctionSig(this.getSignature().map(p => p.toTFunctionSigMember()));
				var decl: PullDecl = semInfoChain.getDeclForAST(this, document.fileName);
				var symb = decl.getSymbol();
				return new NanoConstructor(this.getSourceSpan(), anns,
					<NanoASTList<NanoId>>this.arguments.toNanoAST(),
					new NanoASTList([this.block.toNanoStmt()]));
			}
			else {
				return new NanoMemberMethDecl(this.getSourceSpan(), anns, 
					hasFlag(this.getFunctionFlags(), FunctionFlags.Public),
					hasFlag(this.getFunctionFlags(), FunctionFlags.Static),
					<NanoId>this.name.toNanoAST(),
					<NanoASTList<NanoId>>this.arguments.toNanoAST(),
					new NanoASTList([this.block.toNanoStmt()]));
			}
		}

		//NanoJS end
    }

    export class Script extends AST {
        public moduleElements: ASTList = null;
        public referencedFiles= new Array<string>();
        public isDeclareFile = false;
        public topLevelMod: ModuleDeclaration = null;

        public nodeType(): NodeType {
            return NodeType.Script;
        }

        public emit(emitter: Emitter) {
            if (!this.isDeclareFile) {
                emitter.emitScriptElements(this);
            }
        }

        public structuralEquals(ast: Script, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.moduleElements, ast.moduleElements, includingPosition);
        }

		//NanoJS - begin
		public toNanoAST(): NanoAST {
		//Top-level will be statements
			var nanoAST = this.moduleElements.toNanoStmt();
			nanoAST.addAnnotations(this.getAllNanoAnnotations());
			return nanoAST;
		}
		//NanoJS - end

    }

    export class ModuleDeclaration extends AST {
        private _moduleFlags = ModuleFlags.None;
        public prettyName: string;
        public amdDependencies = new Array<string>();

        constructor(public name: Identifier,
                    public members: ASTList,
                    public endingToken: ASTSpan) {
            super();

            this.prettyName = this.name.actualText;
        }

        public isDeclaration() {
            return true;
        }

        public nodeType(): NodeType {
            return NodeType.ModuleDeclaration;
        }

        public getModuleFlags(): ModuleFlags {
            return this._moduleFlags;
        }

        // Must only be called from SyntaxTreeVisitor
        public setModuleFlags(flags: ModuleFlags): void {
            this._moduleFlags = flags;
        }

        public structuralEquals(ast: ModuleDeclaration, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                this._moduleFlags === ast._moduleFlags &&
                structuralEquals(this.name, ast.name, includingPosition) &&
                structuralEquals(this.members, ast.members, includingPosition);
        }

        public isEnum() { return hasFlag(this.getModuleFlags(), ModuleFlags.IsEnum); }
        public isWholeFile() { return hasFlag(this.getModuleFlags(), ModuleFlags.IsWholeFile); }

        public shouldEmit(): boolean {
            if (hasFlag(this.getModuleFlags(), ModuleFlags.Ambient)) {
                return false;
            }

            // Always emit a non ambient enum (even empty ones).
            if (hasFlag(this.getModuleFlags(), ModuleFlags.IsEnum)) {
                return true;
            }

            for (var i = 0, n = this.members.members.length; i < n; i++) {
                var member = this.members.members[i];

                // We should emit *this* module if it contains any non-interface types. 
                // Caveat: if we have contain a module, then we should be emitted *if we want to
                // emit that inner module as well.
                if (member.nodeType() === NodeType.ModuleDeclaration) {
                    if ((<ModuleDeclaration>member).shouldEmit()) {
                        return true;
                    }
                }
                else if (member.nodeType() !== NodeType.InterfaceDeclaration) {
                    return true;
                }
            }

            return false;
        }

        public emit(emitter: Emitter) {
            if (this.shouldEmit()) {
                emitter.emitComments(this, true);
                emitter.emitModule(this);
                emitter.emitComments(this, false);
            }
        }

		//NanoJS - begin
		public toNanoStmt(): NanoStatement {
			throw new Error("ModuleDeclaration: " + this.name.text());
		}
		//NanoJS - end
    }

    export class TypeDeclaration extends AST {
        private _varFlags = VariableFlags.None;

        constructor(public name: Identifier,
                    public typeParameters: ASTList,
                    public extendsList: ASTList,
                    public implementsList: ASTList,
                    public members: ASTList) {
            super();
        }

        public isDeclaration() {
            return true;
        }

        public getVarFlags(): VariableFlags {
            return this._varFlags;
        }

        // Must only be called from SyntaxTreeVisitor
        public setVarFlags(flags: VariableFlags): void {
            this._varFlags = flags;
        }

        public structuralEquals(ast: TypeDeclaration, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this._varFlags === ast._varFlags &&
                   structuralEquals(this.name, ast.name, includingPosition) &&
                   structuralEquals(this.members, ast.members, includingPosition) &&
                   structuralEquals(this.typeParameters, ast.typeParameters, includingPosition) &&
                   structuralEquals(this.extendsList, ast.extendsList, includingPosition) &&
                   structuralEquals(this.implementsList, ast.implementsList, includingPosition);
        }

		//NanoJS begin
		private _typeAnnotation: TInterface = null;

		public setTypeAnnotation(t: TInterface) {
			this._typeAnnotation = t;
		}

		public getTypeAnnotation(): TInterface {
			return this._typeAnnotation;
		}

		public hasTypeAnnotation(): boolean {
			return this._typeAnnotation !== null;
		}
		//NanoJS end

    }

    export class ClassDeclaration extends TypeDeclaration {
        public constructorDecl: FunctionDeclaration = null;

        constructor(name: Identifier,
                    typeParameters: ASTList,
                    members: ASTList,
                    extendsList: ASTList,
                    implementsList: ASTList,
                    public endingToken: ASTSpan) {
            super(name, typeParameters, extendsList, implementsList, members);
        }

        public nodeType(): NodeType {
            return NodeType.ClassDeclaration;
        }

        public shouldEmit(): boolean {
            return !hasFlag(this.getVarFlags(), VariableFlags.Ambient);
        }

        public emit(emitter: Emitter): void {
            emitter.emitClass(this);
        }

		//NanoJS - begin
		public toNanoStmt() {
			//Extends
			var parent: Identifier = null;
			if (this.extendsList && this.extendsList.members) {
				if (this.extendsList.members.length == 1) {
					parent = <Identifier>this.extendsList.members[0];
				}
				else {
					throw new Error("ClassDeclaration can only extend a single class.")
				}
			}
			//Implements
			var implementsInterfaces: Identifier[] =
				(this.implementsList && this.implementsList.members) ? <Identifier[]>this.implementsList.members : [];
			var implementsInterfacesIds = implementsInterfaces.map(i => <NanoId>i.toNanoAST());

			return new NanoClassStmt(this.getSourceSpan(), this.getNanoAnnotations(), 
				this.name.toNanoAST(),
				parent ? <NanoId>parent.toNanoAST() : null,
				new NanoASTList<NanoId>(<any> implementsInterfacesIds),
				this.members.toNanoClassElt());
		}

		public toNanoClassElt(): NanoClassElt {
			throw new Error("UNIMPLEMENTED:ClassDeclaration:toNanoClassElt");
		}

		//NanoJS - end
    }

    export class InterfaceDeclaration extends TypeDeclaration {
        constructor(name: Identifier,
                    typeParameters: ASTList,
                    members: ASTList,
                    extendsList: ASTList,
                    implementsList: ASTList,
                    public isObjectTypeLiteral: boolean) {
            super(name, typeParameters, extendsList, implementsList, members);
        }

        public nodeType(): NodeType {
            return NodeType.InterfaceDeclaration;
        }

		//NanoJS: change should emit for user-defined interfaces. 
        public shouldEmit(): boolean {
			return this.hasTypeAnnotation();
            //return false;
        }

        public emit(emitter: Emitter): void {
            emitter.emitInterface(this);
        }
    
    }

    export class ThrowStatement extends AST {
        constructor(public expression: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ThrowStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("throw ");
            this.expression.emit(emitter);
            emitter.writeToOutput(";");
        }

        public structuralEquals(ast: ThrowStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
            structuralEquals(this.expression, ast.expression, includingPosition);
        }
    }

    export class ExpressionStatement extends AST {
        constructor(public expression: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ExpressionStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            var isArrowExpression = this.expression.nodeType() === NodeType.FunctionDeclaration &&
                hasFlag((<FunctionDeclaration>this.expression).getFunctionFlags(), FunctionFlags.IsFatArrowFunction);

            if (isArrowExpression) {
                emitter.writeToOutput("(");
            }

            this.expression.emit(emitter);

            if (isArrowExpression) {
                emitter.writeToOutput(")");
            }

            emitter.writeToOutput(";");
        }

        public structuralEquals(ast: ExpressionStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.expression, ast.expression, includingPosition);
        }

		//NanoJS - begin
		public toNanoStmt(): NanoExprStmt {
      //console.log("ExprStmt: " + this.getNanoAnnotations().map(a =>
      //      JSON.stringify(a.toObject())));
			return new NanoExprStmt(this.getSourceSpan(), this.getNanoAnnotations(), this.expression.toNanoExp());
		}
		//NanoJS - end

    }

    export class LabeledStatement extends AST {
        constructor(public identifier: Identifier, public statement: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.LabeledStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.recordSourceMappingStart(this.identifier);
            emitter.writeToOutput(this.identifier.actualText);
            emitter.recordSourceMappingEnd(this.identifier);
            emitter.writeLineToOutput(":");
            emitter.emitJavascript(this.statement, true);
        }

        public structuralEquals(ast: LabeledStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.identifier, ast.identifier, includingPosition) &&
                   structuralEquals(this.statement, ast.statement, includingPosition);
        }
    }

    export class VariableDeclaration extends AST {
		constructor(public declarators: ASTList) {
			super();
		}

		public nodeType(): NodeType {
			return NodeType.VariableDeclaration;
		}

		public emit(emitter: Emitter) {
			emitter.emitVariableDeclaration(this);
		}

		public structuralEquals(ast: VariableDeclaration, includingPosition: boolean): boolean {
			return super.structuralEquals(ast, includingPosition) &&
				structuralEquals(this.declarators, ast.declarators, includingPosition);
		}

		//NanoJS - begin

		private sanityCheck(bindAnns: NanoBindAnnotation[]) {
			//Next, do some sanity checks...
			var definedNames = this.definedNames();
			// 1. All binders match with exactly one variable being declared
			bindAnns.forEach(function (b: NanoBindAnnotation) {
				if (definedNames.indexOf(b.getBinderName()) < 0) {
					throw new Error("Variable annotation binder for '" + b.getBinderName() +
						"' does not correspond to any nearby variable declaration.");
				}
			});

			// 2. No duplicate binders
			var sortedBinds = bindAnns.map(b => b.getBinderName()).sort();
			var results: string[] = [];
			for (var i = 0; i < sortedBinds.length - 1; i++) {
				if (sortedBinds[i + 1] == sortedBinds[i]) {
					results.push(sortedBinds[i]);
				}
			}
			if (results.length > 0) {
				throw new Error("Duplicate type annotation for variables: " + results.join(", "));
			}
		}

		private definedVars(): Identifier[] {
			var definedIds: Identifier[] = [];
			TypeScript.getAstWalkerFactory().walk(this, function (cur: AST, parent: AST, walker: IAstWalker) {
				if (cur.nodeType() === NodeType.VariableDeclarator) {
					var varDecl = <VariableDeclarator>cur;
					definedIds = definedIds.concat(varDecl.id);
				}
				return cur;
			});
			return definedIds;
		}

		private definedNames(): string[] {
			return this.definedVars().map(id => id.text());
		}

		public toNanoForInit(): NanoForInit {
			//Gather all annotations from the current node and all Bind annotations from the children nodes.
			var anns = this.getAllNanoAnnotations();
			var bindAnns: NanoBindAnnotation[] = <NanoBindAnnotation[]>anns.filter(a => a.getKind() === AnnotKind.RawBind);
			var sortedBinds = bindAnns.map(b => b.getBinderName()).sort();
			var noBindAnns: NanoAnnotation[] = <NanoBindAnnotation[]>anns.filter(a => a.getKind() !== AnnotKind.RawBind);
			//Sanity checks
			this.sanityCheck(bindAnns);
			return new NanoVarInit(this.getSourceSpan(), noBindAnns, <NanoASTList<NanoVarDecl>>this.declarators.toNanoVarDecl(bindAnns));
		}

		public toNanoStmt(): NanoVarDeclStmt {
			//Gather all annotations from the current node and all Bind annotations from the children nodes.
			var anns = this.getAllNanoAnnotations();
			var bindAnns: NanoBindAnnotation[] = <NanoBindAnnotation[]>anns.filter(a => a.getKind() === AnnotKind.RawBind);
			var noBindAnns: NanoAnnotation[] = <NanoBindAnnotation[]>anns.filter(a => a.getKind() !== AnnotKind.RawBind);
			//Sanity checks
			this.sanityCheck(bindAnns);
			//Adding all annotations for children nodes
			return new NanoVarDeclStmt(this.getSourceSpan(), noBindAnns, <NanoASTList<NanoVarDecl>>this.declarators.toNanoVarDecl(bindAnns));
		}

		//NanoJS - end
    }

    export class VariableStatement extends AST {
        constructor(public declaration: VariableDeclaration) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.VariableStatement;
        }

        public isStatement() {
            return true;
        }

        public shouldEmit(): boolean {
            var varDecl = <VariableDeclarator>this.declaration.declarators.members[0];
            return !hasFlag(varDecl.getVarFlags(), VariableFlags.Ambient) || varDecl.init !== null;
        }

        public emitWorker(emitter: Emitter) {
            if (hasFlag(this.getFlags(), ASTFlags.EnumElement)) {
                emitter.emitEnumElement(<VariableDeclarator>this.declaration.declarators.members[0]);
            }
            else {
                this.declaration.emit(emitter);
                emitter.writeToOutput(";");
            }
        }

        public structuralEquals(ast: VariableStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.declaration, ast.declaration, includingPosition);
        }

		//NanoJS - begin
		public toNanoAST(): NanoAST {
			return this.declaration.toNanoAST();	
		}

		public toNanoStmt(): NanoStatement {
			return this.declaration.toNanoStmt();	
		}
		//NanoJS - end


    }

    export class Block extends AST {
        public closeBraceLeadingComments: Comment[] = null;

        constructor(public statements: ASTList, public closeBraceSpan: IASTSpan) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.Block;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeLineToOutput(" {");
            emitter.indenter.increaseIndent();
            if (this.statements) {
                emitter.emitModuleElements(this.statements);
            }
            emitter.emitCommentsArray(this.closeBraceLeadingComments);
            emitter.indenter.decreaseIndent();
            emitter.emitIndent();
            emitter.writeToOutput("}");
        }

        public structuralEquals(ast: Block, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.statements, ast.statements, includingPosition);
        }


		public toNanoStmt(): NanoStatement {
			return new NanoBlockStmt(this.getSourceSpan(), this.getNanoAnnotations(), this.statements.toNanoStmt());
		}

    }

    export class Jump extends AST {
        constructor(private _nodeType: NodeType, public target: string) {
            super();
        }

        public nodeType(): NodeType {
            return this._nodeType;
        }

        public isStatement() {
            return true;
        }
        
        public hasExplicitTarget() { return this.target; }

        public emitWorker(emitter: Emitter) {
            if (this.nodeType() === NodeType.BreakStatement) {
                emitter.writeToOutput("break");
            }
            else {
                emitter.writeToOutput("continue");
            }
            if (this.hasExplicitTarget()) {
                emitter.writeToOutput(" " + this.target);
            }
            emitter.writeToOutput(";");
        }

        public structuralEquals(ast: Jump, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.target === ast.target;
        }
    }

    export class WhileStatement extends AST {
        constructor(public cond: AST, public body: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.WhileStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("while (");
            this.cond.emit(emitter);
            emitter.writeToOutput(")");
            emitter.emitBlockOrStatement(this.body);
        }

        public structuralEquals(ast: WhileStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.cond, ast.cond, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition);
        }

		//NanoJS - begin
		public toNanoStmt(): NanoStatement {
			return new NanoWhileStmt(this.getSourceSpan(), this.getNanoAnnotations(), this.cond.toNanoExp(), this.body.toNanoStmt());
		}
    }

    export class DoStatement extends AST {
        constructor(public body: AST, public cond: AST, public whileSpan: ASTSpan) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.DoStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("do");
            emitter.emitBlockOrStatement(this.body);
            emitter.recordSourceMappingStart(this.whileSpan);
            emitter.writeToOutput(" while");
            emitter.recordSourceMappingEnd(this.whileSpan);
            emitter.writeToOutput('(');
            this.cond.emit(emitter);
            emitter.writeToOutput(")");
            emitter.writeToOutput(";");
        }

        public structuralEquals(ast: DoStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition) &&
                   structuralEquals(this.cond, ast.cond, includingPosition);
        }
    }

    export class IfStatement extends AST {
        constructor(public cond: AST,
                    public thenBod: AST,
                    public elseBod: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.IfStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("if (");
            this.cond.emit(emitter);
            emitter.writeToOutput(")");

            emitter.emitBlockOrStatement(this.thenBod);

            if (this.elseBod) {
                if (this.thenBod.nodeType() !== NodeType.Block) {
                    emitter.writeLineToOutput("");
                }
                else {
                    emitter.writeToOutput(" ");
                }

                if (this.elseBod.nodeType() === NodeType.IfStatement) {
                    emitter.writeToOutput("else ");
                    this.elseBod.emit(emitter);
                }
                else {
                    emitter.writeToOutput("else");
                    emitter.emitBlockOrStatement(this.elseBod);
                }
            }
        }

		public structuralEquals(ast: IfStatement, includingPosition: boolean): boolean {
			return super.structuralEquals(ast, includingPosition) &&
				structuralEquals(this.cond, ast.cond, includingPosition) &&
				structuralEquals(this.thenBod, ast.thenBod, includingPosition) &&
				structuralEquals(this.elseBod, ast.elseBod, includingPosition);
		} 
		//NanoJS - begin
		public toNanoStmt(): NanoStatement {
			if (this.elseBod) {
				return new NanoIfStmt(this.getSourceSpan(), this.getNanoAnnotations(), this.cond.toNanoExp(), this.thenBod.toNanoStmt(), this.elseBod.toNanoStmt());
			}
			else {
				return new NanoIfSingleStmt(this.getSourceSpan(), this.getNanoAnnotations(), this.cond.toNanoExp(), this.thenBod.toNanoStmt());
			}
		}
		//NanoJS - end

    }

    export class ReturnStatement extends AST {
        constructor(public returnExpression: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ReturnStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            if (this.returnExpression) {
                emitter.writeToOutput("return ");
                this.returnExpression.emit(emitter);
                emitter.writeToOutput(";");
            }
            else {
                emitter.writeToOutput("return;");
            }
        }

        public structuralEquals(ast: ReturnStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.returnExpression, ast.returnExpression, includingPosition);
        }

		//NanoJS - begin
		public toNanoStmt(): NanoStatement {
			var ret = this.returnExpression ? this.returnExpression.toNanoExp() : null;
			return new NanoReturnStmt(this.getSourceSpan(), this.getNanoAnnotations(), ret);
		}
		//NanoJS - end

    }

    export class ForInStatement extends AST {
        constructor(public lval: AST, public obj: AST, public body: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ForInStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("for (");
            this.lval.emit(emitter);
            emitter.writeToOutput(" in ");
            this.obj.emit(emitter);
            emitter.writeToOutput(")");
            emitter.emitBlockOrStatement(this.body);
        }

        public structuralEquals(ast: ForInStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.lval, ast.lval, includingPosition) &&
                   structuralEquals(this.obj, ast.obj, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition);
        }
    }

    export class ForStatement extends AST {
        constructor(public init: AST,
                    public cond: AST,
                    public incr: AST,
                    public body: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.ForStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("for (");
            if (this.init) {
                if (this.init.nodeType() !== NodeType.List) {
                    this.init.emit(emitter);
                }
                else {
                    emitter.setInVarBlock((<ASTList>this.init).members.length);
                    emitter.emitCommaSeparatedList(<ASTList>this.init);
                }
            }

            emitter.writeToOutput("; ");
            emitter.emitJavascript(this.cond, false);
            emitter.writeToOutput(";");
            if (this.incr) {
                emitter.writeToOutput(" ");
                emitter.emitJavascript(this.incr, false);
            }
            emitter.writeToOutput(")");
            emitter.emitBlockOrStatement(this.body);
        }

        public structuralEquals(ast: ForStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.init, ast.init, includingPosition) &&
                   structuralEquals(this.cond, ast.cond, includingPosition) &&
                   structuralEquals(this.incr, ast.incr, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition);
        }

		//NanoJS - begin
		public toNanoStmt(): NanoStatement {
			return new NanoForStmt(this.getSourceSpan(), this.getNanoAnnotations(), this.init.toNanoForInit(),
				this.cond.toNanoExp(),
				this.incr.toNanoExp(),
				this.body.toNanoStmt());
		}

		//NanoJS - end
    }

    export class WithStatement extends AST {
        constructor(public expr: AST, public body: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.WithStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("with (");
            if (this.expr) {
                this.expr.emit(emitter);
            }

            emitter.writeToOutput(")");
            emitter.emitBlockOrStatement(this.body);
        }

        public structuralEquals(ast: WithStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.expr, ast.expr, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition);
        }
    }

    export class SwitchStatement extends AST {
        constructor(public val: AST, public caseList: ASTList, public defaultCase: CaseClause, public statement: ASTSpan) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.SwitchStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.recordSourceMappingStart(this.statement);
            emitter.writeToOutput("switch (");
            this.val.emit(emitter);
            emitter.writeToOutput(")");
            emitter.recordSourceMappingEnd(this.statement);
            emitter.writeLineToOutput(" {");
            emitter.indenter.increaseIndent();

            var lastEmittedNode: AST = null;
            for (var i = 0, n = this.caseList.members.length; i < n; i++) {
                var caseExpr = this.caseList.members[i];

                emitter.emitSpaceBetweenConstructs(lastEmittedNode, caseExpr);
                emitter.emitJavascript(caseExpr, true);

                lastEmittedNode = caseExpr;
            }
            emitter.indenter.decreaseIndent();
            emitter.emitIndent();
            emitter.writeToOutput("}");
        }

        public structuralEquals(ast: SwitchStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.caseList, ast.caseList, includingPosition) &&
                   structuralEquals(this.val, ast.val, includingPosition);
        }
    }

    export class CaseClause extends AST {
        constructor(public expr: AST, public body: ASTList) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.CaseClause;
        }

        public emitWorker(emitter: Emitter) {
            if (this.expr) {
                emitter.writeToOutput("case ");
                this.expr.emit(emitter);
            }
            else {
                emitter.writeToOutput("default");
            }
            emitter.writeToOutput(":");

            if (this.body.members.length === 1 && this.body.members[0].nodeType() === NodeType.Block) {
                // The case statement was written with curly braces, so emit it with the appropriate formatting
                this.body.members[0].emit(emitter);
                emitter.writeLineToOutput("");
            }
            else {
                // No curly braces. Format in the expected way
                emitter.writeLineToOutput("");
                emitter.indenter.increaseIndent();
                this.body.emit(emitter);
                emitter.indenter.decreaseIndent();
            }
        }

        public structuralEquals(ast: CaseClause, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.expr, ast.expr, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition);
        }
    }

    export class TypeParameter extends AST {
        constructor(public name: Identifier, public constraint: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.TypeParameter;
        }

        public structuralEquals(ast: TypeParameter, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.name, ast.name, includingPosition) &&
                   structuralEquals(this.constraint, ast.constraint, includingPosition);
        }
    }

    export class GenericType extends AST {
        constructor(public name: AST, public typeArguments: ASTList) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.GenericType;
        }

        public emit(emitter: Emitter): void {
            this.name.emit(emitter);
        }

        public structuralEquals(ast: GenericType, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.name, ast.name, includingPosition) &&
                   structuralEquals(this.typeArguments, ast.typeArguments, includingPosition);
        }
    }

    export class TypeQuery extends AST {
        constructor(public name: AST) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.TypeQuery;
        }

        public emit(emitter: Emitter) {
            Emitter.throwEmitterError(new Error(getLocalizedText(DiagnosticCode.Should_not_emit_a_type_query, null)));
        }

        public structuralEquals(ast: TypeQuery, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                structuralEquals(this.name, ast.name, includingPosition);
        }
    }

    export class TypeReference extends AST {
        constructor(public term: AST, public arrayCount: number) {
            super();
            this.minChar = term.minChar;
            this.limChar = term.limChar;
        }

        public nodeType(): NodeType {
            return NodeType.TypeRef;
        }

        public emit(emitter: Emitter) {
            Emitter.throwEmitterError(new Error(getLocalizedText(DiagnosticCode.Should_not_emit_a_type_reference, null)));
        }

        public structuralEquals(ast: TypeReference, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.term, ast.term, includingPosition) &&
                   this.arrayCount === ast.arrayCount;
        }
    }

    export class TryStatement extends AST {
        constructor(public tryBody: Block, public catchClause: CatchClause, public finallyBody: Block) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.TryStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("try ");
            this.tryBody.emit(emitter);
            emitter.emitJavascript(this.catchClause, false);

            if (this.finallyBody) {
                emitter.writeToOutput(" finally");
                this.finallyBody.emit(emitter);
            }
        }

        public structuralEquals(ast: TryStatement, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.tryBody, ast.tryBody, includingPosition) &&
                   structuralEquals(this.catchClause, ast.catchClause, includingPosition) &&
                   structuralEquals(this.finallyBody, ast.finallyBody, includingPosition);
        }
    }

    export class CatchClause extends AST {
        constructor(public param: VariableDeclarator, public body: Block) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.CatchClause;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput(" ");
            emitter.writeToOutput("catch (");
            this.param.id.emit(emitter);
            emitter.writeToOutput(")");
            this.body.emit(emitter);
        }

        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   structuralEquals(this.param, ast.param, includingPosition) &&
                   structuralEquals(this.body, ast.body, includingPosition);
        }
    }

    export class DebuggerStatement extends AST {
        public nodeType(): NodeType {
            return NodeType.DebuggerStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput("debugger;");
        }
    }

    export class OmittedExpression extends AST {
        public nodeType(): NodeType {
            return NodeType.OmittedExpression;
        }

        public emitWorker(emitter: Emitter) {
        }

        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition);
        }
    }

    export class EmptyStatement extends AST {
        public nodeType(): NodeType {
            return NodeType.EmptyStatement;
        }

        public isStatement() {
            return true;
        }

        public emitWorker(emitter: Emitter) {
            emitter.writeToOutput(";");
        }

        public structuralEquals(ast: CatchClause, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition);
        }

		//NanoJS - begin
		public toNanoStmt() {
			return new NanoEmptyStmt(this.getSourceSpan(), this.getNanoAnnotations());
		}
		//NanoJS - end

    }

    export class Comment extends AST {
        public text: string[] = null;
        private docCommentText: string = null;

        constructor(public content: string,
                    public isBlockComment: boolean,
                    public endsLine: boolean) {
            super();
        }

        public nodeType(): NodeType {
            return NodeType.Comment;
        }

        public structuralEquals(ast: Comment, includingPosition: boolean): boolean {
            return super.structuralEquals(ast, includingPosition) &&
                   this.content === ast.content &&
                   this.isBlockComment === ast.isBlockComment &&
                   this.endsLine === ast.endsLine;
        }

        public getText(): string[] {
            if (this.text === null) {
                if (this.isBlockComment) {
                    this.text = this.content.split("\n");
                    for (var i = 0; i < this.text.length; i++) {
                        this.text[i] = this.text[i].replace(/^\s+|\s+$/g, '');
                    }
                }
                else {
                    this.text = [(this.content.replace(/^\s+|\s+$/g, ''))];
                }
            }

            return this.text;
        }

        public isDocComment() {
            if (this.isBlockComment) {
                return this.content.charAt(2) === "*" && this.content.charAt(3) !== "/";
            }

            return false;
        }

        public getDocCommentTextValue() {
            if (this.docCommentText === null) {
                this.docCommentText = Comment.cleanJSDocComment(this.content);
            }

            return this.docCommentText;
        }

        static consumeLeadingSpace(line: string, startIndex: number, maxSpacesToRemove?: number) {
            var endIndex = line.length;
            if (maxSpacesToRemove !== undefined) {
                endIndex = min(startIndex + maxSpacesToRemove, endIndex);
            }

            for (; startIndex < endIndex; startIndex++) {
                var charCode = line.charCodeAt(startIndex);
                if (charCode !== CharacterCodes.space && charCode !== CharacterCodes.tab) {
                    return startIndex;
                }
            }

            if (endIndex !== line.length) {
                return endIndex;
            }

            return -1;
        }

        static isSpaceChar(line: string, index: number) {
            var length = line.length;
            if (index < length) {
                var charCode = line.charCodeAt(index);
                // If the character is space
                return charCode === CharacterCodes.space || charCode === CharacterCodes.tab;
            }

            // If the index is end of the line it is space
            return index === length;
        }

        static cleanDocCommentLine(line: string, jsDocStyleComment: boolean, jsDocLineSpaceToRemove?: number) {
            var nonSpaceIndex = Comment.consumeLeadingSpace(line, 0);
            if (nonSpaceIndex !== -1) {
                var jsDocSpacesRemoved = nonSpaceIndex;
                if (jsDocStyleComment && line.charAt(nonSpaceIndex) === '*') { // remove leading * in case of jsDocComment
                    var startIndex = nonSpaceIndex + 1;
                    nonSpaceIndex = Comment.consumeLeadingSpace(line, startIndex, jsDocLineSpaceToRemove);

                    if (nonSpaceIndex !== -1) {
                        jsDocSpacesRemoved = nonSpaceIndex - startIndex;
                    } else {
                        return null;
                    }
                }

                return {
                    minChar: nonSpaceIndex,
                    limChar: line.charAt(line.length - 1) === "\r" ? line.length - 1 : line.length,
                    jsDocSpacesRemoved: jsDocSpacesRemoved
                };
            }

            return null;
        }

        static cleanJSDocComment(content: string, spacesToRemove?: number) {

            var docCommentLines = new Array<string>();
            content = content.replace("/**", ""); // remove /**
            if (content.length >= 2 && content.charAt(content.length - 1) === "/" && content.charAt(content.length - 2) === "*") {
                content = content.substring(0, content.length - 2); // remove last */
            }
            var lines = content.split("\n");
            var inParamTag = false;
            for (var l = 0; l < lines.length; l++) {
                var line = lines[l];
                var cleanLinePos = Comment.cleanDocCommentLine(line, true, spacesToRemove);
                if (!cleanLinePos) {
                    // Whole line empty, read next line
                    continue;
                }

                var docCommentText = "";
                var prevPos = cleanLinePos.minChar;
                for (var i = line.indexOf("@", cleanLinePos.minChar); 0 <= i && i < cleanLinePos.limChar; i = line.indexOf("@", i + 1)) {
                    // We have encoutered @. 
                    // If we were omitting param comment, we dont have to do anything
                    // other wise the content of the text till @ tag goes as doc comment
                    var wasInParamtag = inParamTag;

                    // Parse contents next to @
                    if (line.indexOf("param", i + 1) === i + 1 && Comment.isSpaceChar(line, i + 6)) {
                        // It is param tag. 

                        // If we were not in param tag earlier, push the contents from prev pos of the tag this tag start as docComment
                        if (!wasInParamtag) {
                            docCommentText += line.substring(prevPos, i);
                        }

                        // New start of contents 
                        prevPos = i;
                        inParamTag = true;
                    } else if (wasInParamtag) {
                        // Non param tag start
                        prevPos = i;
                        inParamTag = false;
                    }
                }

                if (!inParamTag) {
                    docCommentText += line.substring(prevPos, cleanLinePos.limChar);
                }

                // Add line to comment text if it is not only white space line
                var newCleanPos = Comment.cleanDocCommentLine(docCommentText, false);
                if (newCleanPos) {
                    if (spacesToRemove === undefined) {
                        spacesToRemove = cleanLinePos.jsDocSpacesRemoved;
                    }
                    docCommentLines.push(docCommentText);
                }
            }

            return docCommentLines.join("\n");
        }

        static getDocCommentText(comments: Comment[]) {
            var docCommentText = new Array<string>();
            for (var c = 0 ; c < comments.length; c++) {
                var commentText = comments[c].getDocCommentTextValue();
                if (commentText !== "") {
                    docCommentText.push(commentText);
                }
            }
            return docCommentText.join("\n");
        }

        static getParameterDocCommentText(param: string, fncDocComments: Comment[]) {
            if (fncDocComments.length === 0 || !fncDocComments[0].isBlockComment) {
                // there were no fnc doc comments and the comment is not block comment then it cannot have 
                // @param comment that can be parsed
                return "";
            }

            for (var i = 0; i < fncDocComments.length; i++) {
                var commentContents = fncDocComments[i].content;
                for (var j = commentContents.indexOf("@param", 0); 0 <= j; j = commentContents.indexOf("@param", j)) {
                    j += 6;
                    if (!Comment.isSpaceChar(commentContents, j)) {
                        // This is not param tag but a tag line @paramxxxxx
                        continue;
                    }

                    // This is param tag. Check if it is what we are looking for
                    j = Comment.consumeLeadingSpace(commentContents, j);
                    if (j === -1) {
                        break;
                    }

                    // Ignore the type expression
                    if (commentContents.charCodeAt(j) === CharacterCodes.openBrace) {
                        j++;
                        // Consume the type
                        var charCode = 0;
                        for (var curlies = 1; j < commentContents.length; j++) {
                            charCode = commentContents.charCodeAt(j);
                            // { character means we need to find another } to match the found one
                            if (charCode === CharacterCodes.openBrace) {
                                curlies++;
                                continue;
                            }

                            // } char
                            if (charCode === CharacterCodes.closeBrace) {
                                curlies--;
                                if (curlies === 0) {
                                    // We do not have any more } to match the type expression is ignored completely
                                    break;
                                } else {
                                    // there are more { to be matched with }
                                    continue;
                                }
                            }

                            // Found start of another tag
                            if (charCode === CharacterCodes.at) {
                                break;
                            }
                        }

                        // End of the comment
                        if (j === commentContents.length) {
                            break;
                        }

                        // End of the tag, go onto looking for next tag
                        if (charCode === CharacterCodes.at) {
                            continue;
                        }

                        j = Comment.consumeLeadingSpace(commentContents, j + 1);
                        if (j === -1) {
                            break;
                        }
                    }

                    // Parameter name
                    if (param !== commentContents.substr(j, param.length) || !Comment.isSpaceChar(commentContents, j + param.length)) {
                        // this is not the parameter we are looking for
                        continue;
                    }

                    // Found the parameter we were looking for
                    j = Comment.consumeLeadingSpace(commentContents, j + param.length);
                    if (j === -1) {
                        return "";
                    }

                    var endOfParam = commentContents.indexOf("@", j);
                    var paramHelpString = commentContents.substring(j, endOfParam < 0 ? commentContents.length : endOfParam);

                    // Find alignement spaces to remove
                    var paramSpacesToRemove: number = undefined;
                    var paramLineIndex = commentContents.substring(0, j).lastIndexOf("\n") + 1;
                    if (paramLineIndex !== 0) {
                        if (paramLineIndex < j && commentContents.charAt(paramLineIndex + 1) === "\r") {
                            paramLineIndex++;
                        }
                    }
                    var startSpaceRemovalIndex = Comment.consumeLeadingSpace(commentContents, paramLineIndex);
                    if (startSpaceRemovalIndex !== j && commentContents.charAt(startSpaceRemovalIndex) === "*") {
                        paramSpacesToRemove = j - startSpaceRemovalIndex - 1;
                    }

                    // Clean jsDocComment and return
                    return Comment.cleanJSDocComment(paramHelpString, paramSpacesToRemove);
                }
            }

            return "";
        }
    }
}
