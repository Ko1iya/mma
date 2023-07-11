import ButCalling from "../ButCalling/ButCalling"
import MainText from "../MainText/MainText"
import styles from "./calling.module.css"

interface СallingProps {}

function Сalling(prop: СallingProps) {
  return (
    <div className={styles.сalling}>
      <MainText className={styles.сallingEl}>
        Присоединяйся к нам сейчас!
      </MainText>
      <MainText className={styles.сallingEl}>
        Мы поможем тебе преодолеть себя и стать настоящим бойцом!
      </MainText>

      <ButCalling text='НАЧАТЬ ТРЕНИРОВКИ' />
    </div>
  )
}

export default Сalling
