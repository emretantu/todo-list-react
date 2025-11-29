import { useState } from "react";
import styles from "./TodoList.module.css"
import List from "./List";
import NewTodo from "./NewTodo";
import ListFooter from "./ListFooter";

const TodoList = () => {

  const [todos, setTodos] = useState([
    {todoText: "Lorem ipsum", isDone: false},
    {todoText: "Lorem ipsum sit amet", isDone: true},
    {todoText: "Jog around the park 3x", isDone: false}
  ])

  const handleAddTodo = (todoText) => {
    setTodos(prevTodos => [...prevTodos, {todoText: todoText, isDone: false}])
    console.log(todos);
  }

  const handleCheckClick = (id) => {
    setTodos(prevTodos =>
      prevTodos.map((todo, index) =>
        index === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDeleteClick = (id) => {
    setTodos(prevTodos => prevTodos.filter((_, index) => index !== id));
  }

  const handleClearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.isDone === false))
  }

  return (
    <article className={styles.todoList}>
      <section className={styles.newTodoContainer}>
        <NewTodo onAddTodo={handleAddTodo} />
      </section>
      <section className={styles.listContainer}>
        <List todos={todos} onCheckClick={handleCheckClick} onDeleteClick={handleDeleteClick} />
        <ListFooter onClearCompleted={handleClearCompleted} todos={todos} />
      </section>
    </article>
  )
};

export default TodoList;