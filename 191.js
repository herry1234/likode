/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var m = n;
    var ret = 0;
    for (var i = 0; i <= 31; i++) {
        if (m & 1 == 1) ret++;
        m = m >> 1;
    }
    return ret;
};

console.log(hammingWeight(11));
console.log(hammingWeight(2147483648));
