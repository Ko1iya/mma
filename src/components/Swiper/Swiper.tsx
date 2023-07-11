import "swiper/css"

import styles from "./swiper.module.css"
import SwiperItem from "./SwiperItem"

interface SwiperProps {
  items?: string[]
}

function Swiper({ items }: SwiperProps) {
  return (
    <div className={styles.swiper}>
      <div className={styles.swiperContainer}>
        <ul className={styles.swiperList}>
          {items &&
            items.map((item, idx) => <SwiperItem key={idx}>{item}</SwiperItem>)}
        </ul>
      </div>
    </div>
  )
}

export default Swiper
