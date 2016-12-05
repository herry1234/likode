//let's say we have array m*n, print it in transport order'
var util = require('util');
// var myArr = [[2, 3, 4, 3], [4, 5, 6, 5], [0, 9, 7, 200]];
var myArr = [];
function readfile() {
    const readline = require('readline');
    const fs = require('fs');
    const rl = readline.createInterface({
        input: fs.createReadStream('194.data')
    });

    rl.on('line', (line) => {
        // console.log(`Line from file: ${line}`);
        myArr.push(line.split(' '));
    });

    rl.on('close',() => {
        // console.log("end of file");
        print_it_order();
    })


}
function printit() {
    for (var i = 0; i < myArr.length; i++) {
        var row = myArr[i];
        for (var j = 0; j < row.length; j++) {
            // console.log(row[j]);
            process.stdout.write(util.format('%s ', row[j]));
        }
        console.log();
    }
}
function print_it_order() {
    var len = myArr[0].length;
    for (var j = 0; j < len; j++) {
        for (var i = 0; i < myArr.length; i++) {
            process.stdout.write(util.format('%s ', myArr[i][j]));
        }
        console.log();
    }
}
function testit() {
    print_it_order();
    // printit();
}
readfile();
// testit();
