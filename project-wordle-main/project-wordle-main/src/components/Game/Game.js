import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Input from '../Input/.';
import GuessHistory from '../GuessHistory/GuessHistory';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess
            guess={
              guesses[index] ?? {
                key: crypto.randomUUID(),
                word: Array(5).fill(''),
              }
            }
          ></Guess>
        ))}
      </div>
      <Input guesses={guesses} setGuesses={setGuesses}></Input>
      <GuessHistory guesses={guesses}></GuessHistory>
    </>
  );

  return;
}

export default Game;
