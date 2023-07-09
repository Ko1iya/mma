import styles from "./header.module.css"
import ButBurger from "../ButBurger/ButBurger"

interface HeaderProps {}

function Header(prop: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.clubName}>Спорт</div>
        <div className={styles.img}>
          <img className={styles.img} src='icon.png' alt='Эмблема клуба' />
        </div>
        <div>
          <ButBurger />
        </div>
      </div>
    </header>
  )
}

export default Header
