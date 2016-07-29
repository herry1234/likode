/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    findnextwordfromdict(s);
    console.log("true");
};
var teststring = "leectcode";
var wordDict = ["leet", "code", "lee", "le"];
var test = function () {

    wordBreak(teststring, wordDict);
}
function findnextwordfromdict(s) {
    if (s == "") return;
    var array = s;
    for (var index = 0; index < array.length; index++) {
        var left = array.substring(0, index);
        if (isindict(left)) {
            console.log(left);
            var right = array.substring(left.length);
            if (isindict(right)) {
                console.log("found last!");
                return
            } else {
                findnextwordfromdict(right);
            }

        }
    }
}
function isindict(s) {
    for (var j = 0; j < wordDict.length; j++) {
        var element = wordDict[j];
        if (element == s) return true
    }
    return false;
}

function findwordfromdict(s) {
    var ret = [];
    for (var index = 0; index < s.length; index++) {
        for (var j = 0; j < wordDict.length; j++) {
            var element = wordDict[j];
            if (element == s.substring(0, index)) ret.push(element);
        }
    }
    return ret;
}

var test_findwordfromdict = function () {
    console.log(findwordfromdict("leetcode"));
}
var test_isindict = function () {
    console.log(isindict('lee'));
    console.log(isindict('laee'));
}
// test_isindict();
// test_findwordfromdict();
test();