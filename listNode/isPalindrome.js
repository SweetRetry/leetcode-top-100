/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode } = require("./ListNode");

const example = ListNode(1, ListNode(2, ListNode(2, ListNode(1))));

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 时间复杂度 O(n)，空间复杂度 O(1)
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const secondHalfStart = reverseList(slow.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
    if (p1.val != p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }
  // 还原链表并返回结果
  slow.next = reverseList(secondHalfStart);
  return result;
};
