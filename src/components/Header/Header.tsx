import styles from "./header.module.css"
import ButBurger from "../ButBurger/ButBurger"
import icon from "../../logo.svg"
import name from "../../img/name.svg"

interface HeaderProps {}

function Header(prop: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.clubName}>
          <img className={styles.imgName} src={name} />
        </div>
        <div className={styles.img}>
          <img className={styles.img} src={icon} alt='Эмблема клуба' />
        </div>
        <div>
          <ButBurger />
        </div>
      </div>
    </header>
  )
}

export default Header
