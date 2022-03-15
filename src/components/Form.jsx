import { BsPlus } from 'react-icons/bs';

const Form = () => {
  return (
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
  )
}

export default Form;