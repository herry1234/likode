/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var foo = {};
    for (var j = 0; j < nums.length; j++) {
        if ( typeof foo[nums[j]] !== 'undefined'  && ((j - foo[nums[j]]) <= k)) {
            return true;
        } else {
            foo[nums[j]] = j;
        }
    }
    return false;
};

function test_containsNearbyDuplicate() {
    console.log(containsNearbyDuplicate([8, 3, 4, 6, 8, 10], 3));
    console.log(containsNearbyDuplicate([8, 3, 6, 8, 10], 3));
}

test_containsNearbyDuplicate();