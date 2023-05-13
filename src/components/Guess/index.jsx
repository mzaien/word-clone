export function Guess({ value, cellClass }) {
  return (
    <ol className="guess">
      {value?.split("").map((guess, index) => {
        return (
          <li
            key={index}
            className={`cell ${cellClass ? cellClass[index].status : ""}`}
          >
            {guess}
          </li>
        );
      })}
    </ol>
  );
}
