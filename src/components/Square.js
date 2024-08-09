import React from "react";

const Square = ({ letter, randomWord, guess }) => {
  const squareBackgroundColor = () => {
    let color = 'yellow';
    const userGuess = guess.word.toLowerCase();
    const answer = randomWord.toLowerCase();
    const letterLower = letter.toLowerCase();

    if (!answer.includes(letterLower)) {
      color = 'white';
    } else if (answer[userGuess.indexOf(letterLower)] === letterLower) {
      color = 'green';
    }
    return color;
  };

  return (
    <div
      className="board-square"
      style={{ backgroundColor: squareBackgroundColor() }} // Invoke the function here
    >
      {letter}
    </div>
  );
};

export default Square;
