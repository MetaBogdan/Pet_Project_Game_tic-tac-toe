import React from "react";

import "./Board.css";
import Square from "./Square";

interface IBoard {
  squares: any;
  click(i: number): void;
}

const Board = ({ squares, click }: IBoard) => {
  return (
    <div className="board">
      {squares.map((square: number, i: any) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
};

export default Board;
