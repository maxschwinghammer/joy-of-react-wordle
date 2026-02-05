import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);

  return (
    <p className="guess">
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
