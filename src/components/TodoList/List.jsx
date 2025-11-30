import Todo from "./Todo";
import styles from "./List.module.css";
import ListFooter from "./ListFooter";

const List = ({ todos, onCheckClick, onDeleteClick, onClearCompleted }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {
          todos.map(
            (todo) =>
            <Todo 
              key={todo.id}
              id={todo.id}
              todoText={todo.todoText}
              isDone={todo.isDone}
              onCheckClick={onCheckClick}
              onDeleteClick={onDeleteClick}
            />
          )
        }
      </ul>
      <ListFooter onClearCompleted={onClearCompleted} todos={todos} />
    </div>
  )
}

export default List;