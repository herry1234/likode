/**
 * 
 * [1,2,4,9] sum=8, NO
 * [1,2,4,4] sum=8, Yes
 */

function hasPairOfSum(arr, sum) {
    // array doesn't have to be sorted
    //brutal search,
    // for (var i = 0; i < arr.length; i++) {
    //     for (var j = i + 1; j < arr.length; j++) {
    //         if (arr[j] + arr[i] == sum) return true;
    //     }
    // }

    var foo = {};
    for(var i=0;i< arr.length;i++) {
        var comp = sum - arr[i];
        if(foo[comp]) return true;
        else foo[arr[i]] = i;
    }
    return false;
}

console.log(hasPairOfSum([1,2,4,9],8));
console.log(hasPairOfSum([1,2,4,4],8));
console.log(hasPairOfSum([1,2,3,5,9],8));