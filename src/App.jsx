import Header from './components/Header';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Form />
      <div className="filters">
        <div className="filters__text">
          <p>Show:</p>
        </div>
        <div className="btn-group filters__btns">
          <FilterButton text="All" />
          <FilterButton text="Active" />
          <FilterButton text="Done" />
        </div>
      </div>
      <Counter />
      <div className="todos">
        <ul className="todos__todo-list">
          <Todo task="First task" />
          <Todo task="Second task" />
          <Todo task="Third task" />
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
