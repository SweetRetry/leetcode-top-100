const { RandomListNode } = require("../util/ListNode");

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val });
    Object.assign(cachedNode.get(head), {
      next: copyRandomList(head.next, cachedNode),
      random: copyRandomList(head.random, cachedNode),
    });
  }
  return cachedNode.get(head);
};
