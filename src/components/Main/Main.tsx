import TitleMotivation from "../TitleMotivation/TitleMotivation"
import styles from "./main.module.css"
import Calling from "../Сalling/Calling"

interface MainProps {}

function Main(prop: MainProps) {
  return (
    <main className={styles.main}>
      <TitleMotivation />
      <Calling />
    </main>
  )
}

export default Main
