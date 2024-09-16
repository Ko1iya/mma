import ButBranche from "../ButBranche/ButBranche"
import styles from "./branches.module.css"
import icon from "../../img/icon.jpeg"

import { useRef } from "react"
import { myDataBranches } from "../../data/achievements"
import { log } from "console"

interface AboutUsProps {
  changeLocation: (param: string) => void
}

function Branches(prop: AboutUsProps) {
  const lastButton = useRef<HTMLDivElement>(null)

  // const scrollToElement = () => {
  //   if (lastButton.current) {
  //     lastButton.current.scrollIntoView({
  //       behavior: "smooth", // опционально для плавного скролла
  //       block: "start", // опционально для позиционирования элемента относительно окна просмотра
  //     })
  //   }
  // }

  return (
    <div className={styles.containerBranches}>
      <div className={styles.branches}>
        <img className={styles.img} src={icon} alt='Эмблема клуба' />

        <div className={styles.containerButton}>
          <div ref={lastButton}></div>
          <h1 className={styles.titleBranches}>
            Выберите ближайший спортивный клуб
          </h1>
          <ButBranche
            id={"angarsk"}
            changeLocation={prop.changeLocation}
            className={styles.delay1}
          >
            {myDataBranches.angarsk.name}
          </ButBranche>
          <ButBranche
            id={"meget"}
            changeLocation={prop.changeLocation}
            className={styles.delay2}
          >
            {myDataBranches.meget.name}
          </ButBranche>
          <ButBranche
            id={"kuda"}
            changeLocation={prop.changeLocation}
            className={styles.delay3}
          >
            {myDataBranches.kuda.name}
          </ButBranche>
          <ButBranche
            id={"zima"}
            changeLocation={prop.changeLocation}
            className={styles.delay4}
          >
            {myDataBranches.zima.name}
          </ButBranche>

          <ButBranche
            id={"urik"}
            changeLocation={prop.changeLocation}
            className={styles.delay5}
          >
            {myDataBranches.urik.name}
          </ButBranche>
        </div>
      </div>
    </div>
  )
}

export default Branches
