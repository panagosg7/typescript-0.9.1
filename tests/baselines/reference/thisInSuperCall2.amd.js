var __extends = this.__extends || function (d, b) {
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
    function Foo() {
        _super.call(this, this);
    }
    return Foo;
})(Base);
var Foo2 = (function (_super) {
    __extends(Foo2, _super);
    function Foo2() {
        _super.call(this, this);
        this.x = 0;
    }
    return Foo2;
})(Base);