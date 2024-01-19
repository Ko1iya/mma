import styles from "./mainText.module.css"

interface MainTextProps {
  children: string
  className?: string
  style?: any
}

function MainText(prop: MainTextProps) {
  return (
    <div
      className={`${styles.mainText} ${prop.className ? prop.className : ""}`}
      style={prop.style}
    >
      {prop.children}
    </div>
  )
}

export default MainText
