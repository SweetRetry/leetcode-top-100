/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * /**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
  const len = nums.length;
  const out = len + 1;
  nums.forEach((item, index) => {
    nums[index] = item <= 0 ? out : item;
  });
  nums.forEach((item) => {
    const num = Math.abs(item);
    num <= len && (nums[num - 1] = -Math.abs(nums[num - 1]));
  });
  const index = nums.findIndex((item) => item > 0);
  if (index === -1) {
    return out;
  } else {
    return index + 1;
  }
};

console.log(firstMissingPositive([1]));
