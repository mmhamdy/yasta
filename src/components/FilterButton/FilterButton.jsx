import styles from './FilterButton.module.css'

const FilterButton = ({ text, isPressed, setFilter }) => {
  return (
    <button 
      type="button"
      className={styles.filterBtn}
      aria-pressed={isPressed}
      onClick={() => setFilter(text)}
    >
      {text}
    </button>
  )
}

export default FilterButton;