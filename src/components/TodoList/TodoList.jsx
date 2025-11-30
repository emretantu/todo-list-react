import { useState } from "react";
import styles from "./TodoList.module.css";
import List from "./List";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {

  const [todos, setTodos] = useState([
    {id: uuidv4(), todoText: "Lorem ipsum", isDone: false},
    {id: uuidv4(), todoText: "Lorem ipsum sit amet", isDone: true},
    {id: uuidv4(), todoText: "Jog around the park 3x", isDone: false}
  ])

  // const [filter, setFilter] = useState("All");

  const handleAddTodo = (todoText) => {
    setTodos(prevTodos => [...prevTodos, {id: uuidv4(), todoText: todoText, isDone: false}])
  }

  const handleCheckClick = (id) => {
    setTodos(prevTodos =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDeleteClick = (id) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
  }

  const handleClearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.isDone === false))
  }

  // const handleFilterChange = (filter) => {
  //   setFilter(filter);
  // }

  return (
    <article className={styles.todoList}>
      <section className={styles.newTodoContainer}>
        <NewTodo onAddTodo={handleAddTodo} />
      </section>
      <section className={styles.listContainer}>
        <List
          todos={todos}
          onCheckClick={handleCheckClick}
          onDeleteClick={handleDeleteClick}
          onClearCompleted={handleClearCompleted}
        />
      </section>
    </article>
  )
};

export default TodoList;