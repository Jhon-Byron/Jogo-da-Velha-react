import styles from './Gameinfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function Gameinfo ({ currentPlayer, winner, onReset, isDraw }) {

  const shouldEnableButton = () => winner !==0 || isDraw

  return (
    <div className={styles.Gameinfo}>
      {
        !isDraw && winner === 0 &&
          <>
            <h4>Próximo a jogar:</h4>
            {
             currentPlayer === 1 &&   <Icon    iconName="circle"/>
            }
            {
             currentPlayer ===  -1 && <Icon    iconName="x"/>
            }
          </>
      }
      {
        !isDraw && winner !== 0 &&
          <>
            <h4>Fim de jogo! Campeão: </h4>
            {
              winner === 1 && <Icon iconName="circle"/>
            }
            {
              winner === -1 && <Icon iconName="x"/>
            }
            <p>PARABÉNS!!!</p>
          </>
      }
      {
        isDraw && <h4>Empate!</h4>
      }
      <Button onClick={onReset} disabled={!shouldEnableButton()}>
        Reiniciar
      </Button>
    </div>
  )
}


export default Gameinfo