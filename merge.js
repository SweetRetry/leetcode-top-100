/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const newArr = [];

  for (let i = 0; i < intervals.length; ) {
    let cur = i + 1;

    let max = intervals[i][1];

    while (cur < intervals.length && intervals[cur][0] <= max) {
      max = Math.max(max, intervals[cur][1]);
      cur++;
    }

    newArr.push([intervals[i][0], max]);
    i = cur;
  }
  return newArr;
};
