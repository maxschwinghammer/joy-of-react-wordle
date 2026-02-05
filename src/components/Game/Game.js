import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { eventNames } from "process";
import GuessInput from "../GuessInput/GuessInput";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  return (
    <>
      <GuessInput guess={guess} setGuess={setGuess} />
    </>
  );
}

export default Game;
