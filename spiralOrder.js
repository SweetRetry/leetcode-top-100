/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  const result = [];
  // direction = 1,2,3,4
  let direction = 1;
  while (result.length !== row * column) {
    const roundTime = Math.floor(direction / 4);
    const mod = direction % 4;
    if (mod === 1) {
      for (let i = roundTime; i < column - roundTime; i++) {
        result.push(matrix[roundTime][i]);
      }
    } else if (mod === 2) {
      for (let j = roundTime + 1; j < row - roundTime; j++) {
        result.push(matrix[j][column - 1 - roundTime]);
      }
    } else if (mod === 3) {
      for (let i = column - 1 - roundTime - 1; i >= roundTime; i--) {
        result.push(matrix[row - 1 - roundTime][i]);
      }
    } else {
      for (let j = row - roundTime - 1; j >= roundTime; j--) {
        result.push(matrix[j][roundTime - 1]);
      }
    }

    direction++;
  }
  return result;
};

// spiralOrder([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
