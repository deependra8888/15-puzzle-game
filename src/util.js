 function shuffle2DArray(array) {
  const rows = array.length;
  const cols = array[0].length;

  for (let row = rows - 1; row > 0; row--) {
    for (let col = cols - 1; col > 0; col--) {
      // Generate random indices within the remaining range
      const randomRow = Math.floor(Math.random() * (row + 1));
      const randomCol = Math.floor(Math.random() * (col + 1));

      // Swap the current element with a randomly chosen element
      const temp = array[row][col];
      array[row][col] = array[randomRow][randomCol];
      array[randomRow][randomCol] = temp;
    }
  }

  return array;
}

 const correctPostion = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

const intialBoard = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];


export {shuffle2DArray, intialBoard, correctPostion}

