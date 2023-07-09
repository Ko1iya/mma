import ButCalling from "../ButCalling/ButCalling"
import styles from "./calling.module.css"

interface СallingProps {}

function Сalling(prop: СallingProps) {
  return (
    <div className={styles.сalling}>
      <p className={styles.сallingEl}>Присоединяйся к нам сейчас!</p>
      <p className={styles.сallingEl}>
        Мы поможем тебе преодолеть себя и стать настоящим бойцом!
      </p>
      <ButCalling text='НАЧАТЬ ТРЕНИРОВКИ' />
    </div>
  )
}

export default Сalling
