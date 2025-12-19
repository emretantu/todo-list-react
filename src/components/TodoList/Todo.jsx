import { useState } from "react";
import CrossIcon from "../../assets/icons/icon-cross.svg";
import StylishCheckbox from "./StylishCheckbox";
import styles from "./Todo.module.css";

const Todo = ({ id, todoText, isDone, onCheckClick, onDeleteClick, forceCollapsed, ...props }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
  }

  const handleContextMenu = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(todoText);
    alert("Copied to the clipboard")
  }

  return (
    <li
      className={styles.todoItem}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div 
        className={styles.todo}
        onClick={() => onCheckClick(id)}
        onContextMenu={handleContextMenu}
      >

        <StylishCheckbox
          isDone={isDone}
          isHovered={isHovered}
        />
        <input
          type="checkbox"
          name={"checkbox_"+id}
          id={"checkbox_"+id}
          checked={isDone}
          readOnly
        />
        <label
          className={`${styles.todoText} ${isDone ? styles.done : ""} ${!forceCollapsed && isHovered ? styles.hovered : ""}`}
          htmlFor={"checkbox_"+id}
          onClick={handleClick}
          title={todoText}
        >
          {todoText}
        </label>

      </div>

      <img className={styles.crossIcon} src={CrossIcon} alt="Cross Icon" onClick={() => onDeleteClick(id)} />

    </li>
  )
}

export default Todo;