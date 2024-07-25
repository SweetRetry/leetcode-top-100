/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) {
    return nums;
  }
  const result = [];
  //   递减队列
  let queue = [];

  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[i]);
  }

  result.push(queue[0]);

  for (let i = 1; i + k - 1 < nums.length; i++) {
    if (queue[0] === nums[i - 1]) {
      queue.shift();
    }
    while (nums[i + k - 1] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[i + k - 1]);

    result.push(queue[0]);
  }
  return result;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([7, 2, 4], 2));
// console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
// console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));
