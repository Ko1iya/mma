import { v4 as uuid } from "uuid"
import { useEffect, useRef, useState } from "react"
import MainText from "../MainText/MainText"
import styles from "./aboutUs.module.css"

interface AboutUsProps {
  children: {
    preText: string
    text: string[]
  }
  title: string
  img: string
}

function AboutUs(prop: AboutUsProps) {
  const myTextContainer = useRef<HTMLDivElement>(null)

  const [stateText, setStateText] = useState(false)
  const [heightText, setHeightText] = useState(
    myTextContainer.current ? myTextContainer.current.offsetHeight : ""
  )

  useEffect(
    () =>
      setHeightText((pre) =>
        myTextContainer.current
          ? myTextContainer.current.offsetHeight + 200
          : ""
      ),
    [heightText]
  )

  return (
    <div className={styles.aboutUs}>
      <div
        style={{ height: `${stateText ? heightText : 350}px` }}
        className={`${styles.aboutContainer} ${
          stateText && styles.aboutContainerOpen
        }`}
        onClick={() => {
          setStateText((pre) => !pre)
          setHeightText((pre) =>
            myTextContainer.current
              ? myTextContainer.current.offsetHeight + 100
              : ""
          )
        }}
      >
        <div className={styles.imgAboutUsContainer}>
          <img className={styles.imgAboutUs} src={prop.img} alt='Кубки' />
        </div>
        <h1 className={styles.title}>{prop.title}</h1>
        <div ref={myTextContainer} className={styles.textContainer}>
          {!stateText && (
            <div className={styles.preText}>
              <MainText>{prop.children.preText}</MainText>
            </div>
          )}
          {stateText && (
            <div className={styles.text}>
              {prop.children.text.map((el) => (
                <MainText key={uuid()}>{el}</MainText>
              ))}
            </div>
          )}
        </div>

        {!stateText && <p className={styles.readMore}>Подробнее...</p>}
      </div>
    </div>
  )
}

export default AboutUs
