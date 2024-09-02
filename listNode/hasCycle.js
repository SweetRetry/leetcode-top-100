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
 * @return {boolean}
 */
var hasCycle = function (head) {
  //#region  哈希
  //   const set = new Set();
  //   while (head !== null) {
  //     if (set.has(head)) {
  //       return true;
  //     }
  //     set.add(head);
  //     head = head.next;
  //   }
  //   return false;
  //#endregion

  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
