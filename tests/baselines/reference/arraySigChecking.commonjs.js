var myVar;
var strArray = [myVar.voidFn()];

var myArray;
myArray = [[1, 2]];

// regression for 604980
function isEmpty(l) {
    return l.length === 0;
}

isEmpty([]);
isEmpty(new Array(3));
isEmpty(new Array(3));
isEmpty(['a']);
