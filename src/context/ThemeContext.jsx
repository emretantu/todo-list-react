import {createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useLocalStorage("theme", () => {
    const isDarkPreferred = window.matchMedia("(prefers-color-scheme : dark)").matches;
    return isDarkPreferred ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const timeoutRef = useRef(null);

  const toggleTheme = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    document.body.classList.add("in-transition");
    const cleanup = () => {
      document.body.classList.remove("in-transition");
    }
    document.body.addEventListener("transitionend", cleanup, {once: true})
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    timeoutRef.current = setTimeout(cleanup, 250);
  }, [setTheme]);

  const value = useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}