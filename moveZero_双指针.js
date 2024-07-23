// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// input: [0,1,0,3,12]
// output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  const len = nums.length;
  while (right < len) {
    if (nums[right]) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left++] = temp;
    }
    right++;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
