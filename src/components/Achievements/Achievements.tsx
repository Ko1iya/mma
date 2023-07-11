import Swiper from "../Swiper/Swiper"
import MainText from "../MainText/MainText"
import styles from "./achievements.module.css"
import achievements from "../../data/achievements"

interface AchievementsProps {}

function Achievements(prop: AchievementsProps) {
  return (
    <div className={styles.achievements}>
      <MainText className={styles.achievementsText}>
        Достижения наших воспитанников, которыми мы гордимся:
      </MainText>

      <Swiper items={achievements} />
    </div>
  )
}

export default Achievements
