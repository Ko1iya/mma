import styles from "./backBranches.module.css"
import ButBackToBranches from "../../img/ButBackToBranches.svg"

interface BackBranchesProps {
  value: string | null
  editLocation: () => void
}

function BackBranches(prop: BackBranchesProps) {
  const { value, editLocation } = prop

  return (
    <button className={styles.backBranches} onClick={() => editLocation()}>
      <img
        src={ButBackToBranches}
        className={styles.butBackToBranches}
        alt='Назад'
      />
    </button>
  )
}

export default BackBranches
