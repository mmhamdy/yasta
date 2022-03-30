import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const taskList = [
  {id: "todo-0", task: "First task", done: false},
  {id: "todo-1", task: "Second task", done: false},
  {id: "todo-2", task: "Third task", done: false}
]

ReactDOM.render(
  <React.StrictMode>
    <App taskList={taskList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

