
/*@ qualif Ineq(v : number ): (v <= 6) */

/*@ loop :: () => { number | v = 6 } */
function loop(){  
  
  for (
  /*@ x :: { number | v < 10 } */
  /*@ y :: { number | v < 10 } */
    var x = 1, y = 2; x <= 5; x = x + 1) {
    
  }
  return x;
}

