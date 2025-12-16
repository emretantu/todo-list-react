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
      </div>
    </ThemeProvider>
  )
}

export default App