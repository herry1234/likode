/*
 Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 ≤ i ≤ N) in this array:

    The number at the ith position is divisible by i.
    i is divisible by the number at the ith position.

Now given N, how many beautiful arrangements can you construct?

Example 1:

Input: 2
Output: 2
Explanation: 

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).

Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

Note:

    N is a positive integer and will not exceed 15.

*/
//we don't have to show the sequence. 

/**
 * @param {number} N
 * @return {number}
 */

const N = 4;
let counter = 0;
var countArrangement = function (N) {
    helper(N, [], []);
    // console.log('result 8', counter);
    return counter;
};

function helper(k, used, tmpArr) {
    // console.log('used', used, 'k', k);
    if (k === 0) {
        console.log('array', tmpArr);
        counter++;
        return;
    }
    for (var j = 1; j <= N; j++) {
        if (used[j] === true) continue;
        if (k % j !== 0 && j % k !== 0) continue;
        used[j] = true;
        tmpArr.push(j);
        helper(k - 1, used, tmpArr);
        used[j] = false;
        tmpArr.pop();
    }
}

helper(N, [], []);
console.log('result', counter);