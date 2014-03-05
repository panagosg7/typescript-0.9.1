
///<reference path='..\typescript.ts' />

module TypeScript {

	export interface NanoType {
		toString(): string;
	}

	export class BoundedNanoType {

		constructor(private symbol: string, private type: NanoType) { }

		public toString() {
			return this.symbol + ": " + this.type.toString();
		}

	}

	export class TError implements NanoType {
		constructor(private msg: string) { }

		public toString(): string {
			return "Error type: " + this.msg;
		}

	}

	export class TAnyC implements NanoType {

		public toString(): string {
			return "top";
		}

	}

	export var TAny = new TAnyC();

	export class TNumberC implements NanoType {

		public toString(): string {
			return "number";
		}

	}

	export var TNumber = new TNumberC();

	export class TStringC implements NanoType {

		public toString(): string {
			return "string";
		}

	}

	export var TString = new TStringC();

	export class TBooleanC implements NanoType {

		public toString(): string {
			return "boolean";
		}

	}

	export var TBoolean = new TBooleanC();

	export class TVoidC implements NanoType {

		public toString(): string {
			return "void";
		}

	}

	export var TVoid = new TVoidC();



	export class TField {
		constructor(public symbol: string, public type: NanoType) { }
	}


	export class TObject implements NanoType {

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

		constructor(private tParams: TTypeParam[], private argTs: BoundedNanoType[], private returnT: NanoType) { }

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

	export class TFunctionSig implements NanoType {

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

	export class TArray implements NanoType {

		constructor(private eltT: NanoType) { }

		public toString(): string {
			return "[ " + this.eltT.toString() + " ]";
		}

	}

	export class TTypeReference implements NanoType {

		constructor(private name: string, private params: TTypeParam[]) { }

		public toString(): string {
			var s = "";
			s += this.name;
			if (this.params && this.params.length > 0) {
				s += "<" + this.params.map(t => t.toString()).join(", ") + ">";
			}
			return s;
		}

	}

	export class TInterface implements NanoType {

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