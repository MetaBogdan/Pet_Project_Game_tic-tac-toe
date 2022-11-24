import React from "react";

import "./Square.css";

interface ISquare {
  key: number;
  value: number;
  onClick(): void;
}

const Square = (Props: ISquare) => {
  return (
    <button key={Props.key} className="square" onClick={Props.onClick}>
      {Props.value}
    </button>
  );
};

export default Square;
