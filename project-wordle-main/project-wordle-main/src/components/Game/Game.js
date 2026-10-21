import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Input from '../Input/.';
import Guess from '../Guess/Guess';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <Input guesses={guesses} setGuesses={setGuesses}></Input>
    </>
  );

  return;
}

export default Game;
