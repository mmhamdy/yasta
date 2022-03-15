import { BsCardChecklist } from 'react-icons/bs';

const Header = () => {
  return (
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
  )
}

export default Header;