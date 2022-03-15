import { BsTrash, BsPencil } from 'react-icons/bs';

const Todo = ({ task }) => {
  return (
    <li className="todos__todo-item">
      <div className="todos__input">
        <label className="todos__label" htmlFor="todo-0">{task}
          <input className="checkbox" type="checkbox" id="todo-0" defaultChecked={false}/>
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="btn-group todos__control-btns">
        <button className="todo-item__edit-btn" type="button"><BsPencil /></button>
        <button className="todo-item__remove-btn" type="button"><BsTrash /></button>
      </div>
    </li>
  )
}

export default Todo;