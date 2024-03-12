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
import vishnyakov from "../../img/trainers/vishnyakov.png"
import { myDataBranches } from "../../data/achievements"
import Equipment from "../Equipment/Equipment"

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

  function redirectHref(id: string) {
    window.location.href = id
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
              "Ангарская федерация рукопашного боя и контактного каратэ и спортивный клуб «ЭРОН» образована весной 2000 г на базе знаний и опыта Чупина Вадима Владимировича – мастера спорта по рукопашному бою, тренера высшей категории и ветерана военной службы. ",
              "Наши спортсмены – это чемпионы мира и России, обладатели званий мастеров спорта и кандидатов в мастера спорта. Здесь, на четырех профессиональных борцовских коврах, среди боксерских мешков, лап и современного оборудования, каждый день рождаются победители.",
              "В 'ЭРОН' вы не только овладеете универсальным боем, армейским рукопашным боем и спортивным каратэ, но и научитесь преодолевать любые препятствия, как на полосе препятствий Спецназа, так и в жизни. Ваши тренировки будут построены на реальных приемах самообороны, проверенных в самых жестких условиях.",
              "Мы предлагаем не только интенсивные занятия и соревнования, но и насыщенную социальную жизнь – от дискотек до ежегодных сплавов по величественным рекам Восточной Сибири. Наши спортсмены – это не просто бойцы, это полноценные личности, готовые к любым испытаниям.",
              'Занятия в "ЭРОН" – это ваш шанс стать сильнее, быстрее, мудрее. Подготовьтесь к воинской службе, укрепите свою личную самооценку и заведите надежных друзей. С нами вы не просто занимаетесь спортом. Вы становитесь частью престижной истории успеха.',
              'Присоединяйтесь к команде СК "ЭРОН" – где каждый удар, каждый бросок и каждый шаг на пути к победе имеют значение. И где вы не просто выигрываете трофеи, но и выигрываете в жизни.',
            ],
          }}
        </AboutUs>

        <div className={styles.containerButton}>
          <div ref={lastButton}></div>
          <h1 className={styles.titleBranches}>
            Выбери ближайший спортивный клуб
          </h1>
          <ButBranche
            id={"angarsk"}
            changeLocation={prop.changeLocation}
            className={styles.delay1}
          >
            {myDataBranches.angarsk.name}
          </ButBranche>
          <ButBranche
            id={"meget"}
            changeLocation={prop.changeLocation}
            className={styles.delay2}
          >
            {myDataBranches.meget.name}
          </ButBranche>
          <ButBranche
            id={"kuda"}
            changeLocation={prop.changeLocation}
            className={styles.delay3}
          >
            {myDataBranches.kuda.name}
          </ButBranche>
          <ButBranche
            id={"zima"}
            changeLocation={prop.changeLocation}
            className={styles.delay4}
          >
            {myDataBranches.zima.name}
          </ButBranche>

          <ButBranche
            id={"urik"}
            changeLocation={prop.changeLocation}
            className={styles.delay5}
          >
            {myDataBranches.urik.name}
          </ButBranche>
        </div>

        <div className={styles.containerTrainer}>
          <h1 className={styles.titleBranches}>Наши действующие тренера:</h1>
          <Trainer
            img={chupin}
            text='Черный пояс 2 дан по спортивному каратэ. Мастер спорта по армейскому рукопашному бою. Судья Всероссийской и Международной категории'
          >
            Чупин Вадим Владимирович
          </Trainer>
          <Trainer
            img={odinaev}
            text='Зеленый пояс по спортивному каратэ. Мастер спорта по универсальному бою. Судья 3 категории'
          >
            Одинаев Рустам Дилшодович
          </Trainer>
          <Trainer
            img={schmakov}
            text='Черный пояс по спортивному каратэ. КМС по универсальному бою. Судья 1 категории.'
          >
            Шмаков Алексей Викторович
          </Trainer>
          <Trainer
            img={novzov}
            text=' Черный пояс по спортивному каратэ. КМС по универсальному бою. Судья 3 категории'
          >
            Новцов Андрей Сергеевич
          </Trainer>
          <Trainer
            img={kovalenko}
            text='Черный пояс по спортивному каратэ. КМС по универсальному бою. Судья 3 категории'
          >
            Коваленко Роман Александрович
          </Trainer>
          <Trainer
            img={vishnyakov}
            text=' Чёрный пояс по спортивному каратэ. КМС по универсальному бою. Судья 3 категории'
          >
            Вишняков Егор Александрович
          </Trainer>
        </div>

        <Equipment />

        <div className={styles.containerButton}>
          <h1 className={styles.titleBranches}>Архив фото</h1>
          <ButBranche
            id={"https://disk.yandex.ru/d/4j-kY6XK26LZGA"}
            changeLocation={redirectHref}
            className={styles.delay1}
          >
            "2000 - 2005 г."
          </ButBranche>
          <ButBranche
            id={"https://disk.yandex.ru/d/ZaHijQdZR8olPw"}
            changeLocation={redirectHref}
            className={styles.delay2}
          >
            "2005 - 2010 г."
          </ButBranche>
          <ButBranche
            id={"https://disk.yandex.ru/d/xsjFjqJWZuQ6vg"}
            changeLocation={redirectHref}
            className={styles.delay3}
          >
            "2010 - 2015 г."
          </ButBranche>
          <ButBranche
            id={"https://disk.yandex.ru/d/V8pYLWSCK3CvAA"}
            changeLocation={redirectHref}
            className={styles.delay4}
          >
            "2015 - 2020 г."
          </ButBranche>

          <ButBranche
            id={"https://disk.yandex.ru/d/VilRba_iZs_sFw"}
            changeLocation={redirectHref}
            className={styles.delay5}
          >
            "2020 - наши дни"
          </ButBranche>
        </div>

        <ButCalling
          text='Выбрать филиал'
          myOnClick={scrollToElement}
        ></ButCalling>
      </div>
    </div>
  )
}

export default Branches
