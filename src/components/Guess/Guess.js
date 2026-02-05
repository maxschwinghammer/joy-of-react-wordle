import { useEffect } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer, setGameStatus }) {
  const guessResult = checkGuess(guess, answer);

  useEffect(() => {
    if (
      guess &&
      guessResult[0].status === "correct" &&
      guessResult[1].status === "correct" &&
      guessResult[2].status === "correct" &&
      guessResult[3].status === "correct" &&
      guessResult[4].status === "correct"
    ) {
      setGameStatus("won");
    }
  }, [guess, guessResult, setGameStatus]);

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
