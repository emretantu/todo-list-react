import { useState } from "react";
import CrossIcon from "../../assets/icons/icon-cross.svg";
import StylishCheckbox from "./StylishCheckbox";
import styles from "./Todo.module.css";

const Todo = ({ id, todoText, isDone, onCheckClick, onDeleteClick }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className={styles.todoItem}>

      <div 
        className={styles.todo}
        onClick={() => onCheckClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <StylishCheckbox
          isDone={isDone}
          isHovered={isHovered}
        />
        <input type="checkbox" name={"checkbox_"+id} id={"checkbox_"+id} checked={isDone} readOnly />
        <label className={`${styles.todoText} ${isDone ? styles.done : ""}`} htmlFor={"checkbox_"+id} onClick={(e) => e.preventDefault()}>{todoText}</label>

      </div>

      <img className={styles.crossIcon} src={CrossIcon} alt="Cross Icon" onClick={() => onDeleteClick(id)} />

    </li>
  )
}

export default Todo;