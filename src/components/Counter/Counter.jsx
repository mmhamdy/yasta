import styles from './Counter.module.css';

import { BsStopwatch } from 'react-icons/bs';

const Counter = ({ tasks }) => {
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task"
  const tasksCount = `${tasks.length} ${tasksNoun} remaining`
  return (
    <div className={styles.count}>
      <p className={styles.count__text}>
        <BsStopwatch /> {tasksCount}
      </p>
    </div>
  )
}

export default Counter;