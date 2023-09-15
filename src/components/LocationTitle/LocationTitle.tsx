import styles from "./locationTitle.module.css"

interface IlocationMap {
  [key: number]: string
}

const locationMap: IlocationMap = {
  1: "Ангарск",
  2: "Мегет",
  3: "Хомутово",
  4: "Зима",
  5: "Киренск",
}

interface LocationTitleProps {
  value: string | null
  editLocation: () => void
}

function LocationTitle(prop: LocationTitleProps) {
  const { value, editLocation } = prop
  const num = value ? +value : null
  return (
    <button className={styles.locationTitle} onClick={() => editLocation()}>
      {num ? locationMap[num] : null}
    </button>
  )
}

export default LocationTitle
