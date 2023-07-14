import "swiper/css"

// Swiper находится в папках и файлах Swiper.tsx, swiper.module.css,
// swiperItem.module.css, SwiperItem.ts, dom.ts, hooks.ts

import styles from "./swiper.module.css"
import SwiperItem from "./SwiperItem"
import { useStateRef, getRefValue } from "../../hooks"
import { getTouchEventData } from "../../dom"
import { useRef, useState } from "react"

const MIN_SWIPE_REQUIRED = 40

interface SwiperProps {
  items?: string[]
}

function Swiper({ items }: SwiperProps) {
  // Делаем ссылку на наш ul контейнер
  const containerRef = useRef<HTMLUListElement>(null)
  // сделаем ссылку на исходное значение смещения на момент нажатия мыши
  // чтобы мы могли получить доступ к нему из других обработчиков событий позже
  const currentOffsetXRef = useRef(0)
  const startXRef = useRef(0)
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)
  const minOffsetXRef = useRef(0)
  const containerWidthRef = useRef(0)
  const [isSwiping, setIsSwiping] = useState(false)

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX
    const diff = getRefValue(startXRef) - currentX
    let newOffsetX = getRefValue(currentOffsetXRef) - diff

    const maxOffsetX = 0
    const minOffsetX = getRefValue(minOffsetXRef)

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX
    }
    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX
    }

    setOffsetX(newOffsetX)
  }

  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef)
    const containerWidth = getRefValue(containerWidthRef)
    let newOffsetX = getRefValue(offsetXRef)

    const diff = currentOffsetX - newOffsetX

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth
      }
    } else {
      // remain in the current image
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth
    }

    setOffsetX(newOffsetX)
    setIsSwiping(false)

    window.removeEventListener("touchend", onTouchEnd)
    window.removeEventListener("touchmove", onTouchMove)
    window.removeEventListener("mouseup", onTouchEnd)
    window.removeEventListener("mousemove", onTouchMove)
  }

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true)
    currentOffsetXRef.current = getRefValue(offsetXRef)
    // px куда я нажал
    startXRef.current = getTouchEventData(e).clientX

    const containerEl = getRefValue(containerRef)

    containerWidthRef.current = containerEl.offsetWidth
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth

    window.addEventListener("touchend", onTouchEnd)
    window.addEventListener("touchmove", onTouchMove)
    window.addEventListener("mousemove", onTouchMove)
    window.addEventListener("mouseup", onTouchEnd)
  }

  return (
    <div className={styles.swiper}>
      <div
        className={styles.swiperContainer}
        onMouseDown={onTouchStart}
        onTouchStart={onTouchStart}
      >
        <ul
          ref={containerRef}
          className={`${styles.swiperList} ${
            isSwiping ? styles.swiperListNoneTransition : ""
          }`}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {items &&
            items.map((item, idx) => <SwiperItem key={idx}>{item}</SwiperItem>)}
        </ul>
      </div>
    </div>
  )
}

export default Swiper
