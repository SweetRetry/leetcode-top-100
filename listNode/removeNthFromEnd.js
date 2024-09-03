/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

// const example = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))));
const example = ListNode(1);

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //   let dummy = new ListNode(0, head);
  //   let p1 = dummy;
  //   let p2 = head;
  //   for (let i = 0; i < n; i++) {
  //     p2 = p2.next;
  //   }
  //   while (p2) {
  //     p1 = p1.next;
  //     p2 = p2.next;
  //   }
  //   p1.next = p1.next.next;
  //   return dummy.next;

  const stack = [];
  let dummy = new ListNode(0, head);
  let p1 = dummy;
  while (p1) {
    stack.push(p1);
    p1 = p1.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop();
  }

  const prev = stack.pop();
  prev.next = prev.next.next;

  return dummy.next;
};

removeNthFromEnd(example, 1);
