class BankAccount { 

  /*@ f :: { number | v > 0 } */
  public f = 1;

  /*@ g :: { string | v = "aaaa" } */
  public g = "aaaa";
  
  /*@ constructor :: (x: { number | v > 4 } ) => void */
  constructor(x) {
    assert( x > 0 );
    assert(this.g == "aaaa");
  }

}

//var ba = new BankAccount(5);

//assert(ba.g == "aaaa");
