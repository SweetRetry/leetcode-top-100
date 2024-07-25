/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const pLen = p.length;
  const sLen = s.length;
  if (sLen < pLen) return [];

  const result = [];

  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  const aCharCode = "a".charCodeAt();

  for (let i = 0; i < pLen; i++) {
    ++sCount[s[i].charCodeAt() - aCharCode];
    ++pCount[p[i].charCodeAt() - aCharCode];
  }
  if (sCount.toString() === pCount.toString()) {
    result.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      result.push(i + 1);
    }
  }

  return result;
};

// console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("ababababab", "aab"));

// console.log(findAnagrams("baa", "aa"));
