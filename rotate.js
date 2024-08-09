/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const step = k % nums.length;
  if (step) {
    const sliceArray = nums.splice(nums.length - step);
    nums.unshift(...sliceArray);
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
