/// <reference path="fourslash.ts" />

////class Foo { static bar() { return "x"; } }
////var baz = Foo/**/;
/////*1*/baz.concat("y");

goTo.marker();
// Bug 686879
// edit.insert(".b");
// verify.not.errorExistsAfterMarker("1");
