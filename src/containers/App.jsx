import { useState, useEffect, useRef } from 'react';
import { usePrevious } from '../hooks';
import { nanoid } from 'nanoid';
import { FILTER_MAP, FILTER_NAMES } from '../constants';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Counter from '../components/Counter/Counter';
import Todo from '../components/Todo/Todo';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';
import styles from'./App.module.css';
import FilterList from '../components/FilterList/FilterList';

const App = ({taskList}) => {
  const [tasks, setTasks] = useState(taskList);
  const [filter, setFilter] = useState("All");
  const counterRef = useRef(null);

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

  const tasksList = tasks
  .filter(FILTER_MAP[filter])
  .map((task, index) => (
      <Todo 
        task={task.task}
        index={index}
        id={task.id}
        done={task.done}
        toggleTaskDone={toggleTaskDone}
        deleteTask={deleteTask}
        editTask={editTask}
        key={task.id}
      />
    )
  );

  const prevTasksLength = usePrevious(tasksList.length);

  useEffect(() => {
    if (tasksList.length - prevTasksLength === -1) {
      counterRef.current.focus();
    }
  }, [tasksList.length, prevTasksLength])

  return (
    <div className={styles.app}>
      <Header />
      <Form addTask={addTask}/>
      <FilterList 
        filterNames={FILTER_NAMES} 
        filter={filter} 
        setFilter={setFilter} 
      />
      <Counter tasks={tasksList} ref={counterRef}/>
      <TodoList 
        tasks={tasks} 
        filteredTasks={tasksList} 
        setTasks={setTasks} 
      />
      <Footer />
    </div>
  );
}

export default App;
