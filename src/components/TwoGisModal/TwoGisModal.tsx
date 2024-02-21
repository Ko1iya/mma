import styles from "./twoGisModal.module.css"

interface TwoGisModalProps {
  openModal: () => void
}

function TwoGisModal(prop: TwoGisModalProps) {
  const { openModal } = prop
  return (
    <div className={styles.twoGisModal}>
      <div className={styles.twoGisModalContainer}>
        <p className={styles.title}>Перейти в 2ГИС?</p>
        <div className={styles.buttonContainer}>
          <a
            href='https://go.2gis.com/7cds5'
            target='_blank'
            className={styles.twoGisModalBut}
          >
            Перейти
          </a>
          <button className={styles.twoGisModalBut} onClick={openModal}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}

export default TwoGisModal
