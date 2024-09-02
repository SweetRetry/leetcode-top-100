/**
 * 
 * @param {number} val 
 * @param {ListNode | null} next 
 * @returns 
 */
function ListNode(val, next) {
  const _val = val === undefined ? 0 : val;
  const _next = next === undefined ? null : next;
  return { val: _val, next: _next };
}

module.exports = {
  ListNode,
};
