import styles from "./main.module.css"
import icon from "../../logo.svg"
import cups from "../../img/Cubs.jpeg"

import AboutUs from "../AboutUs/AboutUs"
import Branches from "../Branches/Branches"
import { useState } from "react"

interface MainProps {}

function Main(prop: MainProps) {
  const [location, setLocation] = useState(null)

  return (
    <main className={styles.main}>
      {localStorage.getItem("location") == null && <Branches></Branches>}

      <img className={styles.img} src={icon} alt='Эмблема клуба' />
      <AboutUs title='Наш клуб с историей' img={cups}>
        {{
          preText:
            "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт...",
          text: [
            "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт в обучении и подготовке наших участников к универсальному бою. Мы гордимся тем, что стали одним из ведущих клубов в России, привлекая к себе поклонников этого увлекательного вида спорта. ",
            " На протяжении всех этих лет мы выдали множество поясов различных степеней квалификации, давая нашим участникам возможность подтверждать свои навыки и достижения. Регулярные соревнования и турниры, которые мы проводим, помогают нашим участникам получать неоценимый опыт и становиться более сильными и уверенными.",
          ],
        }}
      </AboutUs>
    </main>
  )
}

export default Main
