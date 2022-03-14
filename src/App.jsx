import { BsCardChecklist, BsCheck2, BsX, BsTrash, BsPencil, BsPlus } from 'react-icons/bs';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="header__icon-container">
          <BsCardChecklist className="header__icon"/>
        </div>
        <div className="header__quote-container">
          <blockquote className="header__quote" cite="https://www.goodreads.com/quotes/340402-don-t-put-off-until-tomorrow-what-you-can-do-today">
            <p>Don't put off until tomorrow what you can do today.</p>
          </blockquote>
        </div>
      </div>
      <div className="form">
        <form>
          <div className="form__container">
            <div className="form__input-container">
              <input 
                type="text"
                name="text"
                className="form__input"
                placeholder="So, what needs to be done?"
              />
            </div>
            <div className="form__btn-container">
              <button className="form__submit-btn" type="submit">
                <BsPlus className="form__add-icon"/>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="filters">
        <div className="filters__text">
          <p>Show:</p>
        </div>
        <div className="btn-group filters__btns">
          <button type="button">all</button>
          <button type="button">active</button>
          <button type="button">done</button>
        </div>
      </div>
      <div className="task-count">
        <p className="task-count__text">&#9201; 3 tasks remaining</p>
      </div>
      <div className="todos">
        <ul className="todos__todo-list">
          <li className="todos__todo-item">
            <div className="todos__input">
              <label className="todos__label" htmlFor="todo-0">First task
                <input className="checkbox" type="checkbox" id="todo-0" defaultChecked={false}/>
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="btn-group todos__control-btns">
              <button className="todo-item__edit-btn" type="button"><BsPencil /></button>
              <button className="todo-item__remove-btn" type="button"><BsTrash /></button>
            </div>
          </li>
          <li className="todos__todo-item">
            <div className="todos__input">
              <label className="todos__label" htmlFor="todo-1">Second task
                <input className="checkbox" type="checkbox" id="todo-1" defaultChecked={false}/>
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="btn-group todos__control-btns">
              <button className="todo-item__edit-btn" type="button"><BsPencil /></button>
              <button className="todo-item__remove-btn" type="button"><BsTrash /></button>
            </div>
          </li>
          <li className="todos__todo-item">
            <div className="todos__input">
              <label className="todos__label" htmlFor="todo-2">Third task
                <input className="checkbox" type="checkbox" id="todo-2" defaultChecked={false}/>
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="btn-group todos__control-btns">
              <button className="todo-item__edit-btn" type="button"><BsPencil /></button>
              <button className="todo-item__remove-btn" type="button"><BsTrash /></button>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p className="footer__text">Made with React</p>
      </div>
    </div>
  );
}

export default App;
