import { useState } from "react";

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });

    setGuessList([...guessList, guess]);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        minLength={5}
        maxLength={5}
        required={true}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
