
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

	export class TVoidC implements NJSType {

		public toString(): string {
			return "void";
		}

	}

	export var TVoid = new TVoidC();



	export class TField {
		constructor(public symbol: string, public type: NJSType) { }
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

	export class TFunctionSigMember {

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

	export class TFunctionSig implements NJSType {

		constructor(private signatures: TFunctionSigMember[]) { }

		public toString(): string {
			if (this.signatures && this.signatures.length > 0) {
				if (this.signatures.length == 1) {
					return this.signatures[0].toString();
				}
				else {
					return "\n" + this.signatures.map(s => "\t/\\ " + s.toString()).join("\n");
				}

			}
		}

	}

	export class TArray implements NJSType {

		constructor(private eltT: NJSType) { }

		public toString(): string {
			return "[ " + this.eltT.toString() + " ]";
		}

	}

	export class TTypeReference implements NJSType {

		constructor(private name: string, private params: TTypeParam[]) { }

		public toString(): string {
			var s = "";
			s += this.name;
			if (this.params && this.params.length > 0) {
				s += "[ " + this.params.map(t => t.toString()).join(", ") + " ]";
			}
			return s;
		}

	}

	export class TInterface implements NJSType {

		constructor(private ref: TTypeReference, private type: TObject) { }

		public toString() {
			return "type " + this.ref.toString() + " " + this.type.toString();
		}

	}

	export class TTypeParam {
		constructor(public name: string) { }

		public toString(): string {
			return this.name;
		}
	}

}