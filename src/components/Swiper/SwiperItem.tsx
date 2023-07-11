import styles from "./swiperItem.module.css"

interface SwiperItemProps {
  children: string
}

function SwiperItem(prop: SwiperItemProps) {
  return <li className={styles.swiperItem}>{prop.children}</li>
}

export default SwiperItem
