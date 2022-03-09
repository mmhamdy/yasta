import { BsCardChecklist, BsCheck2, BsX, BsTrash, BsPencil, BsPlus } from 'react-icons/bs';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div><BsCardChecklist className="header__icon"/></div>
        <blockquote cite="https://www.goodreads.com/quotes/340402-don-t-put-off-until-tomorrow-what-you-can-do-today">
          <p>Don't put off until tomorrow what you can do today.</p>
        </blockquote>
      </div>
      <div className="form">
        <form>
          <input 
            type="text"
            name="text"
            placeholder="So, what needs to be done?"
          />
          <div>
            <button type="submit"><BsPlus className="form__icon"/></button>
          </div>
        </form>
      </div>
      <div className="filters">
        <p>Show:</p>
        <div className="filter-btns">
          <button type="button">all</button>
          <button type="button">active</button>
          <button type="button">done</button>
        </div>
      </div>
      <div className="task-count">
        <h3>3 tasks remaining</h3>
      </div>
      <div className="todos">
        <ul className="todo-list">
          <li className="todo">
            <div>
              <input type="checkbox" id="todo-0" defaultChecked={true}/>
              <label htmlFor="todo-0">Check your Todos</label>
            </div>
            <div>
              <button type="button"><BsPencil /></button>
              <button type="button"><BsTrash /></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
