import styles from "./Filter.module.css";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <a className={filter==="All" ? styles.active : ""} onClick={() => onFilterChange("All")}>All</a>
      <a className={filter==="Active" ? styles.active : "" } onClick={() => onFilterChange("Active")}>Active</a>
      <a className={filter==="Completed" ? styles.active : ""} onClick={() => onFilterChange("Completed")}>Completed</a>
    </div>
  )
}

export default Filter