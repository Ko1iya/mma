import styles from "./header.module.css"

import logo from "../../img/logo3.png"

interface HeaderProps {}

function Header(prop: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <img className={styles.logo} src={logo} />
      </div>
    </header>
  )
}

export default Header
