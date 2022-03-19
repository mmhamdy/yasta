import { BsTrash, BsPencil } from 'react-icons/bs';

const Todo = ({ task, id, done = false, toggleTaskDone, deleteTask }) => {
  return (
    <li className="todos__todo-item">
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
    </li>
  )
}

export default Todo;