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
var addTwoNumbers = function(l1, l2) {
    var l1Arr = [];
    var l2Arr = [];
    while(l1) {
      l1Arr.push(l1.val);
      l1 = l1.next
    }
    while(l2) {
      l2Arr.push(l2.val)
      l2 = l2.next
    }
    var num1 = Number(l1Arr.reverse().join(''));
    var num2 = Number(l2Arr.reverse().join(''));
    var sum = num1 + num2;
    var sumArr = sum.toString().split('').reverse();
    var i = 0;
    while(i<sumArr.length) {
      
    }
};