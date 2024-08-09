/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let max = nums[0];

  nums.forEach((item) => {
    pre = Math.max(item + pre, item);
    max = Math.max(max, pre);
  });
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
