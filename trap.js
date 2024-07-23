// input:[0,1,0,2,1,0,1,3,2,1,2,1]
// output:6

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const first = height.find((item) => item > 0);
  let left = first;
  let right = first;

  const len = height.length;
  let result = 0;
  while (right < len) {
    while (height[right] >= height[right + 1]) {
      right++;
    }
    while (height[right] < height[right + 1]) {
      right++;
    }
    // 找到一个可蓄水区为 left - right
    if (height[right] >= height[left]) {
      const sliceArr = height.slice(left, right + 1);
      // 计算蓄水面积
      let area = 0;

      result += area;
    }

    left = right;
  }
  return result;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
