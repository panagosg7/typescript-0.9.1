var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var B = (function () {
    function B() { }
    return B;
})();
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);

    }
    return C;
})(B);
var v2;
var y = v2.x;
var u = v2.a;
var z = v2.b;
////[0.d.ts]
class B<T> {
    public a: T;
    public b: T;
}
class C<T> extends B<T> {
    public x: T;
}
var v2: C<string>;
var y: string;
var u: string;
var z: string;