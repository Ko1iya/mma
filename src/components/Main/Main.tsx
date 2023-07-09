import TitleMotivation from "../TitleMotivation/TitleMotivation"
import styles from "./main.module.css"

interface MainProps {}

function Main(prop: MainProps) {
  return (
    <main className={styles.main}>
      <TitleMotivation />
    </main>
  )
}

export default Main
