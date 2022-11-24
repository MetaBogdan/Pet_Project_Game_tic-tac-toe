import React, { useState } from "react";

import "./Game.css";
import Board from "./Board";
import { calcateWinner } from "../hepler";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calcateWinner(board);
  const endGame = !Object.assign([], board).includes(null);
  const gameOver = winner !== null || endGame;

  const whoseMoveXorO = xIsNext ? "X" : "O";
  const handleClick = (index: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = whoseMoveXorO;
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        Нова Гра
      </button>
    );
  };

  return (
    <div className="wrapper">
      {gameOver && <div className="game__over">Гра закінчена</div>}
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      {xIsNext}
      {!gameOver && <div> Ходить гравець: {whoseMoveXorO}</div>}
      {winner != null && (
        <div className="game__winner">! Переміг гравець: {winner} !</div>
      )}
    </div>
  );
};

export default Game;
