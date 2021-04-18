/**
 * leetcode 141 环形链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (head == null) return false;
    if (head.next == null) return false;

    let p = head;
    let q = head.next;

    while (p != q) {
        if (p == null || q == null) {
            return false;
        }
        p = p.next;
        q = q.next?.next || null;      
    }

    return true;
};