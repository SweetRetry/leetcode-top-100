/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { ListNode } = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  while (fast !== null) {
    slow = slow.next;

    if (fast !== null && fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (slow === fast) {
      let p1 = head;
      let p2 = slow;
      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
};
