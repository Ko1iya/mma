import styles from "./map.module.css"
import KudaMap from "../../img/KudaMap.png"
import { myDataBranches } from "../../data/achievements"

interface Iaddresses {
  [key: number]: string
}
const locationMap: Iaddresses = {
  1: myDataBranches.angarsk.map,
  2: myDataBranches.meget.map,
  3: myDataBranches.kuda.map,
  4: myDataBranches.zima.map,
  5: myDataBranches.urik.map,
}

const addresses: Iaddresses = {
  1: myDataBranches.angarsk.name,
  2: myDataBranches.meget.name,
  3: myDataBranches.kuda.name,
  4: myDataBranches.zima.name,
  5: myDataBranches.urik.name,
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
