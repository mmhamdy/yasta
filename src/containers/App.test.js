import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App taskList={[ {id: "todo-0", task: "First task", done: false} ]}/>, div);
});