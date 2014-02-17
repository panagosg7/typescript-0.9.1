/*@ assert :: (boolean) => void */
function assert(x) { }

class BankAccount { 

  /*@ f :: { number | v > 0 } */
  public f = 1;

  /*@ g :: { string | v = "a" } */
  public g = "a";
  
  /*@ constructor :: (x: { number | v > 0 } ) => void */
  constructor(x) {
    assert( x > 0 );
    assert(this.g == "a");
  }

}

var ba = new BankAccount(1);

assert(ba.g == "a");
