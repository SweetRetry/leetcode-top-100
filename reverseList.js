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
  if (head === null || head.next === null) return head;
  while (1) {
    let p1 = head;
    let p2 = head.next;

    while (p1.val > p2.val) {
      p1 = p1.next;
      p2 = p2.next;
      if (p2 === null) return head;
    }

    p1.next = p2.next;
    p2.next = head;
    head = p2;
  }
};

console.log(reverseList(head));
