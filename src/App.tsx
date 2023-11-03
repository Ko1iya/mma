import { useEffect, useState } from "react"
import styles from "./app.module.css"
import React from "react"

import MyApp from "./components/MyApp/MyApp"
import Branches from "./components/Branches/Branches"

//------------------------
interface IAppContext {
  location: string | null
  editLocation: () => void
}

export const AppContext = React.createContext<IAppContext>({
  location: null,
  editLocation: () => null,
})
//------------------------

function App() {
  const [loading, setLoading] = useState(true)

  // console.log(styles)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  //-----------------------------------------
  // Реализация блока выбора филиала
  const [location, setLocation] = useState(localStorage.getItem("location"))

  function handlerChangeLocation(param: string) {
    setLocation(param)
  } // для передачи в компонент Branches

  function editLocation() {
    setLocation(null)
  } // для редактирования location, передается в компонент LocationTitle

  // Эффект, который реагирует на изменение location и записывает значение в localStorage
  useEffect(() => {
    const storedLocation = localStorage.getItem("location")
    if (storedLocation !== location) {
      localStorage.setItem("location", `${location}`)
    }
  }, [location])

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
        ) : location == null ? (
          <Branches changeLocation={handlerChangeLocation}></Branches>
        ) : (
          <MyApp />
        )}
      </div>
    </AppContext.Provider>
  )
}

export default App
