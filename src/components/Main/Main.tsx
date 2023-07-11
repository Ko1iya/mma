import TitleMotivation from "../TitleMotivation/TitleMotivation"
import styles from "./main.module.css"
import Calling from "../Сalling/Calling"
import Achievements from "../Achievements/Achievements"

interface MainProps {}

function Main(prop: MainProps) {
  return (
    <main className={styles.main}>
      <TitleMotivation />
      <Calling />
      <Achievements />
    </main>
  )
}

export default Main
