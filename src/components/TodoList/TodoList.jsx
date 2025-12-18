import { useState } from "react";
import styles from "./TodoList.module.css";

import { v4 as uuidv4 } from 'uuid';

import List from "./List";
import NewTodo from "./NewTodo";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { arrayMove } from "@dnd-kit/sortable";

const TodoList = () => {

  const [todos, setTodos] = useLocalStorage("todos_react", []);

  const [filter, setFilter] = useState("All");

  const handleAddTodo = (todoText) => {
    const trimmedText = todoText.replace(/\s+/g, ' ').trim();
    if (trimmedText) {
      setTodos(prevTodos => [...prevTodos, {id: uuidv4(), todoText: trimmedText, isDone: false}])
    }
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

  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  const filteredTodos = () => {
    switch (filter) {
      case "All": return todos;
      case "Active": return todos.filter(todo => todo.isDone === false);
      case "Completed": return todos.filter(todo => todo.isDone === true);
    }
  }

  const handleReorder = ({ active, over }) => {
    const activeIndex = todos.findIndex(todo => todo.id === active.id);
    const overIndex = todos.findIndex(todo => todo.id === over.id);
    if (active.id !== over.id) {
      setTodos(arrayMove(todos, activeIndex, overIndex));
    }
  }

  return (
    <article className={styles.todoList}>
        <NewTodo onAddTodo={handleAddTodo} />
        <List
          todos={filteredTodos()}
          onCheckClick={handleCheckClick}
          onDeleteClick={handleDeleteClick}
          onClearCompleted={handleClearCompleted}
          leftItemsCount={todos.reduce((acc, curr) => curr.isDone === false ? ++acc : acc, 0)}
          filter={filter}
          onFilterChange={handleFilterChange}
          onReorder={handleReorder}
        />
    </article>
  )
};

export default TodoList;