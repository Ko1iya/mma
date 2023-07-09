import styles from "./butCalling.module.css"

interface ButCallingProps {
  text: string
}

function ButCalling({ text }: ButCallingProps) {
  return <button className={styles.butCalling}>{text}</button>
}

export default ButCalling
