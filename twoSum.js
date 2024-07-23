/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const minus = target - current;
    const findIndex = map.get(minus);
    if (findIndex !== undefined) {
      return [findIndex, i];
    }
    map.set(current, i);
  }
};
