/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
    字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Object();
  for (let current of strs) {
    const count = new Array(26).fill(0);
    for (let c of current) {
      count[c.charCodeAt() - "a".charCodeAt()]++;
    }

    map[count] ? map[count].push(current) : (map[count] = [current]);
  }

  return Object.values(map);
};
