import styles from "./ListFooter.module.css";

const ListFooter = ({ onClearCompleted, leftItemsCount, children }) => {

  return (
    <div className={styles.listFooter}>
      <p>
        {leftItemsCount > 0 ? leftItemsCount + " Items Left" : "You're All Done"}
      </p>
      {children}
      <a className={styles.clearButton} onClick={onClearCompleted}>
        Clear Completed
      </a>
    </div>
  )
}

export default ListFooter