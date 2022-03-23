import { useState } from 'react';
import { BsTrash, BsPencil, BsCheck2, BsX } from 'react-icons/bs';
import styles from './Todo.module.css';

const Todo = ({ task, id, done = false, toggleTaskDone, deleteTask, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, newTask);
    setNewTask("");
    setEditing(false);
  }

  const editTemplate = (
    <form className={styles.editingForm} onSubmit={handleSubmit}>
      <div className={styles.todos__editingContainer}>
        <div className={styles.todos__editInput}>
          <input 
            type="text"
            name="text"
            className={styles.form__input}
            autoComplete='off'
            value={newTask}
            onChange={handleChange}
          />
        </div>
        <div className={styles.todos__editBtns}>
          <button 
            className={styles.todo__saveBtn}
            type="submit"
          >
            <BsCheck2 />
          </button>
          <button 
            className={styles.todo__cancelBtn}
            type="button"
            onClick={() => setEditing(false)}
          >
            <BsX />
          </button>
        </div>
      </div>
    </form>
  );
  
  const viewTemplate = (
    <>
      <div className={styles.todos__input}>
        <label className={styles.todos__label} htmlFor={id}>{task}
          <input 
            className={styles.checkbox} 
            type="checkbox" 
            id={id} 
            defaultChecked={done}
            onChange={() => toggleTaskDone(id)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.todos__controlBtns}>
        <button 
          className={styles.todo__editBtn} 
          type="button"
          onClick={() => setEditing(true)}
        >
          <BsPencil />
        </button>
        <button 
          className={styles.todo__removeBtn} 
          type="button"
          onClick={() => deleteTask(id)}
        >
          <BsTrash />
        </button>
      </div>
    </>
  );

  return (
    <li className={styles.todos__todo}>
      {isEditing ? editTemplate : viewTemplate}
    </li>
  )
}

export default Todo;