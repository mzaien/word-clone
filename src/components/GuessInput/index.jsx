import { useState } from "react";

export function GuessInput({ setGuesses, disabled }) {
  const [guess, setGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuesses(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        value={guess}
        required
        minLength={5}
        maxLength={5}
        pattern="\w{5}"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={disabled}
      ></input>
    </form>
  );
}
