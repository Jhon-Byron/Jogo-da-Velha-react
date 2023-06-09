import { useState, useEffect } from 'react'
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'
import Gameinfo from '../gameinfo/Gameinfo'
import Score from '../score/Score'

const winnerTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)
  const [winnerLine, setWinnerLine] = useState([]) 
  const [draw, setDraw] = useState(false)
  const [circleWin, setCircleWin] = useState(0)
  const [xwin, setXwin] = useState(0)
  const [empate, setEmpate] = useState(0)


  const handleClick = (position) => {
    if (gameState[position] === 0 && winner === 0){
      let newGameState = [...gameState]
      newGameState[position] = currentPlayer
      setGameState(newGameState)
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if (sum === 3 || sum === -3) {setWinner(sum / 3) ; setWinnerLine(line)}
      if (sum === 3 || sum === -3) {
        const winner = sum / 3
        setWinner(winner)
        if (winner === 1) {
          setCircleWin(circleWin + 1)
        } else {
          setXwin(xwin + 1)
        }
        setWinnerLine(line)
      }
    })
  }

  const handleReset = () => {
    setGameState(Array(9).fill(0))
    setWinner(0)
    setWinnerLine([])
    setDraw(false)
  }

  const verifyDraw = () => {
   /* if (gameState.filter((value) => value === 0).length === 0)*/
   if (gameState.find((value) => value === 0) === undefined && winner === 0) {
    setDraw(true)
    setEmpate(empate + 1)
   }
  }

  const verifyWinnerLine = (position) => winnerLine.find((value) => value === position) !== undefined

  useEffect (() => {
    verifyDraw()
  }, [currentPlayer])

  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
  }, [gameState])

  useEffect(() => {
    if (winner !== 0) setDraw(false)
  }, [winner, gameState])

  return (
    <>
      <div className={styles.Gamecontent}> 
        <div className={styles.game}>
          {
          gameState.map((value, position) =>
          <GameOption 
            key={`game-option-pos-${position}`} 
            status={value} onClick={() => handleClick(position)}
            isWinner={verifyWinnerLine(position)}
            isDraw={draw}
          />
          )
        }
        </div>
          <Gameinfo currentPlayer={currentPlayer}
            winner={winner}
            onReset={handleReset}
            isDraw={draw}
          />
      </div>
      <Score  
        isCircle={circleWin} 
        isX={xwin}
        isEmpate={empate}
      />
    </>

  )
}

export default Game