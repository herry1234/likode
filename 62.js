/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

*/

var uniquePaths = function (m, n) {
    return jiecheng(m + n - 2) / jiecheng(m - 1) / jiecheng(n - 1);
};
function jiecheng(n) {
    var ret = 1;
    for (var i = 1; i <= n; i++) {
        ret = ret * i;
    }
    return ret;
}
console.log(uniquePaths(3, 7));
