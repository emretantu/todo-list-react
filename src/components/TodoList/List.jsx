import Todo from "./Todo";
import styles from "./List.module.css";

const List = ({ todos, onCheckClick, onDeleteClick }) => {
  return (
    <ul className={styles.list}>
      {
        todos.map(
          (todo, index) => <Todo 
            key={index}
            id={index}
            todoText={todo.todoText}
            isDone={todo.isDone}
            onCheckClick={onCheckClick}
            onDeleteClick={onDeleteClick}
          />
        )
      }
    </ul>
  )
}

export default List;