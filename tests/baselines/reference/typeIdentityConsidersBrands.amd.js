var X = (function () {
    function X() { }
    return X;
})();
var Y = (function () {
    function Y() { }
    return Y;
})();
var X_1 = (function () {
    function X_1() { }
    return X_1;
})();
var Y_1 = (function () {
    function Y_1() { }
    return Y_1;
})();
function foo(arg) {
}
var a = new Y();
var b = new X();
a = b;
foo(a);
var a2 = new Y_1();
var b2 = new X_1();
function foo2(arg) {
}
a2 = b2;
foo2(a2);