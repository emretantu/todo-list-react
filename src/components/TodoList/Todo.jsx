import CheckIcon from "../../assets/icons/icon-check.svg";
import CrossIcon from "../../assets/icons/icon-cross.svg";
import styles from "./Todo.module.css";

const Todo = ({ id, todoText, isDone, onCheckClick, onDeleteClick }) => {

  return (
    <li className={styles.todoItem}>
      <div className={styles.todo} onClick={() => onCheckClick(id)}>
        <div className={`${styles.customCheckbox} ${isDone && styles.done}`}>
          {isDone && <img className={styles.checkIcon} src={CheckIcon} alt="Check Icon" />}
        </div>
        <input type="checkbox" name={"checkbox_"+id} id={"checkbox_"+id} checked={isDone} readOnly />
        <label className={`${styles.todoText} ${isDone ? styles.done : ""}`} htmlFor={"checkbox_"+id} onClick={(e) => e.preventDefault()}>{todoText}</label>
      </div>
      <img className={styles.crossIcon} src={CrossIcon} alt="Cross Icon" onClick={() => onDeleteClick(id)} />
    </li>
  )
}

export default Todo;