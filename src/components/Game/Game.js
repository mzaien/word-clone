import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { Guess } from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  function addGuesses(guess) {
    setGuesses([...guesses, guess]);
  }
  return (
    <>
      <section className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          return (
            <Guess
              key={num}
              value={guesses[num] ?? "     "}
              cellClass={checkGuess(guesses[num], answer)}
            />
          );
        })}
      </section>
      <GuessInput setGuesses={addGuesses} />
    </>
  );
}

export default Game;
