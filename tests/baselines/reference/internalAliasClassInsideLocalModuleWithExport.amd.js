define(["require", "exports"], function(require, exports) {
    (function (x) {
        var c = (function () {
            function c() {
            }
            c.prototype.foo = function (a) {
                return a;
            };
            return c;
        })();
        x.c = c;
    })(exports.x || (exports.x = {}));
    var x = exports.x;

    (function (m2) {
        (function (m3) {
            var c = x.c;
            m3.c = c;
            m3.cProp = new c();
            var cReturnVal = m3.cProp.foo(10);
        })(m2.m3 || (m2.m3 = {}));
        var m3 = m2.m3;
    })(exports.m2 || (exports.m2 = {}));
    var m2 = exports.m2;

    exports.d = new m2.m3.c();
});

////[internalAliasClassInsideLocalModuleWithExport.d.ts]
export declare module x {
    class c {
        public foo(a: number): number;
    }
}
export declare module m2.m3 {
    export import c = x.c;
    var cProp: x.c;
}
export declare var d: x.c;
