var A = (function () {
    function A() {
    }
    return A;
})();
var A;
(function (A) {
    A.a = 10;
})(A || (A = {}));

var B;
(function (B) {
    var Y = A;
})(B || (B = {}));
