/*@ foo :: ({number | v > 0}) => number */
function foo(x) { 
  return x; 
};

/*@ bar :: () => void */
function bar() { 
	foo(10);
};
