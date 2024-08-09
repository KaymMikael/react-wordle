import React from "react";
import Square from "./Square";

const Board = ({ userGuessList, randomWord }) => {
  return (
    <div className="board">
      {userGuessList.map((guess) => (
        <div key={guess.id} className="row">
          {guess.word.split("").map((letter, i) => (
            <Square key={i} letter={letter}  randomWord={randomWord} guess={guess}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
