/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    max = Math.max((right - left) * Math.min(height[right], height[left]), max);
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
