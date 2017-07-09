function tree(v) {
    this.nodeValue = v;
    this.left = null;
    this.right = null;
    // this.visted = false;
}
/*
       1
      / \
     2   3
    / \
    4  5
*/
var root = new tree(1);
var n1 = new tree(2);
var n2 = new tree(3);
var n3 = new tree(4);
var n4 = new tree(5);

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

function DFS(root) {
//DFS includes pre-order, in-oder, post-order.
}
function preOrder(root) {
    if (root === null) return;
    console.log("visit node ", root.nodeValue);
    preOrder(root.left);
    preOrder(root.right);

}

function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    console.log("visit node ", root.nodeValue);
    inOrder(root.right);

}
function postOrder(root) {
    if (root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log("visit node", root.nodeValue);
}

function BFS(root) {
    if (root === null) return;
    let myqueue = [];
    console.log("visit node", root.nodeValue);
    root.visted = true;
    myqueue.push(root);

    while (myqueue.length > 0) {
        let node = myqueue.shift();
        if (node.left && node.left.visted != true) {
            console.log("visit node", node.left.nodeValue);
            node.left.visted = true;
            myqueue.push(node.left);
        }
        if (node.right && node.right.visted != true) {
            console.log("visit node", node.right.nodeValue);
            node.right.visted = true;
            myqueue.push(node.right);
        }

    }
}

// preOrder(root);
inOrder(root);
// postOrder(root);
// BFS(root);