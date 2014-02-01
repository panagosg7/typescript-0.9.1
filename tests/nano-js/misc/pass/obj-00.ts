function foo(x: { a: number }): number {

  for (var i = 0; i < 5; i ++) {
    x.a = i;  
  }

  return x.a;

}
