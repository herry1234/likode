/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var ret = sum(getDigits(n));
    if (ret == 1) {
        return true;
    }
    else return isHappy(ret);
};

function getDigits(n) {
    //n > 0
    var i = Math.round(Math.log10(n));
    var m = n;
    var result = [];
    for (var index = 0; index <= i; index++) {
        // console.log(m % 10);
        result.push(m % 10);
        m = Math.floor(m / 10);
    }
    console.log(result);
    return result;
}

function sum(array) {
    var sum = 0;
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        sum += Math.pow(element, 2);
    }
    console.log(sum);
    return sum;
}
// getDigits(236);
// sum(getDigits(236));
// sum(getDigits(100));
// sum(getDigits(19));
// sum(getDigits(82));
// sum(getDigits(68));
console.log(isHappy(19));