import React, { useRef } from "react";

const GuessBox = () => {
  const inputRef = useRef();

  return (
    <form className="guess-form-box" >
      <label htmlFor="guess">Enter your guess here:</label>
      <input
        ref={inputRef}
        type="text"
        name="guess"
        id="guess"
        autoFocus
        required
        maxLength={5}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        Submit
      </button>
    </form>
  );
};

export default GuessBox;
