import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { Guess } from "../Guess";
import { Banner } from "../Banner/Banner";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  function addGuesses(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("won");
    }
    if (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      gameStatus === "running"
    ) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      {gameStatus !== "running" &&
        (gameStatus === "won" ? (
          <Banner status="happy">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
              </strong>
              .
            </p>
          </Banner>
        ) : (
          <Banner status="sad">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </Banner>
        ))}
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
      <GuessInput setGuesses={addGuesses} disabled={gameStatus !== "running"} />
    </>
  );
}

export default Game;
