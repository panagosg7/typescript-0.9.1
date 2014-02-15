class A {

  /*@ (a: number) => void */
  /*@ (a: number) => void */
  constructor(a: number) { }

  public a /*@ { number | v > 0 } */ = 10;

  public foo() {
    return 2;  
  }

}

class B extends A {

  /*@ () => void */
  constructor() {
    super(2);
  }

  public b /*@ { number | v > 5 } */ = 10;

  /*@ ( ) => { number | v > 5 } */
  public foo() {
    return 10;  
  }

}
