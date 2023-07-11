import styles from "./carusel.module.css"

interface CaruselProps {}

function Carusel(prop: CaruselProps) {
  return (
    <div className={styles.carusel}>
      <div className={styles.caruselContainer}></div>
    </div>
  )
}

export default Carusel
