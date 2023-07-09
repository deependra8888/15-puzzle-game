import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


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

const intialBoard = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
]


export default function App() {
  const [board, setBoard] = useState(() => shuffle2DArray(intialBoard));
  
  
  useEffect(() => {}, []);

  function swap(r, c) {
    // console.log(r,c);
    let offsets = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let newBoard = JSON.parse(JSON.stringify(board));
    for (let [x, y] of offsets) {
      if (
        r + x >= 0 &&
        r + x < board.length &&
        c + y >= 0 &&
        c + y < board.length
      ) {
        let cordX = r + x;
        let cordY = c + y;
        if (newBoard[cordX][cordY] === 0) {
          newBoard[cordX][cordY] = newBoard[r][c];
          newBoard[r][c] = 0;
          break;
        }
      }
    }

    setBoard(newBoard);
  }
  return (
    <div className="App">
      <h1 className="title">15 puzzle</h1>
      <div className="btn-wrapper">
        <div className="btns-wrapper">
          <button className="restart">Restart</button>
          <button className="pause">Pause</button>
        </div>

        <div className="timer-moves">
          <h3 className="timer">
            TIME <span> 0</span>
          </h3>
          <h3 className="moves">
            MOVES <span> 0</span>
          </h3>
        </div>
      </div>
      <ul className="grid-container">
        {board.map((row, r) => {
          return (
            <li key={uuidv4()}>
              {row.map((col, c) => {
                return (
                  <button className={!board[r][c] && 'blank'} onClick={() => swap(r, c)} key={uuidv4()}>
                    {col !== 0 && col}
                  </button>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
