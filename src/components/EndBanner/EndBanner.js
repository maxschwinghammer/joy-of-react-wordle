function EndBanner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === "running") return;

  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default EndBanner;
