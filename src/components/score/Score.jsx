import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score ({ isCircle, isX, isEmpate }) {
  return (
    <>
      <h4>Placar:</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" />
          <h2>{isCircle}</h2>
        </div>
        <div>
          <h4 className={styles.span}>Draw</h4>
          <h2 className={styles.scoreContent}>{isEmpate}</h2>
        </div>
        <div>
          <Icon iconName="x"/>
          <h2 className={styles.scoreContent}>{isX}</h2>
        </div>
      </div>
    </>
  )
}

export default Score