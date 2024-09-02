const { head } = require("./util/ListNode");
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
var reverseList = function (head) {
  let newHead = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = newHead;
    newHead = cur;
    cur = next;
  }
  return newHead;
};

console.log(reverseList(head));
