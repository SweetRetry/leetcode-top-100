/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  let flag = false;
  for (let i = 0; i < row; i++) {
    if (!matrix[i][0]) {
      flag = true;
    }
    for (let j = 1; j < column; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = 1; j < column; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0;
      }
    }
    if (flag) {
      matrix[i][0] = 0;
    }
  }
};

// setZeroes([
//   [1, 2, 3, 4],
//   [5, 0, 7, 8],
//   [0, 10, 11, 12],
//   [13, 14, 15, 0],
// ]);

setZeroes([
  [-4, -2147483648, 6, -7, 0],
  [-8, 6, -8, -6, 0],
  [2147483647, 2, -9, -6, -10],
]);
