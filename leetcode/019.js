/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if (head == null || n === 0) {
    return head;
  }

  var fast = head;
  var slow = head;

  while ( n>0 ) {
    fast = fast.next;
    n--;
  }

  if (fast == null) {
    return head.next;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  // p = vnode.next;

  return head;
};