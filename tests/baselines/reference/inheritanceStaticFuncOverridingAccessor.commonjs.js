var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var a = (function () {
    function a() { }
    Object.defineProperty(a, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return a;
})();
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        _super.apply(this, arguments);

    }
    b.x = function x() {
        return "20";
    };
    return b;
})(a);