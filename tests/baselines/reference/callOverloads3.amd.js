var Foo = (function () {
    function Foo(x) {
        // WScript.Echo("Constructor function has executed");
    }
    Foo.prototype.bar1 = function () {
    };
    return Foo;
})();

//class Foo(s: String);
var f1 = new Foo("hey");

f1.bar1();
Foo();
Foo("s");
