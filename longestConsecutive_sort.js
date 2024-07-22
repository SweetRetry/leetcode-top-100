/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    const newArr = [...new Set(nums)].sort((a, b) => a - b)
    let max = 1
    let count = 1
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] - newArr[i - 1] === 1) {
            count++
        } else {
            max = Math.max(max, count)
            count = 1
        }
    }
    max = Math.max(max, count)
    return max
};



