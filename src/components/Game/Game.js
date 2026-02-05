import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { eventNames } from "process";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
