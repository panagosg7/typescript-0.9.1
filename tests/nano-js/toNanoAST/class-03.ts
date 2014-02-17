/*@ assert : (boolean) => void */
function assert(x: boolean) { };


class Foo<A> { 

  /*@ f :: A */
  public f = 1;
  
  /*@ (x:A) => void */
  constructor(x) {
    this.f = x;
  }

}

var a = new Foo(1);

assert(a.f == 1);
