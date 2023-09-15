import ButBranche from "../ButBranche/ButBranche"
import styles from "./branches.module.css"
import icon from "../../logo.svg"

interface AboutUsProps {
  changeLocation: (param: string) => void
}

function Branches(prop: AboutUsProps) {
  return (
    <div className={styles.containerBranches}>
      <div className={styles.branches}>
        <img className={styles.img} src={icon} alt='Эмблема клуба' />
        <h1 className={styles.titleBranches}>
          Какой спортивный клуб рядом с вами?
        </h1>
        <ButBranche id={1} changeLocation={prop.changeLocation}>
          г. Ангарск, 17 мк/р, шк. №17
        </ButBranche>
        <ButBranche id={2} changeLocation={prop.changeLocation}>
          п. Мегет, переулок Школьный, шк. №41
        </ButBranche>
        <ButBranche id={3} changeLocation={prop.changeLocation}>
          п. Хомутово, Кудинский спортивный комплекс
        </ButBranche>
        <ButBranche id={4} changeLocation={prop.changeLocation}>
          г. Зима школа № 5.
        </ButBranche>
        <ButBranche id={5} changeLocation={prop.changeLocation}>
          г. Киренск, СК "Путеец"
        </ButBranche>
      </div>
    </div>
  )
}

export default Branches
