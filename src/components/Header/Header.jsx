import { BsCardChecklist } from 'react-icons/bs';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <BsCardChecklist className={styles.header__icon}/> 
      <blockquote className={styles.header__quote} cite="https://www.goodreads.com/quotes/340402-don-t-put-off-until-tomorrow-what-you-can-do-today">
        <p>Don't put off until tomorrow what you can do today.</p>
      </blockquote> 
    </header>
  )
}

export default Header;