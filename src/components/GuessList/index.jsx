export function GuessList({ guesses }) {
  return (
    <ul className="guess-results">
      {guesses.map((guess, id) => {
        return (
          <li className="guess" key={id}>
            {guess}
          </li>
        );
      })}
    </ul>
  );
}
