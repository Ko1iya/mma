import { useEffect, useState } from "react"
import ButCalling from "../ButCalling/ButCalling"
import Header from "../Header/Header"
import Main from "../Main/Main"
import styles from "./myApp.module.css"
import icon from "../../logo.svg"
interface MyAppProps {}

function MyApp() {
  const [myScrollY, setMyScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const countOpacity =
        scrolled < 100 ? 0 : scrolled / 1000 > 0.2 ? 0.2 : scrolled / 1000
      setMyScrollY(countOpacity)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div className={styles.myApp}>
      <img
        className={styles.img}
        src={icon}
        alt='Эмблема клуба'
        style={{ opacity: `${myScrollY}` }}
      />
      <Header />
      <Main />
      <div className={styles.footer}></div>
      <ButCalling text='Начать тренировки' />
    </div>
  )
}

export default MyApp
