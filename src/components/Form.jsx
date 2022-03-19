import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

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
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__container">
          <div className="form__input-container">
            <input 
              type="text"
              name="text"
              className="form__input"
              autoComplete='off'
              placeholder="So, what needs to be done?"
              value={task}
              onChange={handleChange}
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
  )
}

export default Form;