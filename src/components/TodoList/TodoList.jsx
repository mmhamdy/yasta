import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { BsAwardFill } from 'react-icons/bs';
import styles from './TodoList.module.css';

const TodoList = ({ tasks, filteredTasks, setTasks }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedTasks = Array.from(tasks);
    const [draggableId] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, draggableId);
    setTasks(reorderedTasks);
  }

  const tasksExist = (
    <DragDropContext onDragEnd={handleOnDragEnd}> 
      <Droppable droppableId="column-1">
        {provided => (
          <ul 
            className={styles.todos__list}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredTasks}
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
    <div className={styles.todos}>
      {filteredTasks.length >= 1 ? tasksExist : noTasksExist}
    </div>
  )
}

export default TodoList;