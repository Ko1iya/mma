import React, { useState, useContext } from "react"
import styles from "./main.module.css"

import rustam from "../../img/Rustam.png"
import AboutUs from "../AboutUs/AboutUs"
import BackBranches from "../BackBranches/BackBranches"
import Map from "../Map/Map"
import TwoGisModal from "../TwoGisModal/TwoGisModal"
import { AppContext } from "../../App"
import { myDataBranches } from "../../data/achievements"

interface MainProps {
  location: string
}

function Main(prop: MainProps) {
  const [twoGisModalOpen, setTwoGisModalOpen] = useState(false)

  function handlerModalOpen() {
    setTwoGisModalOpen((pre) => !pre)
  }

  const { editLocation } = useContext(AppContext)

  const { location } = prop

  const hereLocation = myDataBranches[location]

  return (
    <main className={styles.main}>
      <BackBranches editLocation={editLocation} value={location} />
      <Map location={prop.location} openModal={handlerModalOpen} />
      {twoGisModalOpen && <TwoGisModal openModal={handlerModalOpen} />}

      {hereLocation.trainer.map((el, i) => {
        return (
          <AboutUs title={el} img={hereLocation.trainerPhoto[i]} trainer={true}>
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
        )
      })}
    </main>
  )
}

export default Main
