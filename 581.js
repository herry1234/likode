/*


Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:

Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Note:

    Then length of the input array is in range [1, 10,000].
    The input array may contain duplicates, so ascending order here means <=.



*/


/**
 * @param {number[]} nums
 * @return {number}
 */

// const testData = [2, 6, 4, 8, 10, 9, 15];
const testData = [1, 2, 3, 4];
// const testData = [2,1];
var findUnsortedSubarray = function (nums) {
    //move left & right 
    let min = nums[nums.length - 1];
    let max = nums[0];
    let left = 0, right = 0;

    //if left > right,

    for (var index = 1; index < nums.length; index++) {
        let p1 = nums[index];
        let p2 = nums[nums.length - index - 1]
        max = Math.max(max, p1);
        min = Math.min(min, p2);
        if (p1 < max) {
            right = index;
        }

        if (p2 > min) {
            left = nums.length - index - 1;
        }
    }
    // console.log("debug", left, right);
    if (right <= left) return 0;
    return right - left + 1;
}

var findUnsortedSubarray_del = function (nums) {

    //Not the best solution, since it's O(n*n)
    // let left = nums[0];
    let right = nums[nums.length - 1];
    var left = nums[0];
    let left_index = 0;
    let right_index = nums.length - 1;
    for (var i = 0; i < nums.length; i++) {

        var unsorted = 0;
        for (var index = i + 1; index < nums.length; index++) {
            var element = nums[index];
            if (element < left) {
                unsorted = 1; break;
            }
        }
        if (unsorted === 0) {
            //move the left
            left = nums[i + 1];
            left_index = i + 1;
        } else {
            //got left
            left_index = i;
            break;
        }

    }

    console.log(left_index);

    for (var j = nums.length - 1; j > left_index; j--) {
        var unsorted = 0;
        for (var index = j - 1; index >= left_index; index--) {
            var element = nums[index];
            if (element > right) {
                unsorted = 1; break;
            }
        }
        if (unsorted === 0) {
            //move the right
            right = nums[j - 1];
            right_index = j - 1;
        } else {
            //got right
            right_index = j;
            break;
        }
    }
    console.log(right_index);

    return right_index - left_index + 1;

};

console.log(findUnsortedSubarray(testData));