function ListNode(val, next) {
  const _val = val === undefined ? 0 : val;
  const _next = next === undefined ? null : next;
  return { val: _val, next: _next };
}

const list = ListNode(2, ListNode(3, ListNode(4)));
const head = ListNode(1, list);

// const list = ListNode(1, ListNode(4, ListNode(-2)));
// const head = ListNode(0, list);

module.exports = {
  ListNode,
  list,
  head,
};
