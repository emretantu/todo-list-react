import { useRef, useState } from "react";
import styles from "./NewTodo.module.css";
import StylishCheckbox from "./StylishCheckbox";

const NewTodo = ({ onAddTodo }) => {

  const refInput = useRef();

  const [todoText, setTodoText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      onAddTodo(todoText);
      setTodoText("");
    }
  }

  const handleClick = () => {
    refInput.current.focus();
  }

  return (
    <section className={styles.newTodo} onClick={handleClick}>
      <label htmlFor="newTodoInput">
        <StylishCheckbox isDone={false} isHovered={isFocused} />
      </label>
      <input
        type="text"
        name="newTodoInput"
        id="newTodoInput"
        className={styles.newTodoInput}
        placeholder="Create a new todo..."
        value={todoText}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        ref={refInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus
      />
    </section>
  )

}

export default NewTodo