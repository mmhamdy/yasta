import { useState } from 'react';
import { BsTrash, BsPencil, BsCheck2, BsX } from 'react-icons/bs';

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
    <form className="editing-form" onSubmit={handleSubmit}>
      <div className="todos__editing-container">
        <div className="todos__edit-input">
          <input 
            type="text"
            name="text"
            className="form__input"
            autoComplete='off'
            value={newTask}
            onChange={handleChange}
          />
        </div>
        <div className="todos__edit-btns">
          <button 
            className="todo-item__save-btn" 
            type="submit"
          >
            <BsCheck2 />
          </button>
          <button 
            className="todo-item__cancel-btn"
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
      <div className="todos__input">
        <label className="todos__label" htmlFor={id}>{task}
          <input 
            className="checkbox" 
            type="checkbox" 
            id={id} 
            defaultChecked={done}
            onChange={() => toggleTaskDone(id)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="btn-group todos__control-btns">
        <button 
          className="todo-item__edit-btn" 
          type="button"
          onClick={() => setEditing(true)}
        >
          <BsPencil />
        </button>
        <button 
          className="todo-item__remove-btn" 
          type="button"
          onClick={() => deleteTask(id)}
        >
          <BsTrash />
        </button>
      </div>
    </>
  );

  return (
    <li className="todos__todo-item">
      {isEditing ? editTemplate : viewTemplate}
    </li>
  )
}

export default Todo;