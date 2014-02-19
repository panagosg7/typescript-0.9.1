class BankAccount { 

  /*@ f :: { number | v > 0 } */
  public f = 1;

  /*@ g :: { number  | v > 10 } */
  /*@ g :: { number  | v > 10 } */
  public g = 20;
  
  /*@ constructor :: (x: { number | v > 4 } ) => void */
  constructor(x: number) {
    assert( x > 0 );
    //assert(this.g == "aaaa");
  }

}

var ba = new BankAccount(5);

assert(ba.g == 21);
