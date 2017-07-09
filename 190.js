/*

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer

*/


// const testData = 43261596;
const testData = 2147483648;//100000...00
// const testData = 2;
//0011 1100
//1011 1100

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits2 = function (n) {
    //get the N th bit of integer
    let ret = 0;
    for (var index = 1; index < 31; index++) {
        let bit = (n & (1 << index)) >> index;
        ret += (bit << (31 - index));
    }
    if (n % 2 == 1) ret += 2147483648;
    if (n >= 2147483648) ret += 1;
    return ret;
};

var reverseBits = function (n) {
    n = (n >>> 16) | (n << 16);
    n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
    n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
    n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
    n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
    // console.log(n & 0x80000000);
    // if((n & 0x80000000) === 0x80000000) {
    //     console.log("***")
    // }
    if(n<0) n += 4294967296;
    return n;
};


console.log(reverseBits(1));