import { useState } from "react";
import Board from "./components/Board";
import GuessBox from "./components/GuessBox";
import Header from "./components/Header";
import { getRandomWord } from "./data/words.js";

function App() {
  const [randomWord, setRandomWord] = useState(getRandomWord);
  const [userGuessList, setUserGuessList] = useState([]);
  const [newGuess, setNewGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isWinner, setIsWinner] = useState(false);

  const checkWinner = (userGuess, answer) => {
    if (userGuess.toLowerCase() === answer.toLowerCase()) {
      setMessage("You win");
      setIsWinner(true);
    }
  };

  const handleAddGuess = (e) => {
    e.preventDefault();
    if (isWinner) {
      setMessage("You win!");
      return;
    }
    if (newGuess.length < 5) {
      setMessage("Guess must be 5 characters long");
      return;
    }
    if (userGuessList.length >= 6) {
      setMessage("No more guesses allowed");
      return;
    }
    const id = userGuessList.length
      ? userGuessList[userGuessList.length - 1].id + 1
      : 1;
    const newUserGuess = { id, word: newGuess };
    const updatedGuessList = [...userGuessList, newUserGuess];
    setUserGuessList(updatedGuessList);
    checkWinner(newGuess, randomWord);
    setNewGuess("");
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="left">
          <Board userGuessList={userGuessList} randomWord={randomWord} />
        </div>
        <div className="right">
          <GuessBox
            newGuess={newGuess}
            setNewGuess={setNewGuess}
            handleAddGuess={handleAddGuess}
            message={message}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
