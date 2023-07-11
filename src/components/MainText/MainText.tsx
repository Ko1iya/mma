import styles from "./mainText.module.css"

interface MainTextProps {
  children: string
  className?: string
}

function MainText(prop: MainTextProps) {
  return (
    <div className={`${styles.mainText} ${prop.className}`}>
      {prop.children}
    </div>
  )
}

export default MainText
