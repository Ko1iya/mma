import { RiMenu3Fill as BurgerIcon } from "react-icons/ri"

import styles from "./butBurger.module.css"

interface ButBurgerProps {}

function ButBurger(prop: ButBurgerProps) {
  return (
    <button className={styles.butBurger}>
      <BurgerIcon className={styles.burgerIcon} />
    </button>
  )
}

export default ButBurger
