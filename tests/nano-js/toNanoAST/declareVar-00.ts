

/*@ a :: number */
/*@ ss :: number */
declare var a: number, ss: string;

var b: number;

/*@ inc :: ({number|true}) => number */
function inc(n) {
  return n + a;
}