import styles from "./backBranches.module.css"
import ButBackToBranches from "../../img/ButBackToBranches.svg"
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

interface BackBranchesProps {
  value: string | null
  editLocation: () => void
}

function BackBranches(prop: BackBranchesProps) {
  const { value, editLocation } = prop
  const num = value ? +value : null
  return (
    <button className={styles.backBranches} onClick={() => editLocation()}>
      <img src={ButBackToBranches} alt='Назад' />
    </button>
  )
}

export default BackBranches
