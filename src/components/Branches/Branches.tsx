import ButBranche from "../ButBranche/ButBranche"
import styles from "./branches.module.css"
import icon from "../../logo.png"
import AboutUs from "../AboutUs/AboutUs"
import cups from "../../img/cups.png"
import ButCalling from "../ButCalling/ButCalling"
import { useRef } from "react"
import Trainer from "../Trainer/Trainer"
import odinaev from "../../img/trainers/Odinaev.png"
import kovalenko from "../../img/trainers/Kovalenko.png"
import novzov from "../../img/trainers/novzov.png"
import schmakov from "../../img/trainers/Shmakov.png"
import chupin from "../../img/trainers/Chupin.png"

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
              "Ангарская федерация рукопашного боя и контактного каратэ и спортивный клуб «ЭРОН» образована весной 2000 г ",
            text: [
              "Наш клуб существует уже 25 лет, и за это время мы накопили огромный опыт в обучении и подготовке наших участников к универсальному бою. Мы гордимся тем, что стали одним из ведущих клубов в России, привлекая к себе поклонников этого увлекательного вида спорта. ",
              " На протяжении всех этих лет мы выдали множество поясов различных степеней квалификации, давая нашим участникам возможность подтверждать свои навыки и достижения. Регулярные соревнования и турниры, которые мы проводим, помогают нашим участникам получать неоценимый опыт и становиться более сильными и уверенными.",
            ],
          }}
        </AboutUs>
        <div className={styles.containerButton}>
          <div ref={lastButton}></div>
          <h1 className={styles.titleBranches}>
            Выбери ближайший спортивный клуб
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
        </div>

        <div className={styles.containerTrainer}>
          <h1 className={styles.titleBranches}>У нас выдающиеся тренера:</h1>
          <Trainer
            img={chupin}
            text='Черный пояс 2 дан по спортивному каратэ. Мастер спорта судья Всероссийской и Международной категории'
          >
            Чупин Вадим Владимирович
          </Trainer>
          <Trainer
            img={odinaev}
            text='Зеленый пояс, Мастер Спорта, судья 1 категории'
          >
            Одинаев Рустам Дилшодович
          </Trainer>
          <Trainer
            img={schmakov}
            text='Черный пояс по спортивному каратэ, КМС , судья 1 категории.'
          >
            Шмаков Алексей Викторович
          </Trainer>
          <Trainer
            img={novzov}
            text='КМС Черный пояс по Спортивному каратэ, судья 1 категории'
          >
            Новцов Андрей Сергеевич
          </Trainer>
          <Trainer
            img={kovalenko}
            text='Черный пояс по спортивному каратэ, КМС, судья 2 категории'
          >
            Коваленко Роман Александрович
          </Trainer>
        </div>

        {/* <div
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
        </div> */}

        <ButCalling
          text='Выбрать филиал'
          myOnClick={scrollToElement}
        ></ButCalling>
      </div>
    </div>
  )
}

export default Branches
