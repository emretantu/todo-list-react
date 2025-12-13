import {createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context.value === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}