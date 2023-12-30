import styles from "./butBranche.module.css"
import { RefObject, useRef } from "react"
interface ButBrancheProps {
  children: string
  id: number
  changeLocation: (param: string) => void
  className?: string
  // ref?: RefObject<HTMLButtonElement>
}

function ButBranche(prop: ButBrancheProps) {
  return (
    <button
      className={`${styles.butBranche} ${prop.className}`}
      onClick={() => prop.changeLocation(`${prop.id}`)}
      // ref={prop.ref}
    >
      {prop.children}
    </button>
  )
}

export default ButBranche
