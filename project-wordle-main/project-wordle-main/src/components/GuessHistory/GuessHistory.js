import React from 'react';

function GuessHistory({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((x) => (
        <p class="guess">{x}</p>
      ))}
    </div>
  );
}

export default GuessHistory;
