/*
 Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    var n = nums.length;;
    var expected_sum = (1 + n) * n / 2;
    for (var i = 0; i < n; i++) {
        expected_sum = expected_sum - nums[i];
    }
    return expected_sum;
};
