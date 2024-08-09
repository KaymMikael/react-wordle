import { useState } from "react";
import Board from "./components/Board";
import GuessBox from "./components/GuessBox";
import Header from "./components/Header";
import { fiveLetterWords } from "./data/words.js";

function App() {
  const getRandomWord = () => {
    const randomNumber = Math.round(
      Math.random() * (fiveLetterWords.length - 1)
    );
    return fiveLetterWords[randomNumber].toLowerCase();
  };

  const [randomWord, setRandomWord] = useState(getRandomWord);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="left">
          <Board />
        </div>
        <div className="right">
          <GuessBox />
        </div>
      </main>
    </div>
  );
}

export default App;
