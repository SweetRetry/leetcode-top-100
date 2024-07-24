// input:[0,1,0,2,1,0,1,3,2,1,2,1]
// output:6

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let ans = 0;
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      ans += leftMax - height[left];
      ++left;
    } else {
      ans += rightMax - height[right];
      --right;
    }
  }
  return ans;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
