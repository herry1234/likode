/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_v1 = function (root, p, q) {
    if (!root || p == root || q == root) return root;
    var l = lowestCommonAncestor(root.left, p, q);
    var r = lowestCommonAncestor(root.right, p, q);
    return (l && r) ? root : (l || r);
};

var path = [], path1 = [], path2 = [];
var lowestCommonAncestor = function (root, p, q) {
    path = [];
    getpath2root(root, p);
    path1 = path;
    path = [];
    getpath2root(root, q);
    path2 = path;
    console.log(path1);
    console.log(path2);
    return findDuplicatedNode(path1, path2);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const testRoot = new TreeNode(3);
testRoot.left = new TreeNode(5);
testRoot.left.left = new TreeNode(6);
testRoot.left.right = new TreeNode(2);
testRoot.left.right.left = new TreeNode(7);
testRoot.left.right.left.left = new TreeNode(17);
testRoot.right = new TreeNode(1);
testRoot.right.left = new TreeNode(0);
testRoot.right.right = new TreeNode(8);

/******

function searchSubNode(root, node) {
    if (node === root) {
        console.log(root.val);
        return true;
    }
    if (root && root.left && searchSubNode(root.left, node)) return true;
    if (root && root.right && searchSubNode(root.right, node)) return true;
}
function getParentNode(root, node) {
    if (!root || root === node) return root;
    //Wrong implementation. it is only capturing the 'top' level of parent, means the root. 
    if (getParentNode(root.left, node)) { console.log(root); return root; }
    if (getParentNode(root.right, node)) { console.log(root); return root; }

}
 * 
 */
function getpath2root(root, node) {
    if (!root || root === node) {if(root) path.push(root);return root;}
    if (getpath2root(root.left, node)) { path.push(root); return root; }
    if (getpath2root(root.right, node)) { path.push(root); return root; }
}
function findDuplicatedNode(p1, p2) {
    var j = 0;
    var len = (p1.length > p2.length ? p2.length : p1.length) + 1;
    console.log(len);
    for (var i = 1; i <= len ; i++) {
        if (p1[p1.length - i] != p2[p2.length - i]) {
            j = p1.length - i;
            break;
        }
    }
    return  p1[j+1];
}
function testfindDuplicatedNode () {
    console.log(findDuplicatedNode([8,-2,0,-1], [0,-1]) );
}

function test2() {
    getpath2root(testRoot, testRoot.left.left);
    path1 = path;
    path = [];
    getpath2root(testRoot, testRoot.left.right.left);
    path2 = path;
    console.log(path1);
    console.log(path2);
    console.log(findDuplicatedNode(path1, path2));
}

function test() {
    // console.log(getParentNode(testRoot, testRoot));
    // console.log(getParentNode(testRoot, testRoot.right.right));
    // console.log(getParentNode(testRoot, testRoot.left));
    // console.log(searchSubNode(testRoot, testRoot.right.right));
    // console.log(getParentNode(testRoot, testRoot.left.right.left));
    // var ret = lowestCommonAncestor(testRoot,testRoot.left.left,testRoot.right.right);
    var ret = lowestCommonAncestor(testRoot, testRoot.left.left, testRoot.left.right.left);

    //  var ret = lowestCommonAncestor(testRoot,testRoot.left.right.left,testRoot.left.left);
    // var ret = lowestCommonAncestor(testRoot, testRoot.left.right.left.left, testRoot.right.right);
    // var ret = lowestCommonAncestor(testRoot,testRoot.left.left,testRoot.right.left);
    // var ret = lowestCommonAncestor(testRoot, testRoot.left.left, testRoot.left.right);
    // var ret_try1 = lowestCommonAncestor_try1(testRoot, testRoot.left.left, testRoot.left.right);
    //    var ret_try1 = lowestCommonAncestor_try1(testRoot, testRoot.left.left, undefined);
    // var ret = lowestCommonAncestor(testRoot, testRoot, testRoot.left);
    //  var ret = lowestCommonAncestor(testRoot, testRoot.left, testRoot);
    // var ret = lowestCommonAncestor(testRoot, testRoot.left.left, testRoot.right.left);
    console.log(ret);

}

test2();
