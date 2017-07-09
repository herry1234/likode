/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

You should return [1,2,3,6,9,8,7,4,5]. 

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// const data = [
//     [1, 2, 3, 13],
//     [4, 5, 6, 16],
//     [7, 8, 9, 19]
// ];
const data = [
    [1, 2, 3],
    [4, 5, 6]
];
var spiralOrder = function (matrix) {
    let output = [];
    let columns = matrix[0].length;
    let rows = matrix.length - 1;
    let start_row = 0;
    let end_row = rows;
    let start_col = 0;
    let end_col = columns - 1;

    while (start_row <= end_row && start_col <= end_col) {
        console.log('start_row,start_col,end_row,end_col', start_row, start_col, end_row, end_col);
        for (var i = start_col; i <= end_col; i++) {
            console.log(matrix[start_row][i]);
            output.push(matrix[start_row][i])
        }

        for (var j = start_row + 1; j <= end_row; j++) {
            console.log(matrix[j][end_col]);
            output.push(matrix[j][end_col])
        }
        if (end_row != start_row) {
            for (var h = end_col - 1; h >= start_col; h--) {
                console.log(matrix[end_row][h])
                output.push(matrix[end_row][h])
            }
        }
        if (start_col != end_col) {
            for (var k = end_row - 1; k >= start_row + 1; k--) {
                console.log(matrix[k][start_col])
                output.push(matrix[k][start_col])
            }
        }
        start_col++;
        end_col--;
        start_row++;
        end_row--;
    }
    return output;
};

spiralOrder(data);