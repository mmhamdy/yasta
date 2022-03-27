import FilterButton from '../FilterButton/FilterButton';
import styles from './FilterList.module.css';

const FilterList = ({ filterNames, filter, setFilter }) => { 
  const filterList = filterNames.map(name => (
    <FilterButton 
      text={name} 
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className={styles.filters}>
      <div className={styles.filters__text}>
        <p>Show:</p>
      </div>
      <div className={styles.filters__btns}>
        {filterList}
      </div>
    </div>
  )
}

export default FilterList;