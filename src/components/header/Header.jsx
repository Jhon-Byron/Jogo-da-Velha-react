import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitlte/Subtitle"
import Icon from '../icon/Icon'


function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha </Title>
      <Subtitle>Criado por Jhon Byron</Subtitle>
      <div className={styles.iconcontent}>
        <Icon iconName="github" Link="https://github.com/Jhon-Byron" />
      </div>
    </div>
  ) 
}

export default Header 