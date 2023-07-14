import styles from "./swiperItem.module.css"

interface SwiperItemProps {
  children: string
}

function SwiperItem(prop: SwiperItemProps) {
  return (
    <li className={styles.swiperItem}>
      <div className={styles.itemContainer}>{prop.children}</div>
    </li>
  )
}

export default SwiperItem
