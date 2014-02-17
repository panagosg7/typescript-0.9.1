class Greeter {
  
  a /*@ string */;

  private b /*@ number */;
  
  private c /*@ number */ = 1;
  
  public  d /*@ number */;
  
  private static e /*@ { } */ = { };
  
  /*@ constructor :: (message: string) => void */
  constructor(message) { }
  /*@ greet1 :: () => void */
  private greet1() { }

  /*@ greet2 :: () => void */
  greet2() { }

  /*@ greet3 :: () => void */
  public greet3() { }
}
