var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base(a) {
    }
    return Base;
})();

var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo(x) {
        _super.call(this, this);
        this.x = x;
    }
    return Foo;
})(Base);
