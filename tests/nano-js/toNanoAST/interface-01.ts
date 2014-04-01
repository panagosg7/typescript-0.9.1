
interface IA<T> {
  f: T;

  /*@ g :: { number | v > 0 } */
  g: number;
}

/* interface C<T> extends #A<{number | v <0 }> */
interface IC<T> extends IA<number> {
  minChar: number;
  limChar: number;
  trailingTriviaWidth: number;
}
