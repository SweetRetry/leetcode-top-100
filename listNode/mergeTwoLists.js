/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p1 = list1;
  let p2 = list2;

  let newListHead = new ListNode();
  let p3 = newListHead;

  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      p3.next = p1;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p2 = p2.next;
    }

    p3 = p3.next;
  }

  p3.next = p1 === null ? p2 : p1;

  return newListHead.next;
};
