
var testStr = "abcdabcd";
var testStr2 = "ababababab";
var testStr3 = "babababab";

var repeatedSubstringPattern = function(str) {

    var n = str.length;
    var ret = false;
    for(var i=1;i <= n/2; i++) {
        //console.log(i);
        if(n % i == 0) {
            var flag = true;
            var element = str.substr(0,i);
            for(var j = 0; j < (n/i) ; j++) {
                if(element != str.substr( i*j,i)) {
                    flag = false;
                    break;
                }
            }
        //console.log(flag);
        if(flag) {ret = true; break};
        }

    }
    return ret;
};

console.log(repeatedSubstringPattern(testStr));
console.log(repeatedSubstringPattern(testStr2));
console.log(repeatedSubstringPattern(testStr3));
