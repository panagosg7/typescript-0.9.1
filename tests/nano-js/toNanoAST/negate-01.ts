
/*@ negate :: (x: {v: number | v > 0} + boolean) =>  { v: number | v < 0 } + boolean */

function negate(x: any): any {
  if (typeof(x) == "number") {
    return <any>(0-x);
  } 
  else {
    return <any>!x;
  }
  
}

