function simpleFunc() {
    return "this is my simple func";
}
var simpleFuncVar = simpleFunc;

function anotherFuncNoReturn() {
}
var anotherFuncNoReturnVar = anotherFuncNoReturn;

function withReturn() {
    return "Hello";
}
var withReturnVar = withReturn;

function withParams(a) {
    return a;
}
var withparamsVar = withParams;

function withMultiParams(a, b, c) {
    return a;
}
var withMultiParamsVar = withMultiParams;

function withOptionalParams(a) {
}
var withOptionalParamsVar = withOptionalParams;

function withInitializedParams(a, b0, b, c) {
    if (typeof b === "undefined") { b = 30; }
    if (typeof c === "undefined") { c = "string value"; }
}
var withInitializedParamsVar = withInitializedParams;

function withOptionalInitializedParams(a, c) {
    if (typeof c === "undefined") { c = "hello string"; }
}
var withOptionalInitializedParamsVar = withOptionalInitializedParams;

function withRestParams(a) {
    var myRestParameter = [];
    for (var _i = 0; _i < (arguments.length - 1); _i++) {
        myRestParameter[_i] = arguments[_i + 1];
    }
    return myRestParameter;
}
var withRestParamsVar = withRestParams;

function overload1(ns) {
    return ns.toString();
}
var withOverloadSignature = overload1;

function f(n) {
}

var m2;
(function (m2) {
    function foo(n) {
    }
    m2.foo = foo;
})(m2 || (m2 = {}));

m2.foo(function () {
    var b = 30;
    return b;
});

var f2 = function () {
    return "string";
};

////[funcdecl.d.ts]
declare function simpleFunc(): string;
declare var simpleFuncVar: () => string;
declare function anotherFuncNoReturn(): void;
declare var anotherFuncNoReturnVar: () => void;
declare function withReturn(): string;
declare var withReturnVar: () => string;
declare function withParams(a: string): string;
declare var withparamsVar: (a: string) => string;
declare function withMultiParams(a: number, b, c: Object): number;
declare var withMultiParamsVar: (a: number, b: any, c: Object) => number;
declare function withOptionalParams(a?: string): void;
declare var withOptionalParamsVar: (a?: string) => void;
declare function withInitializedParams(a: string, b0, b?: number, c?: string): void;
declare var withInitializedParamsVar: (a: string, b0: any, b?: number, c?: string) => void;
declare function withOptionalInitializedParams(a: string, c?: string): void;
declare var withOptionalInitializedParamsVar: (a: string, c?: string) => void;
declare function withRestParams(a: string, ...myRestParameter: number[]): number[];
declare var withRestParamsVar: (a: string, ...myRestParameter: number[]) => number[];
declare function overload1(n: number): string;
declare function overload1(s: string): string;
declare var withOverloadSignature: {
    (n: number): string;
    (s: string): string;
};
declare function f(n: () => void): void;
declare module m2 {
    function foo(n: () => void): void;
}
declare var f2: () => string;
