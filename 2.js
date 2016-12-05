/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var p1 = l1;
    var p2 = l2;
    var p = new ListNode(0);
    var ret = p;
    var carryon = 0;
    while (p1 || p2) {
        var v1, v2;
        v1 = p1 ? p1.val : 0;
        v2 = p2 ? p2.val : 0;
        if (v1 + v2 + carryon >= 10) {
            sum = v1 + v2 + carryon - 10;
            carryon = 1;
        } else {
            sum = v1 + v2 + carryon;
            carryon = 0;
        }
        p.next = new ListNode(sum);
        p = p.next;
        p1 = p1 ? p1.next : undefined;
        p2 = p2 ? p2.next : undefined;

    }
    if (carryon == 1) {
        p.next = new ListNode(carryon);
    }
    return ret.next;

};
function ListNode(val) {
    this.val = val;
    this.next = null;
};
const A1 = new ListNode(2);
A1.next = new ListNode(4);
A1.next.next = new ListNode(3);
A1.next.next.next = new ListNode(7);

const B1 = new ListNode(5);
B1.next = new ListNode(6);
B1.next.next = new ListNode(4);

console.log(addTwoNumbers(A1, B1).next);