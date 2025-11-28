import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {

  const [todos, setTodos] = useState([
    {todoText: "Lorem ipsum", isDone: false},
    {todoText: "Lorem ipsum sit amet", isDone: true},
    {todoText: "Jog around the park 3x", isDone: false}
  ])

  const handleClick = (index) => {
    setTodos(prevTodos =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
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
                onClick={handleClick}
              />
            )
          }
        </ul>
      </section>
    </article>
  )
};

export default TodoList;