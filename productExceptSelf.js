/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = [];
  result[0] = 1;
  for (let i = 1; i < length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] = result[i] * R;
    R *= nums[i];
  }
  return result;
};
