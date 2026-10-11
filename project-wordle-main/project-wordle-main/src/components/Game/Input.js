import React from 'react';

function Input({ guess, setGuess }) {
  [word, setWord] = React.useState('');
  function handleSubmit(word) {
    if (word.length != 5) {
      return;
    }

    setGuess(word.toUpperCase());
    setWord('');
  }

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(word);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
      ></input>
    </form>
  );
}

export default Input;
