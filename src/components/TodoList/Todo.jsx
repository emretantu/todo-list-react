import CrossIcon from "../../assets/icons/icon-cross.svg";
import StylishCheckbox from "./StylishCheckbox";
import styles from "./Todo.module.css";

const Todo = ({ id, todoText, isDone, onCheckClick, onDeleteClick }) => {

  return (
    <>
      <li className={styles.todoItem}>
        <div className={styles.todo} onClick={() => onCheckClick(id)}>
          <StylishCheckbox isDone={isDone} />
          <input type="checkbox" name={"checkbox_"+id} id={"checkbox_"+id} checked={isDone} readOnly />
          <label className={`${styles.todoText} ${isDone ? styles.done : ""}`} htmlFor={"checkbox_"+id} onClick={(e) => e.preventDefault()}>{todoText}</label>
        </div>
        <img className={styles.crossIcon} src={CrossIcon} alt="Cross Icon" onClick={() => onDeleteClick(id)} />
      </li>
      <hr className={styles.divider} />
    </>
  )
}

export default Todo;