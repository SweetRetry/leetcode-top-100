/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("../util/ListNode");

const example = ListNode(1, ListNode(3, ListNode(10, ListNode(2))));
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
  if (head === null) return null;
  const map = new Map();
  let p1 = head;

  while (p1) {
    if (map.get(p1.val)) {
      map.get(p1.val).push(p1);
    } else {
      map.set(p1.val, [p1]);
    }
    p1 = p1.next;
  }

  const arr = [...map.keys()].sort((a, b) => a - b);

  let curr = { next: null };
  let newHead = curr;

  for (let i = 0; i < arr.length; i++) {
    const nodes = map.get(arr[i]);
    if (nodes.length) {
      for (let j = 0; j < nodes.length; j++) {
        curr.next = nodes[j] || null;
        curr = curr.next;
      }
    }
  }
  curr.next = null;

  return newHead.next;
};

sortList(example);
