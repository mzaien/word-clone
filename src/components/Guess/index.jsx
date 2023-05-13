export function Guess({ value }) {
  return (
    <ol className="guess">
        {value?.split("").map((guess, index) => {
          return (
            <li key={index} className="cell">
              {guess}
            </li>
          );
        })}
      </ol>
  );
}
