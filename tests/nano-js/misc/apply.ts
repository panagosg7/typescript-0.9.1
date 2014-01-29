function idt<A>(x: A) { return x;}

function apply<A,B>(f: (x:A) => B, x0: A): B {
  var x1 = f(x0);
  return x1;
}

function main(x: number, y: boolean): number {
  var yr = idt(y);
  var xr = idt(x);
  var z  = 1;
  
  if (yr) {
    z = 10;
  }

  function plus(a: number): number { 
    return a + z
  };
  
  xr = apply(plus, xr);
  xr = apply(plus, xr);

  return xr;
}
 