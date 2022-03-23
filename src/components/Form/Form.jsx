import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import styles from './Form.module.css';

const Form = ({ addTask}) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  }
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form__container}>
          <div className={styles.form__inputContainer}>
            <input 
              type="text"
              name="text"
              className={styles.form__input}
              autoComplete='off'
              placeholder="So, what needs to be done?"
              value={task}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__btnContainer}>
            <button className={styles.form__submitBtn} type="submit">
              <BsPlus className={styles.form__addIcon}/>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;