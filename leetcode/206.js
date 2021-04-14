/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  var last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

var reverseList = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  
  var cur = null; var pre = head;

  while (pre) {
    let t = pre.next;
    pre.next = temp;
    cur = pre;
    pre = t;
  }
};