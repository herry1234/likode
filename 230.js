/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ? k ? BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function tree(v) {
    this.val = v;
    this.left = null;
    this.right = null;
    // this.visted = false;
}

var root = new tree(1);
var n1 = new tree(2);
var n2 = new tree(3);
var n3 = new tree(4);
var n4 = new tree(5);

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var num = 0;
var found = 0;
var kthSmallest = function (root, k) {
    num = 0;
    found = 0;
    helper(root, k);
    return found;
};

function helper(root, k) {
    //in-order traverse.
    if (!root) return;
    helper(root.left, k);
    console.log(++num);
    if (num == k) {
        console.log('found', root.val);
        found = root.val;
        return;
    }
    helper(root.right, k)

}

kthSmallest(root, 3);