import { use, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner/EndBanner";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [showEndBanner, setShowEndBanner] = useState(false);
  const [numOfGuesses, setNumOfGuesses] = useState(0);

  return (
    <>
      {showEndBanner && (
        <EndBanner
          hasWon={hasWon}
          numOfGuesses={numOfGuesses}
          answer={answer}
        />
      )}
      <GuessResults
        guessList={guessList}
        answer={answer}
        setHasWon={setHasWon}
        setNumOfGuesses={setNumOfGuesses}
        setShowEndBanner={setShowEndBanner}
      />
      <GuessInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
