
///<reference path='..\typescript.ts' />

module TypeScript {

	export interface Serializable {
		toString(): string;
	}

	export class NanoType implements Serializable {
		public toString(): string {
			throw new Error("BUG: Abstract in NanoType toString()");
		}
	}

	export class BoundedNanoType {

		constructor(private symbol: string, private type: Serializable) { }

		public toString() {
			return this.symbol + ": " + this.type.toString();
		}

	}

	export class TError extends NanoType {
		constructor(private msg: string) {
			super();
		}

		public toString(): string {
			return "Error type: " + this.msg;
		}

	}

	export class TAnyC extends NanoType {

		public toString(): string {
			return "top";
		}

	}

	export var TAny = new TAnyC();

	export class TNumberC extends NanoType {

		public toString(): string {
			return "number";
		}

	}

	export var TNumber = new TNumberC();

	export class TStringC extends NanoType {

		public toString(): string {
			return "string";
		}

	}

	export var TString = new TStringC();

	export class TBooleanC extends NanoType {

		public toString(): string {
			return "boolean";
		}

	}

	export var TBoolean = new TBooleanC();

	export class TVoidC extends NanoType {

		public toString(): string {
			return "void";
		}

	}

	export var TVoid = new TVoidC();



	export class TField {
		constructor(public symbol: string, public type: Serializable) { }
	}


	export class TObject extends NanoType {

		constructor(public fields: TField[]) {
			super();
		}

		public toString(): string {
			var s = "";
			s += "{ ";
			s += this.fields.map(f => (f.symbol + ": " + f.type.toString())).join(", ");
			s += " }";
			return s;
		}

	}

	export class TFunctionSigMember {

		constructor(private tParams: TTypeParam[], private argTs: BoundedNanoType[], private returnT: Serializable) { }

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

	export class TFunctionSig extends NanoType {

		constructor(private signatures: TFunctionSigMember[]) {
			super();
		}

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

	export class TArray extends NanoType {

		constructor(private eltT: Serializable) {
			super();
		}

		public toString(): string {
			return "[ " + this.eltT.toString() + " ]";
		}

	}

	export class TTypeReference extends NanoType {

		constructor(private name: string, private params: TTypeParam[]) {
			super();
		}

		public toString(): string {
			var s = "";
			s += "#" + this.name;
			if (this.params && this.params.length > 0) {
				s += "[" + this.params.map(t => t.toString()).join(", ") + "]";
			}
			return s;
		}

	}

	export class TInterface implements Serializable {

		constructor(private ref: TTypeReference, private type: TObject) { }

		public toString() {
			return "type " + this.ref.toString() + " " + this.type.toString();
		}

	}

	export class TTVar extends NanoType {

		constructor(private name: string) {
			super();
		}

		public toString() {
			return name;
		}
	}


	export class TTypeParam {
		constructor(public name: string) { }

		public toString(): string {
			return this.name;
		}
	}

	export class TTDef implements Serializable {
		constructor(public name: string, public pars: TTypeParam[], private proto: TParentType, private elts: TElt[]) { }

		public toString(): string {
			var s = "";
			s += name;
			s += " ";
			if (this.pars && this.pars.length > 0) {
				s += "[ " + this.pars.map(a => a.toString()).join(", ") + " ] ";
			}
			//XXX: not implemented yet in the nano parser
			if (this.proto) {
				s += this.proto.toString
			}
			return ;
		}

	}

	export class TParentType implements Serializable {
		constructor(private name: string, private targs: NanoType[]) { }

		public toString(): string {
			return this.name + " " + this.targs.map(a => a.toString()).join(", ");			
		}
	}

	export class TElt implements Serializable {
		constructor(private name: string,
			private access: boolean,			// private / public
			private mutability: boolean,		// mutability modifier
			private type: NanoType) { }

		//NOTE: mutability: by default interface fields are mutable.

		public toString(): string {
			return this.name + ": "	+ this.type.toString();
		}
	}

}