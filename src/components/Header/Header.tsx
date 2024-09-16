import styles from "./header.module.css"
import { useEffect, useState } from "react"
import logo from "../../img/logo3.png"
import BackBranches from "../BackBranches/BackBranches"
import { AppContext } from "../../App"
import { useContext } from "react"
import hamburger from "../../img/hamburger-menu.svg"
interface HeaderProps {
  location: string
}

function Header(prop: HeaderProps) {
  const { location } = prop

  const { editLocation } = useContext(AppContext)

  const [myScrollY, setMyScrollY] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.round(window.scrollY)

      const countWidth = scrolled > 186 ? 64 : 250 - scrolled

      setMyScrollY(countWidth)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [myScrollY])

  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <BackBranches editLocation={editLocation} value={location} />
        <img
          className={styles.logo}
          style={{ width: myScrollY + "px" }}
          src={logo}
          alt='Эмблема клуба'
        />
        <button className={styles.hamburger}>
          <img src={hamburger} className={styles.hamburgerImg} alt='Burger' />
        </button>
      </div>
    </header>
  )
}

export default Header
