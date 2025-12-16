import styles from "./Logo.module.css"
import logo from "../../assets/images/logo-desktop.png";

const Logo = () => {
  return (
    <a href="/">
      <img className={styles.logo} src={logo} alt="Mobile Logo" />
    </a>
  )
}

export default Logo