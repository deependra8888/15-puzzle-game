import { useEffect, useRef, useState } from "react";
import {shuffle2DArray, intialBoard, correctPostion} from './util'
export default function App() {
  const [board, setBoard] = useState(() => shuffle2DArray(intialBoard));
 
  const [swapDir, setSwapDir] = useState();
  useEffect(() => {
    
  }, []);

  function swap(r, c) {
    // console.log(r,c);
    let offsets = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    let directions = {
      "-10": "up",
      10: "down",
      "0-1": "left",
      "01": "right",
    };
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
          let key = x + "" + y;

          setSwapDir(directions[key]);
          setBoard(newBoard);
          return;
        }
      }
    }
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
        {board.map((row, rowIndx) => {
          return (
            <li key={rowIndx}>
              {row.map((num, colIndx) => {
                return (
                  <button
                    className={
                      num === 0
                        ? "blank"
                        : correctPostion[rowIndx][colIndx] === num
                        ? "matched"
                        : ""
                    }
                    onClick={() => swap(rowIndx, colIndx)}
                    key={num}
                  >
                    {num !== 0 ? num : ""}
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
