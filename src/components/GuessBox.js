import React, { useRef } from "react";

const GuessBox = ({newGuess,setNewGuess, handleAddGuess, message}) => {
  const inputRef = useRef();

  return (
    <form className="guess-form-box" onSubmit={handleAddGuess}>
      <label htmlFor="guess">Enter your guess here:</label>
      <input
        ref={inputRef}
        type="text"
        name="guess"
        id="guess"
        autoFocus
        required
        value={newGuess}
        onChange={(e) => setNewGuess(e.target.value)}
        maxLength={5}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        Submit
      </button>
      <p className="message">{message}</p>
    </form>
  );
};

export default GuessBox;
