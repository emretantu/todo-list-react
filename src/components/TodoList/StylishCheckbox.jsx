import styles from "./StylishCheckbox.module.css";
import CheckIcon from "../../assets/icons/icon-check.svg";

const StylishCheckbox = ({ isDone, isHovered }) => {
  return (
    <div className={`${styles.customCheckbox} ${isDone ? styles.done : ""} ${isHovered ? styles.hovered : ""}`}>
      {isDone && <img className={styles.checkIcon} src={CheckIcon} alt="Check Icon" />}
    </div>
  )
}

export default StylishCheckbox