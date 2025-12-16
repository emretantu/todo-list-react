import Todo from "./Todo";
import styles from "./List.module.css";
import ListFooter from "./ListFooter";
import { useIsMobile } from "../../hooks/useIsMobile";
import Filter from "./Filter";

const List = ({ todos, onCheckClick, onDeleteClick, onClearCompleted, leftItemsCount, filter, onFilterChange }) => {
  const isMobile = useIsMobile();

  if (isMobile) {

    return (
      <>
        <section className={styles.listContainer}>
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
          <ListFooter onClearCompleted={onClearCompleted} leftItemsCount={leftItemsCount} />
        </section>
        <Filter filter={filter} onFilterChange={onFilterChange} />
      </>
    )

  }

  return (
    <section className={styles.listContainer}>
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
      <ListFooter onClearCompleted={onClearCompleted} leftItemsCount={leftItemsCount}>
        <Filter filter={filter} onFilterChange={onFilterChange} />
      </ListFooter>
      </section>
  )
}

export default List;