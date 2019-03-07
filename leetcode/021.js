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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return null;
    if (l2 === null) return null;

    let arr1 = [];
    let arr2 = [];
    let l3 = l1.concat(l2);
    l3 = l3.sort();
    return l3;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));