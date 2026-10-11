import React from 'react';

function Input({ guesses, setGuesses }) {
  [word, setWord] = React.useState('');
  function handleSubmit(word) {
    if (word.length != 5) {
      return;
    }
    guesses.push({ key: crypto.randomUUID(), word: word });
    const nextGuesses = [...guesses];
    setGuesses(nextGuesses);
    setWord('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(word);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        onChange={(event) => {
          const nextWord = event.target.value.toUpperCase();
          setWord(nextWord);
        }}
      ></input>
    </form>
  );
}

export default Input;
