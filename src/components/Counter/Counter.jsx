import { forwardRef } from 'react';
import { BsStopwatch } from 'react-icons/bs';
import styles from './Counter.module.css';

const Counter = forwardRef(({ tasks }, ref) => {
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task"
  const tasksCount = `${tasks.length} ${tasksNoun} remaining`

  return (
    <div className={styles.count}>
      <p className={styles.count__text} tabIndex="-1" ref={ref}>
        <BsStopwatch /> {tasksCount}
      </p>
    </div>
  )
})

export default Counter;