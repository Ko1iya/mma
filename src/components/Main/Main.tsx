import React, { useState, useEffect, useContext } from "react"
import styles from "./main.module.css"

import cups from "../../img/Cubs.jpeg"
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

      <AboutUs title='Наш клуб с историей' img={cups}>
        {{
          preText:
            "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт...",
          text: [
            "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт в обучении и подготовке наших участников к универсальному бою. Мы гордимся тем, что стали одним из ведущих клубов в России, привлекая к себе поклонников этого увлекательного вида спорта. ",
            " На протяжении всех этих лет мы выдали множество поясов различных степеней квалификации, давая нашим участникам возможность подтверждать свои навыки и достижения. Регулярные соревнования и турниры, которые мы проводим, помогают нашим участникам получать неоценимый опыт и становиться более сильными и уверенными.",
          ],
        }}
      </AboutUs>

      <Map
        location={location ? +location : null}
        openModal={handlerModalOpen}
      />

      {twoGisModalOpen && <TwoGisModal openModal={handlerModalOpen} />}

      <AboutUs title='Наш тренерский состав' img={rustam}>
        {{
          preText: "Краткая информация",
          text: [
            "Если вы ищете тренера по универсальному бою, то Одинаев Рустам - ваш идеальный выбор. С трехлетним опытом ведения тренировок и внушительным стажем соревнований, он стал одним из самых востребованных тренеров в мире универсального боя.",
            "Одинаев Рустам занимается универсальным боем с детства и полностью предан этому виду единоборств. Его путь от начинающего бойца до чемпиона олицетворяет многие ценности, которые он передает своим ученикам на каждой тренировке: настойчивость, целеустремленность и твердую веру в свои способности.",
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
