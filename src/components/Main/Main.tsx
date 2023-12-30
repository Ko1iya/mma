import React, { useState, useEffect, useContext } from "react"
import styles from "./main.module.css"

import rustam from "../../img/Rustam.png"
import AboutUs from "../AboutUs/AboutUs"
import Branches from "../Branches/Branches"
import BackBranches from "../BackBranches/BackBranches"
import Map from "../Map/Map"
import TwoGisModal from "../TwoGisModal/TwoGisModal"
import { AppContext } from "../../App"

interface MainProps {}

function Main(prop: MainProps) {
  const [twoGisModalOpen, setTwoGisModalOpen] = useState(false)

  function handlerModalOpen() {
    setTwoGisModalOpen((pre) => !pre)
  }

  const { editLocation, location } = useContext(AppContext)

  return (
    <main className={styles.main}>
      <BackBranches editLocation={editLocation} value={location} />
      <Map
        location={location ? +location : null}
        openModal={handlerModalOpen}
      />
      {twoGisModalOpen && <TwoGisModal openModal={handlerModalOpen} />}
      <AboutUs title='Одинаев Рустам Дилшодович.' img={rustam}>
        {{
          preText:
            "Тренер ск. «ЭРОН» Федерации рукопашного боя и каратэ с. Урик Тренерский. Cтаж 3 года.",
          text: [
            "Cтаж 3 года.",
            "С по универсальному бою 5 кратный  победительчемпионата и первенства СФО по универсальному бою, победитель первенства России, серебряный и бронзовый призер первенства мира так же по универсальному бою",
            "Тренируюсь 7 лет под руководством Чупина Вадима Владимировича.",
          ],
        }}
      </AboutUs>
      <AboutUs title='Наш тренерский состав' img=''>
        {{
          preText: "Фото спортивного зала",
          text: [
            "Если вы ищете тренера по универсальному бою, то Одинаев Рустам - ваш идеальный выбор. С трехлетним опытом ведения тренировок и внушительным стажем соревнований, он стал одним из самых востребованных тренеров в мире универсального боя.",
            "Одинаев Рустам занимается универсальным боем с детства и полностью предан этому виду единоборств. Его путь от начинающего бойца до чемпиона олицетворяет многие ценности, которые он передает своим ученикам на каждой тренировке: настойчивость, целеустремленность и твердую веру в свои способности.",
          ],
        }}
      </AboutUs>
    </main>
  )
}

export default Main
