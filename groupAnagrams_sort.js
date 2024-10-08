/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
    字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();
  for (let current of strs) {
    const sortedCurrent = Array.from(current).sort().toString();

    const list = map.get(sortedCurrent) ? map.get(sortedCurrent) : new Array();
    list.push(current);
    map.set(sortedCurrent, list);
  }

  return Array.from(map.values());
};
