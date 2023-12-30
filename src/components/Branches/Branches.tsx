import ButBranche from "../ButBranche/ButBranche"
import styles from "./branches.module.css"
import icon from "../../logo.png"
import AboutUs from "../AboutUs/AboutUs"
import cups from "../../img/Cubs.png"
import ButCalling from "../ButCalling/ButCalling"
import { useRef } from "react"
import Archive from "../Archive/Archive"
import MainText from "../MainText/MainText"

interface AboutUsProps {
  changeLocation: (param: string) => void
}

function Branches(prop: AboutUsProps) {
  const lastButton = useRef<HTMLDivElement>(null)

  const scrollToElement = () => {
    if (lastButton.current) {
      lastButton.current.scrollIntoView({
        behavior: "smooth", // опционально для плавного скролла
        block: "start", // опционально для позиционирования элемента относительно окна просмотра
      })
    }
  }

  return (
    <div className={styles.containerBranches}>
      <div className={styles.branches}>
        <img className={styles.img} src={icon} alt='Эмблема клуба' />
        <AboutUs title='История нашего клуба' img={cups}>
          {{
            preText:
              "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт...",
            text: [
              "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт в обучении и подготовке наших участников к универсальному бою. Мы гордимся тем, что стали одним из ведущих клубов в России, привлекая к себе поклонников этого увлекательного вида спорта. ",
              " На протяжении всех этих лет мы выдали множество поясов различных степеней квалификации, давая нашим участникам возможность подтверждать свои навыки и достижения. Регулярные соревнования и турниры, которые мы проводим, помогают нашим участникам получать неоценимый опыт и становиться более сильными и уверенными.",
            ],
          }}
        </AboutUs>
        <h1 className={styles.titleBranches}>
          Выбери ближайший спортивный клуб
        </h1>
        <div ref={lastButton}></div>
        <ButBranche
          id={1}
          changeLocation={prop.changeLocation}
          className={styles.delay1}
        >
          г. Ангарск, 17 мк/р, шк. №17
        </ButBranche>
        <ButBranche
          id={2}
          changeLocation={prop.changeLocation}
          className={styles.delay2}
        >
          п. Мегет, переулок Школьный, шк. №41
        </ButBranche>
        <ButBranche
          id={3}
          changeLocation={prop.changeLocation}
          className={styles.delay3}
        >
          п. Хомутово, Кудинский спортивный комплекс
        </ButBranche>
        <ButBranche
          id={4}
          changeLocation={prop.changeLocation}
          className={styles.delay4}
        >
          г. Зима школа № 5.
        </ButBranche>

        <ButBranche
          id={5}
          changeLocation={prop.changeLocation}
          className={styles.delay5}
        >
          г. Киренск, СК "Путеец"
        </ButBranche>

        <div
          style={{
            fontSize: "1.6em",
            color: "#eeeeee",
            background: "linear-gradient(to right, #ffc40066, #ffe40000)",
            padding: "5px 0 0 13px",
            fontWeight: "100",
            width: "100%",
            boxSizing: "border-box",
            marginTop: "20px",
            height: "80px",
          }}
        >
          Архив фото
        </div>
        <Archive mySrc='https://live.staticflickr.com/65535/53418553032_52ce554759_n.jpg'></Archive>
        <Archive mySrc='https://live.staticflickr.com/65535/53418552997_4b148ba5cc_n.jpg'></Archive>
        <Archive mySrc='https://live.staticflickr.com/65535/53419637898_78a0077401_n.jpg'></Archive>

        <ButCalling
          text='Выбрать филиал'
          myOnClick={scrollToElement}
        ></ButCalling>
      </div>
    </div>
  )
}

export default Branches
