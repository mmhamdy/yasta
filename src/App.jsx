import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BsAwardFill } from 'react-icons/bs';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { FILTER_MAP, FILTER_NAMES } from './constants';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import FilterButton from './components/FilterButton/FilterButton';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';
import Footer from './components/Footer/Footer';
import styles from'./App.module.css';

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

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      text={name} 
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const onDragEnd = () => {
    // TODO
  }

  const tasksExist = (
    <DragDropContext onDragEnd={onDragEnd}> 
      <Droppable droppableId="column-1">
        {provided => (
          <ul 
            className={styles.todos__list}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasksList}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );

  const noTasksExist = (
    <div className={styles.svg__container}>
      <BsAwardFill />
    </div>
  );

  return (
    <div className={styles.app}>
      <Header />
      <Form addTask={addTask}/>
      <div className={styles.filters}>
        <div className={styles.filters__text}>
          <p>Show:</p>
        </div>
        <div className={styles.filters__btns}>
         {filterList}
        </div>
      </div>
      <Counter tasks={tasks} />
      <div className={styles.todos}>
        {tasks.length >= 1 ? tasksExist : noTasksExist}
      </div>
      <Footer />
    </div>
  );
}

export default App;
