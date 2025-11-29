import styles from "./ListFooter.module.css";

const ListFooter = ({ onClearCompleted, todos, children }) => {

  const leftItemsCount = todos.reduce((acc, curr) => curr.isDone === false ? ++acc : acc, 0);

  return (
    <div className={styles.listFooter}>
      <p>
        {leftItemsCount} Items Left
      </p>
      {children}
      <a className={styles.clearButton} onClick={onClearCompleted}>
        Clear Completed
      </a>
    </div>
  )
}

export default ListFooter