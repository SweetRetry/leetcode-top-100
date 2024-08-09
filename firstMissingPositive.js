/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * /**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  let start = 0;
  while (start < length && nums[start] < 1) {
    start++;
  }
  if (nums[start] > 1) return 1;

  for (let i = start; i < length - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1;
    }
  }
  return nums[length - 1] < 0 ? 1 : nums[length - 1] + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
