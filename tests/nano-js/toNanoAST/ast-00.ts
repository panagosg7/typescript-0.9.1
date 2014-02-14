
class AST {
  public structuralEquals(a: AST, b: boolean): boolean {
    return true;
  }
}
class Emitter {
  public emitSuperReference(): void  { }
}
class ParenthesizedExpression extends AST { }

enum NodeType {
  SuperExpression
}


class SuperExpression extends AST {
  public nodeType(): NodeType {
    return NodeType.SuperExpression;
  }

  public emitWorker(emitter: Emitter) {
    emitter.emitSuperReference();
  }

  public structuralEquals(ast: ParenthesizedExpression, includingPosition: boolean): boolean {
    return super.structuralEquals(ast, includingPosition);
  }
}

