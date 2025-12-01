import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <a href="/">
      <img className={styles.logo} src="src/assets/images/logo-mobile.png" alt="Mobile Logo" />
    </a>
  )
}

export default Logo