import styles from "./MyApp.module.css"

interface MyAppProps {}

function MyApp(prop: MyAppProps) {
  return <div className={styles.myApp}></div>
}

export default MyApp
