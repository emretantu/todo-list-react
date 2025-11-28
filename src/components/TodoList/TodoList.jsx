import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {

  const [todos, setTodos] = useState([
    {todoText: "Lorem ipsum", isDone: false},
    {todoText: "Lorem ipsum sit amet", isDone: true},
    {todoText: "Jog around the park 3x", isDone: false}
  ])

  const handleCheckClick = (id) => {
    setTodos(prevTodos =>
      prevTodos.map((todo, index) =>
        index === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDeleteClick = (id) => {
    setTodos(prevTodos => {
      prevTodos.splice(id, 1);
      return [...prevTodos];
    })
  }

  return (
    <article>
      <section className="newTodo">
        
      </section>
      <section className="todoList">
        <ul>
          {
            todos.map(
              (todo, index) => <Todo 
                key={index}
                id={index}
                todoText={todo.todoText}
                isDone={todo.isDone}
                onCheckClick={handleCheckClick}
                onDeleteClick={handleDeleteClick}
              />
            )
          }
        </ul>
      </section>
    </article>
  )
};

export default TodoList;