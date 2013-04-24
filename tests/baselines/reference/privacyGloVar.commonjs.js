var m1;
(function (m1) {
    var C1_public = (function () {
        function C1_public() { }
        C1_public.prototype.f1 = function () {
        };
        return C1_public;
    })();
    m1.C1_public = C1_public;
    var C2_private = (function () {
        function C2_private() { }
        return C2_private;
    })();
    var C3_public = (function () {
        function C3_public() {
            this.C3_v11_private = new C1_public();
            this.C3_v12_public = new C1_public();
            this.C3_v13_private = new C2_private();
            this.C3_v14_public = new C2_private();
            this.C3_v21_private = new C1_public();
            this.C3_v22_public = new C1_public();
            this.C3_v23_private = new C2_private();
            this.C3_v24_public = new C2_private();
        }
        return C3_public;
    })();
    m1.C3_public = C3_public;
    var C4_public = (function () {
        function C4_public() {
            this.C4_v11_private = new C1_public();
            this.C4_v12_public = new C1_public();
            this.C4_v13_private = new C2_private();
            this.C4_v14_public = new C2_private();
            this.C4_v21_private = new C1_public();
            this.C4_v22_public = new C1_public();
            this.C4_v23_private = new C2_private();
            this.C4_v24_public = new C2_private();
        }
        return C4_public;
    })();
    var m1_v1_private;
    m1.m1_v2_public;
    var m1_v3_private;
    m1.m1_v4_public;
    var m1_v11_private = new C1_public();
    m1.m1_v12_public = new C1_public();
    var m1_v13_private = new C2_private();
    m1.m1_v14_public = new C2_private();
    var m1_v21_private = new C1_public();
    m1.m1_v22_public = new C1_public();
    var m1_v23_private = new C2_private();
    m1.m1_v24_public = new C2_private();
})(m1 || (m1 = {}));

var glo_C1_public = (function () {
    function glo_C1_public() { }
    glo_C1_public.prototype.f1 = function () {
    };
    return glo_C1_public;
})();
var glo_C3_public = (function () {
    function glo_C3_public() {
        this.glo_C3_v11_private = new glo_C1_public();
        this.glo_C3_v12_public = new glo_C1_public();
        this.glo_C3_v21_private = new glo_C1_public();
        this.glo_C3_v22_public = new glo_C1_public();
    }
    return glo_C3_public;
})();
var glo_v2_public;
var glo_v12_public = new glo_C1_public();
var glo_v22_public = new glo_C1_public();