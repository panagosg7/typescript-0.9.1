
class BA { 

  /*@ f :: string */
  public f: string;
  
  /*@ constructor :: (x:number) => void */
  constructor(x: number) {
    
  }
}

class BB extends BA {

  constructor(public x: string, public y: number) {
    super(1);
  }

}


//Should infer: "class A<R,S>"

class A<R,S> { 

  /*@ f:: S */
  public f: S;

  /*@ foo:: (R) => void */
  public foo(x: R) {

  } 
  
  /*@ constructor :: (x:A) => void */
  constructor(x: R) {
    
  }
}

/*@ class B <X, Y, Z> extends A<{ number | v > 0 } , Z> */
class B<X, Y, Z> extends A<number, Z> {

  constructor(public x: X, public y: Y) {
    super(1);
  }

  public ggg(y: Z) {

  }

}

var b = new B<string, boolean, number>("", true);

function fooooo() { }

var a =  1;

//assert(a.f == 1);
