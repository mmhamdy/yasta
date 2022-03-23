const FilterButton = ({ text, isPressed, setFilter }) => {
  return (
    <button 
      type="button"
      className="filter-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(text)}
    >
      {text}
    </button>
  )
}

export default FilterButton;