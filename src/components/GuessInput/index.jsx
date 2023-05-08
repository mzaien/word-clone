import { useState } from "react";

export function GuessInput({ setGuesses }) {
  const [guess, setGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
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
      ></input>
    </form>
  );
}
