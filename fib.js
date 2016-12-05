var util = require('util');

//Method #1 : recursive
function fib(n) {
    if (n == 0 || n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

//Method #2 : iterative
function fib_non_recursion(n) {

    var n_1 = 1, n_2 = 1, fn = 1;
    for (var i = 1; i < n; i++) {
        fn = n_2 + n_1;
        n_2 = n_1;
        n_1 = fn;
    }
    return fn;

}
//Method #3: tail-call-optimization

function fib_tco(n) {
    return fib_tco_tail(0, 1, n);
}
function fib_tco_tail(n2, n1, n) {
    if (n < 2) return n1 + n2;
    return fib_tco_tail(n1, n1 + n2, n - 1);
}

function test() {
    for (var i = 0; i < 10; i++) {
        process.stdout.write(util.format('%s ', fib_non_recursion(i)));

    }
    console.log();
    for (var i = 0; i < 10; i++) {
        process.stdout.write(util.format('%s ', fib(i)));

    }
    console.log();
    for (var i = 0; i < 10; i++) {
        process.stdout.write(util.format('%s ', fib_tco(i)));

    }
    console.log();

}
test();

