/// <reference path="fourslash.ts" />

//// /*addC*/
//// interface G<T, U> { }
//// var v2: G<{ a: /*checkParam*/string }, C>;

goTo.marker('addC');
edit.insert('interface C { }');

goTo.marker('checkParam');
verify.quickInfoExists();
