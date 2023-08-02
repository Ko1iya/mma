import ButCalling from "../ButCalling/ButCalling"
import Header from "../Header/Header"
import Main from "../Main/Main"
import styles from "./myApp.module.css"

interface MyAppProps {}

function MyApp() {
  return (
    <div className={styles.myApp}>
      <Header />
      <Main />
      <div className={styles.footer}></div>
      <ButCalling text='Начать тренировки' />
    </div>
  )
}

export default MyApp
