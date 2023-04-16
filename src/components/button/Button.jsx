import styles from './Button.module.css'

function Button ({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} className={styles.button}
    disabled={disabled}>{children}</button>
  )
}

export default Button