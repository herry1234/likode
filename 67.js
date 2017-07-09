/*
 Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".



*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a.length === 0) return b;
    if (b.length === 0) return a;
    // let len = Math.max(a.length, b.length);
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        let s = a[i] ^ b[j];
        let c = a[i] & b[j];
        let sum = s ^ carry;
        let cp = s & carry;
        ret = sum + ret;
        carry = cp ^ c;
        // carry = c;
        j--;
        i--;
    }
    console.log('carry', carry);
    return carry ? carry + ret : ret;
}
var addBinary2 = function (a, b) {
    if (a == "0" && b == "0") return "0";
    var len = a.length > b.length ? a.length : b.length;
    var ret = [], final = [];
    var carryon = "0";
    for (var i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i-- , j--) {
        console.log(a[i]);
        console.log(b[j]);
        var s = binsum(a[i], b[j], carryon);
        if (s[1] == "1") {
            carryon = "1";
        } else carryon = "0";
        ret.push(s[0]);
    }
    if (carryon == "1") ret.push(carryon);
    for (var i = ret.length - 1; i >= 0; i--) {
        final.push(ret[i]);
    }
    return final.join();

};

function binsum(a, b, c) {
    if (a == undefined) a = "0";
    if (b == undefined) b = "0";
    if (c == undefined) c = "0";
    if (a == "0" && b == "0" && c == "0") return ["0", "0"]
    else if (a == "1" && b == "0" && c == "0") return ["1", "0"]
    else if (a == "0" && b == "1" && c == "0") return ["1", "0"]
    else if (a == "1" && b == "1" && c == "0") return ["0", "1"]
    else if (a == "0" && b == "0" && c == "1") return ["1", "0"]
    else if (a == "1" && b == "0" && c == "1") return ["0", "1"]
    else if (a == "0" && b == "1" && c == "1") return ["0", "1"]
    else if (a == "1" && b == "1" && c == "1") return ["1", "1"]
    else return undefined
}
function testbinsum() {
    // console.log(binsum(1,0,1));
    console.log(addBinary("11", "1"));
    console.log(addBinary("0", "1"));
}
testbinsum();
