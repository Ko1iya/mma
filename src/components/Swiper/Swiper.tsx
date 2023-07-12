import "swiper/css"

import styles from "./swiper.module.css"
import SwiperItem from "./SwiperItem"
import { useStateRef, getRefValue } from "../../hooks"
import { useRef } from "react"

interface SwiperProps {
  items?: string[]
}

function Swiper({ items }: SwiperProps) {
  const currentOffsetXRef = useRef(0)
  const startXRef = useRef(0)
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)

  const onMouseMove = (e: MouseEvent) => {
    const currentX = e.clientX
    const diff = getRefValue(startXRef) - currentX
    const newOffsetX = getRefValue(currentOffsetXRef) - diff

    setOffsetX(newOffsetX)
  }

  const onMouseUp = () => {
    window.removeEventListener("mouseup", onMouseUp)
    window.removeEventListener("mousemove", onMouseMove)
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    currentOffsetXRef.current = getRefValue(offsetXRef)
    startXRef.current = e.clientX

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
  }

  return (
    <div className={styles.swiper}>
      <div className={styles.swiperContainer} onMouseDown={onMouseDown}>
        <ul
          className={styles.swiperList}
          style={{ transform: `translate3d(${offsetX}%, 0, 0)` }}
        >
          {items &&
            items.map((item, idx) => <SwiperItem key={idx}>{item}</SwiperItem>)}
        </ul>
      </div>
    </div>
  )
}

export default Swiper
