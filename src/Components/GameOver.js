import React, { useContext } from 'react'
import { AppContext } from '../App'


export default function GameOver() {
    const { gameOver, correctWord, currAttempt } = useContext(AppContext)
    return (
        <div className='gameOver'>
            <h3>{gameOver.guessedsWord ? 'You correctly guessed' : 'You failed'}</h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedsWord && (<h3> You guessed in {currAttempt.attempt} attemps</h3>)}
        </div>
    )
}
