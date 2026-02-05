import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guessList, answer, setGameStatus, setNumOfGuesses }) {
  function isGameOver() {
    if (guessList.length === 6) {
      setGameStatus("lost");
    }
  }

  return (
    <div className="guess-results">
      {isGameOver()}
      {setNumOfGuesses(guessList.length)}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          guess={guessList[num]}
          answer={answer}
          setGameStatus={setGameStatus}
          setNumOfGuesses={setNumOfGuesses}
        />
      ))}
    </div>
  );
}

export default GuessResults;
