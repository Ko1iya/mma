import TitleMotivation from "../TitleMotivation/TitleMotivation"
import styles from "./main.module.css"
import Calling from "../Сalling/Calling"
import Achievements from "../Achievements/Achievements"
import icon from "../../logo.svg"

interface MainProps {}

function Main(prop: MainProps) {
  return (
    <main className={styles.main}>
      <img className={styles.img} src={icon} alt='Эмблема клуба' />

      <TitleMotivation />
      <Calling />
      <Achievements />
    </main>
  )
}

export default Main
