import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({
  guessList,
  answer,
  setHasWon,
  setNumOfGuesses,
  setShowEndBanner,
}) {
  console.log(guessList.length);

  function isGameOver() {
    if (guessList.length === 6) {
      setShowEndBanner(true);
      setHasWon(false);
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
          setHasWon={setHasWon}
          setNumOfGuesses={setNumOfGuesses}
          setShowEndBanner={setShowEndBanner}
        />
      ))}
    </div>
  );
}

export default GuessResults;
