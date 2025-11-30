import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  )
}

export default Header