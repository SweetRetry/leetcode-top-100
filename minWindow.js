/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen < tLen) return "";

  const tMap = new Map();
  for (const item of t) {
    tMap.set(item, tMap.get(item) ? tMap.get(item) + 1 : 1);
  }

  let left = 0;
  let right = -1;

  let ansL = -1;
  let ansR = -1;
  let len = Infinity;

  let firstI = 0;

  while (!tMap.get(s.charAt(firstI)) && firstI < sLen - tLen + 1) {
    firstI++;
  }

  const currentMap = new Map();

  const check = () => {
    const iterator = tMap[Symbol.iterator]();

    for (const [key, value] of iterator) {
      if ((currentMap.get(key) || 0) < value) {
        return false;
      }
    }

    return true;
  };

  while (right < sLen) {
    right++;
    if (right < sLen && tMap.has(s.charAt(right))) {
      const char = s.charAt(right);
      const count = currentMap.get(char);
      currentMap.set(char, count !== undefined ? count + 1 : 1);
    }
    // 用以缩小滑动范围直到currentMap不符合tMap
    while (check() && left <= right) {
      if (right - left + 1 < len) {
        len = right - left + 1;
        ansL = left;
        ansR = left + len;
      }

      if (tMap.get(s.charAt(left))) {
        currentMap.set(s.charAt(left), currentMap.get(s.charAt(left)) - 1);
      }
      ++left;
    }
  }
  return s.slice(ansL, ansR);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
