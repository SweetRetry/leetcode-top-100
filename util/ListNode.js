function ListNode(val, next) {
  const _val = val === undefined ? 0 : val;
  const _next = next === undefined ? null : next;
  return { val: _val, next: _next };
}

function RandomListNode(val, next, random) {
  const listNode = ListNode(val, next);
  listNode.random = random;
  return listNode;
}

module.exports = {
  ListNode,
  RandomListNode,
};
