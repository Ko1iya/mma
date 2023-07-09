import Header from "../Header/Header"
import styles from "./myApp.module.css"

interface MyAppProps {}

function MyApp() {
  return (
    <div className={styles.myApp}>
      <Header />
    </div>
  )
}

export default MyApp
