import Swiper from "../Swiper/Swiper"
import MainText from "../MainText/MainText"
import styles from "./achievements.module.css"

interface AchievementsProps {}

function Achievements(prop: AchievementsProps) {
  return (
    <div className={styles.achievements}>
      <MainText className={styles.achievementsText}>
        Достижения наших воспитанников, которыми мы гордимся:
      </MainText>

      {/* <Swiper items={achievements} /> */}
      {/* был импорт массива с достижениями */}
    </div>
  )
}

export default Achievements
