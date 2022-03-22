import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BsAwardFill } from 'react-icons/bs';
import { FILTER_MAP, FILTER_NAMES } from './constants';
import Header from './components/Header';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Footer from './components/Footer';
import './App.css';

const App = ({taskList}) => {
  const [tasks, setTasks] = useState(taskList);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    if (task.length < 1) {
      alert("No task given")
      return
    }
    const newTask = { id: "todo-" + nanoid(), task: task, done: false};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const editTask = (id, newTask) => {
    const editedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, task: newTask}
      }
      return task;
    });
    setTasks(editedTasks);
  }

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, done: !task.done};
      }
      return task;
    })
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  const tasksList = tasks.map(task => (
    <Todo 
      task={task.task}
      id={task.id}
      done={task.done}
      toggleTaskDone={toggleTaskDone}
      deleteTask={deleteTask}
      editTask={editTask}
      key={task.id}
    />
    )
  );

  const tasksExist = (
    <ul className="todos__todo-list">
      {tasksList}
    </ul>
  );

  const noTasksExist = (
    <div className="svg-container">
      <BsAwardFill />
    </div>
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
        {tasks.length >= 1 ? tasksExist : noTasksExist}
      </div>
      <Footer />
    </div>
  );
}

export default App;
