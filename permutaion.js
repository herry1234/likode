function foo() {
    const nums = [1, 2, 3, 4];
    permutation_r(nums, nums, []);
    permutation_bt(nums, []);

}

let counter = 0;
function permutation_r(nums, remains, tmplist) {
    //console.log('remains',remains,'header',head);
    if (remains.length == 0) {
        console.log(tmplist);
        counter++;
        return;
    }
    for (var j = 0; j < remains.length; j++) {
        var first = remains[j];
        let newnums = remains.slice(0, j).concat(remains.slice(j + 1));
        //let tmplist2 = tmplist.concat(first);
        permutation_r(nums, newnums, tmplist.concat(first));
        //tmplist.pop(first);
    }
}

function permutation_bt(nums, tmplist) {
    //console.log('remains',remains,'header',head);
    if (tmplist.length == nums.length) {
        console.log(tmplist);
        counter++;
        return;
    }
    for (var j = 0; j < nums.length; j++) {
        if (tmplist.includes(nums[j])) continue;
        tmplist.push(nums[j]);
        permutation_bt(nums, tmplist);
        tmplist.pop(nums[j]);
    }
}
foo();
console.log('total', counter);