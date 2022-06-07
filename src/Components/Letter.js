import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import '../Assets/Letter.css';

export default function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt, setDisableLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  //Boleano true false
  const correct = correctWord.toUpperCase[letterPos] === letter;
  //No puede ser correcto ni estar vacio y correct word tiene que incluir la letra
  const almost = !correct && (letter !== '') & correctWord.includes(letter);
  //Pasaje al id. Check si es correcto o no y settear el estado correspondiente, correct/almost.
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if (letter != '' && !correct && !almost) {
      setDisableLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  );
}
