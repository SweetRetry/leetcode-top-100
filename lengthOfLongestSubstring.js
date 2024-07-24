/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  const len = s.length;
  let right = -1;
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      charSet.delete(s.charAt[i]);
    }
    while (right + 1 < len && !charSet.has(s.charAt(right + 1))) {
      charSet.add(s.charAt(right + 1));
      right++;
    }
    result = Math.max(result, right - i + 1);
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
