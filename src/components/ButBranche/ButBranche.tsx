import styles from "./butBranche.module.css"

interface ButBrancheProps {
  children: string
  id: number
}

function ButBranche(prop: ButBrancheProps) {
  function changeLocation(param: number) {
    console.log(param)
    localStorage.setItem("location", `${param}`)
  }

  return (
    <button
      className={styles.butBranche}
      onClick={() => changeLocation(prop.id)}
    >
      {prop.children}
    </button>
  )
}

export default ButBranche
