
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
		Meas,     // Measure
		Bind,     // Function / variable binder
		Extern,   // External declaration
		Type,     // Data type definition
		TAlias,   // Type alias
		PAlias,   // Predicate alias
		Qual,     // Qualifier
		Invt      // Invariant
	}

	export class NanoAnnotation {

		public isGlob(): boolean {
			throw new Error("ABSTRACT: NanoAnnotation.isGlob.")
		}

		public static createAnnotation(s: string) {
			var pair = NanoAnnotation.stringTag(s);
			switch (pair.fst()) {
				case AnnotKind.Bind: 
					return new NanoBindAnnotation(pair.fst(), pair.snd()); 
				default:
					return new NanoGlobalAnnotation(pair.fst(), pair.snd()); 
			}
		} 

		constructor(private _tag: AnnotKind, private _content: string) { }

		public getContent(): string {
			return this._content;
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
				if (kind === AnnotKind.Bind) {
					return new Pair(AnnotKind.Bind, tokens.join(" "));
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
				case "measure": return AnnotKind.Meas;
				case "qualif": return AnnotKind.Qual;
				case "type": return AnnotKind.Type;
				case "alias": return AnnotKind.TAlias;
				case "predicate": return AnnotKind.PAlias;
				case "invariant": return AnnotKind.Invt;
				case "extern": return AnnotKind.Extern;
				default: return AnnotKind.Bind;
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

		constructor(t: AnnotKind, s: string) {
			super(t, s);
		}

	}

	export class NanoGlobalAnnotation extends NanoAnnotation {

		public isGlob(): boolean {
			return true;
		}
		constructor(t: AnnotKind, s: string) {
			super(t, s);
		}

	}



}
