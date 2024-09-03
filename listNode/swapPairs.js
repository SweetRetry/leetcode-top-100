/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

const example = ListNode(1, ListNode(2, ListNode(3, ListNode(4))));

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let p1 = head;
  let p2 = head.next;

  p1.next = swapPairs(p2.next);
  p2.next = p1;

  return p2;
};

swapPairs(example);
