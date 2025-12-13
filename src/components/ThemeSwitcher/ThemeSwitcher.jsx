import styles from "./ThemeSwitcher.module.css"
import moonIcon from "../../assets/icons/icon-moon.svg";
import sunIcon from "../../assets/icons/icon-sun.svg";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <button
      className={styles.themeSwitcher}
      onClick={() => toggleTheme()}
    >
      <img src={theme === "light" ? moonIcon : sunIcon} />
    </button>
  )
}

export default ThemeSwitcher