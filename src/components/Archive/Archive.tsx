import LazyLoad from "react-lazyload"
import styles from "./archive.module.css"

interface ArchiveProps {
  mySrc: string
}

function Archive({ mySrc }: ArchiveProps) {
  return (
    <div className={styles.archive}>
      <LazyLoad height={320} once>
        <img
          src={mySrc}
          alt='My'
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </LazyLoad>
    </div>
  )
}

export default Archive
