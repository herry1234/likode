/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
The update(i, val) function modifies nums by updating the element at index i to val.

Example:

Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8

Note:

    The array is only modifiable by the update function.
    You may assume the number of calls to update and sumRange function is distributed evenly.

*/

/* Try #1
nums = [1, 3, 5]
const sumRange = (i, j) => {
    let sum = 0;
    for (let ii = i; ii <= j; ii++) {
        sum += nums[ii];
    }
    return sum;
}
const update = (index,num) => {
    nums[index] = num;
}
console.log(sumRange(0, 2));
update(1,2);
console.log(sumRange(0, 2));

*/

/* Following is Wrong because whenever the nums updated, the sumNums is NOT updated

let sumNums = [];
sumNums[0] = nums[0];
for(let i = 1; i < nums.length ; i++) {
    sumNums[i] = sumNums[i-1] + nums[i];
}
console.log(nums);
console.log(sumNums);
const sumRange2 = (i,j) => {
    return sumNums[j] - sumNums[i] + nums[i];
}
const update = (index,num) => {
    nums[index] = num;
}
console.log(sumRange2(0,2));

*/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    this.T = Array(nums.length + 1).fill(0);
    this.sum = function (i) {
        let j = i, sum = 0;
        while (j > 0) {
            sum += this.T[j];
            j -= j & (-j);
        }
        return sum;
        console.log(this.nums);
    }
}

NumArray.prototype.createNew = function () {
    this.nums.map((v, i) => {
        this.update(i, 2 * v)
    })
    console.log(this.T);
}



/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, newValue) {
    i++;
    let delta = newValue - this.nums[i - 1];
    let j = i;
    while (j < this.T.length) {
        this.T[j] += delta;
        j += j & (-j);
    }
}
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    i++; j++;
    return this.sum(j) - this.sum(i - 1);
};
const nums = [1, 3, 5]
var obj = new NumArray(nums)
obj.createNew();
console.log(obj.sumRange(0, 2));
return;
/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

console.log("trying #3 Using BIT tree")
/* BIT tree */
// const nums = [1, 3, 5]
// T = [0,1,4,5]

/*
const T = Array(nums.length + 1).fill(0);

const sum = (i) => {
    let j = i, sum = 0;
    while (j > 0) {
        sum += T[j];
        j -= j & (-j);
    }
    return sum;
}
const update = (i, newValue) => {
    i++;
    let delta = newValue - nums[i - 1];
    let j = i;
    while (j < T.length) {
        T[j] += delta;
        j += j & (-j);
    }
}
nums.map((v, i) => {
    update(i, 2 * v)
})
console.log(T);
console.log(sum(3));
const sumRange = (i, j) => {
    i++; j++;
    return sum(j) - sum(i - 1);
}
console.log(sumRange(0, 2));
update(1, 2);
console.log(sumRange(0, 2));

*/