import React from 'react';

function GuessHistory({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ key, word }) => (
        <p class="guess" key={key}>
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
