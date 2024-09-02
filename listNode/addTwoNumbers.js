/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

const l1 = ListNode(2, ListNode(4, ListNode(3)));
const l2 = ListNode(5, ListNode(6, ListNode(4)));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let temp = 0;
  let p = l1;
  while (l1 || l2) {
    const sum = l1.val + l2.val + temp;
    temp = sum >= 10 ? 1 : 0;

    p.next = ListNode(sum % 10, null);
    p = p.next;
  }
};
