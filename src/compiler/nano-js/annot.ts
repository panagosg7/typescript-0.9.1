
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

	export function annoKindIsGlob(ak: AnnotKind) {
		return ak !== AnnotKind.Bind;
	}

	export class NanoAnnotation {

		private _tag: AnnotKind;
		private _content: string;

		/** Returns true if this is a global annotation (can float to top-level). 
        Compared to function / variable binders that need to be local to 
        particular AST nodes. */
		public isGlob(): boolean {
			return annoKindIsGlob(this._tag);
		}

		constructor(public s: string) {
			var pair = NanoAnnotation.stringTag(s);
			this._tag = pair.fst();
			this._content = pair.snd();
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
				if (annoKindIsGlob(kind)) {
					return new Pair(NanoAnnotation.toSpecKind(tokens[0]), tokens.slice(1).join(" "));
				}
				else {
					return new Pair(AnnotKind.Bind, tokens.join(" "));
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

}
