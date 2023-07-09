import styles from "./burger.module.css"

interface BurgerProps {}

function Burger(prop: BurgerProps) {
  return <div className={styles.burger}></div>
}

export default Burger
