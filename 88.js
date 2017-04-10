/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    //starting from the last one on nums1.
    var i = m + n - 1;
    var j1 = m - 1;
    var j2 = n - 1;
    while (j2 >= 0) {
        if (nums1[j1] == undefined || nums2[j2] > nums1[j1]) {
            nums1[i--] = nums2[j2--];
        } else {
            nums1[i--] = nums1[j1--];
        }
    }
    console.log(nums1);

}
var merge2 = function (nums1, m, nums2, n) {
    var result = [];
    var right = 0;
    for (var index = 0; index < n; index++) {
        var element = nums2[index];
        var array = nums1.slice(right);
        var i = search(array, element);
        var left = array.slice(0, i);
        for (var j = array.length; j > i; j--) {
            array[j] = array[j - 1];
        }
        array[i] = element;
        right = right + i;
        console.log(right);
        result = result.concat(left, element);
    }
    console.log(result);
};

function test() {
    var nums1 = [1, 2, 4, 8, 10], nums2 = [3, 5, 6, 9, 12];
    merge(nums1, 4, nums2, 5);
}

function search(array, value) {
    //return the index of the position needs to be inserted
    if (value < array[0]) return 0;
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (index == array.length - 1) return index + 1;
        if (value >= element && value <= array[index + 1]) return index + 1;
    }
}
function insertValue(value, array) {
    var i = search(array, value);
    var m = array.length;
    for (var index = m; index > i; index--) {
        array[index] = array[index - 1];
    }
    array[i + 1] = value;
    return array;
}

function test_search() {
    var arr = [1, 3, 5, 7];
    console.log(search(arr, 0));
    console.log(search(arr, 6));
    console.log(search(arr, 8));
}
function test_insert() {
    var arr = [1, 3, 5, 7];
    console.log(insertValue(-1, arr));
    console.log(insertValue(4, arr));
    console.log(insertValue(6, arr));
    console.log(insertValue(10, arr));
}
// test_search();
// test_insert();
test();
