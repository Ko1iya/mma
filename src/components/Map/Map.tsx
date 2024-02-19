import styles from "./map.module.css"
import KudaMap from "../../img/KudaMap.png"
import AngarskMap from "../../img/AngarskMap.png"

interface Iaddresses {
  [key: number]: string
}
const locationMap: Iaddresses = {
  1: AngarskMap,
  2: AngarskMap,
  3: KudaMap,
  4: AngarskMap,
  5: AngarskMap,
}

const addresses: Iaddresses = {
  1: "г. Ангарск, 17 мк/р, шк. №17",
  2: "п. Мегет, переулок Школьный, шк. №41",
  3: "п. Хомутово, Кудинский спортивный комплекс",
  4: "г. Зима школа № 5.",
  5: "п. Урик",
}

interface MapProps {
  location: number | null
  openModal: () => void
}

function Map(prop: MapProps) {
  const { location, openModal } = prop
  const text = `Мы находимся по адресу ${location ? addresses[location] : null}`

  return (
    <div className={styles.map} onClick={() => openModal()}>
      <p className={styles.titleMap}>{text}</p>
      <img
        src={location ? locationMap[location] : ""}
        alt='Карта'
        className={styles.kudaMap}
      />
      <p className={styles.showGIS}>Показать в 2ГИС</p>
    </div>
  )
}

export default Map
