import { useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Footer from './components/Footer';
import './App.css';

const App = ({taskList}) => {
  const [tasks, setTasks] = useState(taskList);

  const addTask = (task) => {
    const newTask = { id: "todo-" + nanoid(), task: task, done: false};
    setTasks([...tasks, newTask]);
  }

  const tasksList = tasks.map(task => (
    <Todo 
      task={task.task}
      id={task.id}
      done={task.done}
      key={task.id}
    />
    )
  );

  return (
    <div className="app">
      <Header />
      <Form addTask={addTask}/>
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
      <Counter tasks={tasks} />
      <div className="todos">
        <ul className="todos__todo-list">
          {tasksList}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
