import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer, setHasWon, setShowEndBanner }) {
  const guessResult = checkGuess(guess, answer);

  function hasUserWon() {
    if (
      guess &&
      guessResult[0].status === "correct" &&
      guessResult[1].status === "correct" &&
      guessResult[2].status === "correct" &&
      guessResult[3].status === "correct" &&
      guessResult[4].status === "correct"
    ) {
      setShowEndBanner(true);
      setHasWon(true);
    }
  }

  return (
    <p className="guess">
      {hasUserWon()}
      {range(5).map((char) => (
        <span
          key={char}
          className={`cell${guess ? " " + guessResult[char].status : ""}`}
        >
          {guess ? guess[char] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
