
///<reference path='..\typescript.ts' />

module TypeScript {

	export class Pair<A, B> {
		constructor(private _fst: A, private _snd: B) { }

		public fst(): A {
			return this._fst;
		}

		public snd(): B {
			return this._snd;
		}
	}

	export enum AnnotKind {
		RawMeas,     // Measure
		RawBind,     // Function / variable binder
		RawExtern,   // External declaration
		RawType,     // Data type definition
		RawClass,	 // Class annotations
		RawTAlias,   // Type alias
		RawPAlias,   // Predicate alias
		RawQual,     // Qualifier
		RawInvt      // Invariant
	}

	export class NanoAnnotation {

		public isGlob(): boolean {
			throw new Error("ABSTRACT: NanoAnnotation.isGlob.")
		}

		/** This will create a NanoAnnoation object based on user annotations */
		public static createAnnotation(s: string): NanoAnnotation {
			var pair = NanoAnnotation.stringTag(s);
			switch (pair.fst()) {
				case AnnotKind.RawBind: 
					return new NanoBindAnnotation(pair.fst(), pair.snd()); 
				case AnnotKind.RawClass:
					return new NanoExplicitClassAnnotation(pair.snd());
				default:
					return new NanoGlobalAnnotation(pair.fst(), pair.snd()); 
			}
		} 

		//These would have been protected ...
		public _tag: AnnotKind;
		public _content: string;

		constructor(tag: AnnotKind) {
			this._tag = tag;
		}

		public getContent(): string {
			throw new Error("ABSTRACT: NanoAnnotation.getContent");
		}

		public getKind(): AnnotKind {
			return this._tag;
		}

		public toObject(): any {
			var obj = {};
			obj[AnnotKind[this._tag]] = this._content;
			return obj;
		}

		private static stringTag(s: string): Pair<AnnotKind, string> {
			var tokens = NanoAnnotation.stringTokens(s);
			if (tokens && tokens.length > 0) {
				var kind = NanoAnnotation.toSpecKind(tokens[0]);
				if (kind === AnnotKind.RawBind) {
					return new Pair(AnnotKind.RawBind, tokens.join(" "));
				}
				else {
					return new Pair(NanoAnnotation.toSpecKind(tokens[0]), tokens.slice(1).join(" "));
				}
			}
			throw new Error("NanoAnnotation could not parse string tag: " + s);
		}

		/** @stringTokens return an array of string containing \the tokens of the input string */
		private static stringTokens(s: string): string[] {
			return s.split(" ").filter(s => s.length > 0);
		}

		private static toSpecKind(s: string): AnnotKind {
			switch (s) {
				case "measure": return AnnotKind.RawMeas;
				case "qualif": return AnnotKind.RawQual;
				case "type": return AnnotKind.RawType;
				case "alias": return AnnotKind.RawTAlias;
				case "class": return AnnotKind.RawClass;
				case "predicate": return AnnotKind.RawPAlias;
				case "invariant": return AnnotKind.RawInvt;
				case "extern": return AnnotKind.RawExtern;
				default: return AnnotKind.RawBind;
			}
		}
	}

	export class NanoBindAnnotation extends NanoAnnotation {

		/** Returns true if this is a global annotation (can float to top-level). 
			Compared to function / variable binders that need to be local to 
			particular AST nodes. */
		public isGlob(): boolean {
			return true;
		}

		private _binderName: string = null;

		public getBinderName(): string {
			if (this._binderName)
				return this._binderName;
			var content = this.getContent();
			var bs = content.split("::");
			if (bs && bs.length == 2) {
				var lhss = bs[0].split(" ").filter(s => s.length > 0);
				if (lhss && lhss.length == 1) {
					this._binderName = lhss[0];
					return this._binderName;
				}
				else {
					throw new Error("bad nano-js binder(1): " + content);
				}
			}
			throw new Error("bad nano-js binder(0): " + content);
		}

		//constructor(t: AnnotKind, s: string) {
		constructor(tag: AnnotKind, content: string) {
			super(tag);
			this._content = content;
		}

		public getContent(): string {
			return this._content;
		}

	}

	export class NanoClassAnnotation extends NanoAnnotation { }


	/** A class annotation that is inferred bassed on TypeScript information. */
	export class NanoInferredClassAnnotation extends NanoClassAnnotation {

		/** This is not a global annotation (cannot float to top-level). 
			Needs to stick around a class declaration. */
		public isGlob(): boolean {
			return false;
		}

		private toString(): string {
			var r = "";
			r += "class ";
			r += this._className.text();
			if (this._typeParams && this._typeParams.length > 0) {
				r += " <";
				r += this._typeParams.map(t => t.name.text()).join(", ");
				r += ">";
			}
			if (this._parent) {
				r += " extends ";
				r += this._parent.toString();
			}
			return r;
		}

		public toObject() {
			var obj = {};
			obj[AnnotKind[this._tag]] = this.toString();
			return obj;
		
		}

		constructor(private _className: Identifier, private _typeParams: TypeParameter[], private _parent: NanoType) {
			super(AnnotKind.RawClass);
		}

		public getContent(): string {
			if (!this._content) {
				this._content = this.toString();
			}
			return this._content;
		}

	}

	/** A class annotation that is provided by the user */
	export class NanoExplicitClassAnnotation extends NanoClassAnnotation {

		/** This is not a global annotation (cannot float to top-level). 
			Needs to stick around a class declaration. */
		public isGlob(): boolean {
			return false;
		}

		constructor(content: string) {
			super(AnnotKind.RawClass);
			this._content = content;
		}

		public getContent(): string {
			return this._content;
		}

	}


	export class NanoGlobalAnnotation extends NanoAnnotation {

		public isGlob(): boolean {
			return true;
		}

		constructor(tag: AnnotKind, content: string) {
			super(tag);
			this._content = content;
		}

		public getContent(): string {
			return this._content;
		}

	}

}
