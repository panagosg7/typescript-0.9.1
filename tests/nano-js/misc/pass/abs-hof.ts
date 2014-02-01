
/// <reference path="../../env/prelude.d.ts" />

/*@ abs :: ((number) => number, number) => number */
function abs(f: (number) => number , x: number): number {
	var r = x;
	if (x < 0) {
		r = 0 - x;
	}
	r = f(r);
	assert(r >= 0);
	return r;
}

/*@ dubble :: ({p:number | p >= 0}) => {v:number | v >= p} */
function dubble(p: number): number {
  return p + p
}

/*@ main :: (number) => {v:number | v >= 0 } */
function main(y: number): number {
	var yy = abs(dubble, y);
	assert(yy >= 0);
	return yy;
}

// p>=0  <: K?
// v>=p  <: K4
// 
// -----------------------------
// p>=0 => v >= p  <:   K? => K4
