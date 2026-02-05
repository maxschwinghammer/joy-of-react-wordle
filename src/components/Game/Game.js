import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner/EndBanner";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [numOfGuesses, setNumOfGuesses] = useState(0);

  return (
    <>
      <EndBanner
        gameStatus={gameStatus}
        numOfGuesses={numOfGuesses}
        answer={answer}
      />
      <GuessResults
        guessList={guessList}
        answer={answer}
        setGameStatus={setGameStatus}
        setNumOfGuesses={setNumOfGuesses}
      />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
