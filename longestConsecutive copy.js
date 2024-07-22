/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    const nums_Set = new Set(nums)
    let max = 0
    for (const num of nums_Set) {
        if (!nums_Set.has(num - 1)) {
            let currentNum = num
            let count = 1
            while (nums_Set.has(currentNum + 1)) {
                count++
                currentNum++
            }
            max = Math.max(max, count)
        }

    }
    return max
};



