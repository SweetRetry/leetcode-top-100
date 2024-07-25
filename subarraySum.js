/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (nums.length === 1) return nums[0] === k ? 1 : 0;
  const sumMap = new Map();
  sumMap.set(0, 1);
  let count = 0;
  let prevSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentSum = prevSum + nums[i];

    if (sumMap.get(currentSum - k)) {
      count += sumMap.get(currentSum - k);
    }

    sumMap.set(
      currentSum,
      sumMap.get(currentSum) ? sumMap.get(currentSum) + 1 : 1
    );
    prevSum = currentSum;
  }

  return count;
};

// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1], 0));
// console.log(subarraySum([-1, -1, 1], 0));

// console.log(subarraySum([1, 2, 3], 3));
