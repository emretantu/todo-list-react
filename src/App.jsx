import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <TodoList />
        <p
          style={{
            textAlign: "center",
            color: "hsl(var(--footer-text-color))",
            padding: "2rem 0"
          }}
        >
          Drag and drop to reorder list
        </p>
      </div>
    </ThemeProvider>
  )
}

export default App