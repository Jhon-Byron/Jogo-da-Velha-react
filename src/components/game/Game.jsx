import { useState } from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/GameOption'


function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const handleClick = (position) => {
    if (gameState[position] === 0){
      let newGameState = [...gameState]
      newGameState[position] = currentPlayer
      setCurrentPlayer(currentPlayer * -1)
      setGameState(newGameState)
    }
  }
  return (
    <div className={styles.Gamecontent}> 
      <div className={styles.game}>
        {
        gameState.map((value, position) =>
        <GameOption 
        key={`game-option-pos-${position}`} status={value} onClick={() => handleClick(position) }/>
        )
      }
      </div>
      <div className={styles.Gameinfo}>
        <h4>Próximo a jogar:</h4>
        {
          currentPlayer === 1 && <Icon  iconName="circle"/>
        }
        {
        currentPlayer === -1 && <Icon  iconName="x"/>
        }
      </div>
    </div>

  )
}

export default Game