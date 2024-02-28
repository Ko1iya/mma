import React, { useState, useContext } from "react"
import styles from "./main.module.css"

import rustam from "../../img/Rustam.png"
import AboutUs from "../AboutUs/AboutUs"
import BackBranches from "../BackBranches/BackBranches"
import Map from "../Map/Map"
import TwoGisModal from "../TwoGisModal/TwoGisModal"
import { AppContext } from "../../App"
import { myDataBranches } from "../../data/achievements"
import Calling from "../Сalling/Calling"
import ButCalling from "../ButCalling/ButCalling"
import Gallery from "../Gallery/Gallery"
import Schedule from "../Schedule/Schedule"
import FinishCalling from "../finishCalling/FinishCalling"

interface MainProps {
  location: string
}

function Main(prop: MainProps) {
  const [twoGisModalOpen, setTwoGisModalOpen] = useState(false)
  const [callingOpen, setCallingOpen] = useState(false)

  function handlerCallingOpen() {
    setCallingOpen((pre) => !pre)
  }
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
      {callingOpen && <Calling openModal={handlerCallingOpen} />}

      {hereLocation.trainer.map((el, i) => {
        return (
          <AboutUs
            title={el}
            img={hereLocation.trainerPhoto[i]}
            trainer={true}
            key={hereLocation.trainer[i]}
          >
            {{
              preText: `${hereLocation.preText[i]}`,
              text: hereLocation.text[i],
            }}
          </AboutUs>
        )
      })}

      <Gallery></Gallery>
      <Schedule handlerSchedule={hereLocation.schedule} />
      <FinishCalling myOnClick={handlerCallingOpen} />

      <ButCalling text='Начать тренировки' myOnClick={handlerCallingOpen} />
    </main>
  )
}

export default Main
