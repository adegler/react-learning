import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  console.log('in guess');
  console.log(guess);
  return (
    <p className="guess">
      {[...guess.word].map((letter) => (
        <span className="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
