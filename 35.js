/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0 

*/
const testset = [1, 3, 5, 6];
const target = 5;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert_O_n = function (nums, target) {
    //search from 1 to n
    let p = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] < target) {
            p = i;
        }
    }
    return p + 1;
    //modified binary search
};
var searchInsert = function (nums, target) {
    //modified binary search
    let p = 0;
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        p = (end + start) >>> 1;
        // console.log(" ",start,end,p);
        if (nums[p] === target) {
            return p;
        } else if (nums[p] < target) {
            start = p+1;
        } else if (nums[p] > target) {
            end = p-1;
        }
    }
    return start;

};
console.log(searchInsert(testset, target))