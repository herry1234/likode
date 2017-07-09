/*
A peak element is an element that is greater than its neighbors.

Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

click to show spoilers.
Note:

Your solution should be in logarithmic complexity.


*/

const test_set = [1, 2, 3, 1]
var findPeakElement = function (nums) {
    var output = [];
    for (var index = 0; index < nums.length; index++) {
        var element = nums[index];
        var left, right;
        if (index === 0) {
            left = Number.MIN_VALUE
        } else left = nums[index - 1];
        if (index === nums.length) {
            right = Number.MIN_VALUE;
        } else right = nums[index + 1]
        if (element > left && element > right) {
            console.log('peak found');
            output.push(index);
        }

    }
    return output;
};

console.log(findPeakElement(test_set));