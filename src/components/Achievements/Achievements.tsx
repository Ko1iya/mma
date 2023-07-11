import Carusel from "../Carusel/Carusel"
import MainText from "../MainText/MainText"
import styles from "./achievements.module.css"

interface AchievementsProps {}

function Achievements(prop: AchievementsProps) {
  return (
    <div className={styles.achievements}>
      <MainText>Достижения наших воспитанников, которыми мы гордимся:</MainText>

      <Carusel />
    </div>
  )
}

export default Achievements
