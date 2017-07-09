/*

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

Seen this question in a real interview before?  


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const testData = [1, 2, 3, 4, 5, 6];
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    console.log("visit node ", root.val);
    inOrder(root.right);

}
function inOrderInsert(nums,start,end) {
    // let i = 0;
    // let start = 0, end = nums.length -1;
    if(start>end) return null;
    let p = (start+end) >>> 1;
    let root = new TreeNode(nums[p]);
    root.left = inOrderInsert(nums,start,p-1);
    root.right = inOrderInsert(nums,p+1,end);
    return root;

}
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    let root = inOrderInsert(nums,0,nums.length-1);
    inOrder(root);
};
var sortedArrayToBST_wrong = function (nums) {

    let root = new TreeNode(nums[0]);
    let queue = [];
    queue.push(root);
    for (var index = 1; index < nums.length; index += 2) {
        console.log(nums[index]);
        let node = queue.shift();
        node.left = new TreeNode(nums[index]);
        // node.left.visted = true;
        queue.push(node.left);
        if (index < nums.length - 1) {
            node.right = new TreeNode(nums[index + 1]);
            // node.right.visted = true;
            queue.push(node.right);
        }

    }

    BFS(root);

};
sortedArrayToBST(testData);



