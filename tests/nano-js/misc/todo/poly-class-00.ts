class Foo<A, B> {

	constructor(public x: A, y: B) { }

	public a: A;

	public b: B;

	private c: A;

}

var f = new Foo<number, string>(1, "a");


function foo(a: Foo<number, string>, b: Foo<{}, {}>) {

}
