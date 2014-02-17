class A {

  /*@ constructor :: (a: number) => void */
  constructor(a: number) { }

  /*@    a :: { number | v > 5 } */
  public a = 10;

  public foo() {
    return 2;  
  }

}

class B extends A {

  /*@ constructor :: () => void */
  constructor() {
    super(2);
  }
  /*@ b :: { number | v > 5 } */ 
  public b = 10;

  /*@ foo :: ( ) => { number | v > 5 } */
  public foo() {
    return 10;  
  }

}
