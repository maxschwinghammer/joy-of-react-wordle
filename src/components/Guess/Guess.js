import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p class="guess">
      {range(5).map((char) => (
        <span key={char} className="cell">
          {guess ? guess[char] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
