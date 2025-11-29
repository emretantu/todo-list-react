import { useState } from "react";
import styles from "./TodoList.module.css"
import List from "./List";
import NewTodo from "./NewTodo";

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

  return (
    <article className={styles.todoList}>
      <section className={styles.newTodoContainer}>
        <NewTodo onAddTodo={handleAddTodo} />
      </section>
      <section className={styles.todoListContainer}>
        <List todos={todos} onCheckClick={handleCheckClick} onDeleteClick={handleDeleteClick} />
      </section>
    </article>
  )
};

export default TodoList;