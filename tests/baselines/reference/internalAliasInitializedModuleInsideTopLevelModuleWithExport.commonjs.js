(function (a) {
    (function (b) {
        var c = (function () {
            function c() {
            }
            return c;
        })();
        b.c = c;
    })(a.b || (a.b = {}));
    var b = a.b;
})(exports.a || (exports.a = {}));
var a = exports.a;

var b = a.b;
exports.b = b;
exports.x = new exports.b.c();


////[0.d.ts]
export declare module a.b {
    class c {
    }
}
export import b = a.b;
export declare var x: a.b.c;
