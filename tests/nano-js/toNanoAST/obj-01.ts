/*@ qualif PLusOne(v:number, w: number)     : v = w + 1                            */

/*@ inc :: (number) => number  */
function inc(n) {
  return n + 1;
}

var gobj 
/*@ { a: {number | v = 5}
    , b: string
    , f: (x:number) => {number | v = x + 1}
    } 
 */ = {
  a: 5,
  b: "string",
  f: inc
};

/*@ foo :: () => { number | v = 6 } */
function foo () {
  
  var ff = gobj.f;
  return ff(gobj.a);

}
