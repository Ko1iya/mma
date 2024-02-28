import { useEffect, useState } from "react"
import styles from "./app.module.css"
import React from "react"

import MyApp from "./components/MyApp/MyApp"
import Branches from "./components/Branches/Branches"
import { myDataBranches } from "./data/achievements"

//------------------------
interface IAppContext {
  location: string
  editLocation: () => void
}

export const AppContext = React.createContext<IAppContext>({
  location: "start",
  editLocation: () => null,
})
//------------------------

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  //-----------------------------------------
  // Реализация блока выбора филиала
  const [location, setLocation] = useState("start")

  function handlerChangeLocation(param: string) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // опционально для плавного скролла
    })
    setLocation(param)
  } // для передачи в компонент Branches

  function editLocation() {
    setLocation("start")
    window.scrollTo({
      top: 0,
      behavior: "smooth", // опционально для плавного скролла
    })
  } // для редактирования location, передается в компонент BackBranches

  //-----------------------------------------

  return (
    <AppContext.Provider value={{ location, editLocation }}>
      <div className={styles.app}>
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.img}></div>
            <div className={styles.loader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
        ) : location == "start" ? (
          <Branches changeLocation={handlerChangeLocation}></Branches>
        ) : (
          <MyApp location={location} />
        )}
      </div>
    </AppContext.Provider>
  )
}

export default App
