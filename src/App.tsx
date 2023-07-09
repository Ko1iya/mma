import { useEffect, useState } from "react"
import styles from "./app.module.css"

import MyApp from "./components/MyApp/MyApp"

function App() {
  const [loading, setLoading] = useState(true)

  // console.log(styles)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='app'>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.img}></div>
          <div className={styles.loader}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      ) : (
        <MyApp />
      )}
    </div>
  )
}

export default App
