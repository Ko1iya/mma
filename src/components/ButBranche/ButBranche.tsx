import styles from "./butBranche.module.css"
import { RefObject, useRef } from "react"
interface ButBrancheProps {
  children: string
  id: string
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
