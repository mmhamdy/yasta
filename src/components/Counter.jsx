const Counter = ({ tasks }) => {
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task"
  const tasksCount = `${tasks.length} ${tasksNoun} remaining`
  return (
    <div className="task-count">
      <p className="task-count__text">
        &#9201; {tasksCount}
      </p>
    </div>
  )
}

export default Counter;