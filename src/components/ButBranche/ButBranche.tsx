import styles from "./butBranche.module.css"

interface ButBrancheProps {
  children: string
  id: number
  changeLocation: (param: string) => void
  className?: string
}

function ButBranche(prop: ButBrancheProps) {
  return (
    <button
      className={`${styles.butBranche} ${prop.className}`}
      onClick={() => prop.changeLocation(`${prop.id}`)}
    >
      {prop.children}
    </button>
  )
}

export default ButBranche
