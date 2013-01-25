///<reference path='ISyntaxElement.ts' />
///<reference path='SyntaxNode.ts' />

interface ISeparatedSyntaxList extends ISyntaxElement {
    itemAndSeparatorCount();
    itemOrSeparatorAt(index: number): ISyntaxNodeOrToken;

    toItemAndSeparatorArray(): ISyntaxNodeOrToken[];
    toItemArray(): ISyntaxNodeOrToken[];

    itemCount();
    itemAt(index: number): ISyntaxNodeOrToken;

    separatorCount();
    separatorAt(index: number): ISyntaxToken;

    insertChildrenInto(array: ISyntaxElement[], index: number): void;
}