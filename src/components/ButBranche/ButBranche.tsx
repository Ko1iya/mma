import styles from "./butBranche.module.css"

interface ButBrancheProps {
  children: string
  id: number
  changeLocation: (param: string) => void
}

function ButBranche(prop: ButBrancheProps) {
  return (
    <button
      className={styles.butBranche}
      onClick={() => prop.changeLocation(`${prop.id}`)}
    >
      {prop.children}
    </button>
  )
}

export default ButBranche
