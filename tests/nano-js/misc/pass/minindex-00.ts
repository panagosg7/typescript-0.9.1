/// <reference path="../env/prelude.d.ts" />

function loop(b: list<number>, min: number, i: number): number {
    if (i < mylength(b)) {
        var min_ = min;
        assert(i < mylength(b));
        if (nth(b, i) < nth(b, min)) {
            min_ = i;
        }
        return loop(b, min_, i + 1)
    }
    return min;
}

function minIndex(a: list<number>): number {
    var r = loop(a, 0, 0);
    return r;
}
