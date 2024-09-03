/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

// const l1 = ListNode(2, ListNode(4, ListNode(3)));
// const l2 = ListNode(5, ListNode(6, ListNode(4)));

const l1 = ListNode(
  9,
  ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9))))))
);
const l2 = ListNode(9, ListNode(9, ListNode(9)));

// const l1 = ListNode(5);
// const l2 = ListNode(5);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let temp = 0;
  let p = l1;
  let prev = null;
  const head = p;

  while (l1 && l2) {
    const sum = l1.val + l2.val + temp;
    temp = sum >= 10 ? 1 : 0;
    p.val = sum % 10;
    l1 = l1.next;
    l2 = l2.next;
    p.next = l1 === null ? l2 : l1;
    prev = p;
    p = p.next;
  }

  while (p) {
    const sum = p.val + temp;
    temp = sum >= 10 ? 1 : 0;
    p.val = sum % 10;
    prev = p;
    p = p.next;
  }

  if (temp) {
    prev.next = new ListNode(1, null);
  }

  return head;
};

addTwoNumbers(l1, l2);
