import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function EmptyGuess() {
  return Array.from({ length: 5 }, () => ({ letter: '', status: null }));
}

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess.word, answer) ?? EmptyGuess();

  console.log(checkedGuess);

  return (
    <p className="guess">
      {checkedGuess.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
