import ButBranche from "../ButBranche/ButBranche"
import styles from "./branches.module.css"
import icon from "../../logo.svg"
import AboutUs from "../AboutUs/AboutUs"
import cups from "../../img/Cubs.jpeg"

interface AboutUsProps {
  changeLocation: (param: string) => void
}

function Branches(prop: AboutUsProps) {
  return (
    <div className={styles.containerBranches}>
      <div className={styles.branches}>
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
        <h1 className={styles.titleBranches}>
          Какой спортивный клуб рядом с вами?
        </h1>
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
        <img
          src='https://live.staticflickr.com/65535/53409952895_6a9a9e83ca_w.jpg'
          alt='My'
        />
      </div>
    </div>
  )
}

export default Branches
