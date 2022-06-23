import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  //store task data in state
  const [tasks, setUpdatedTasks] = useState(TASKS);

  //update task completion
  const onClick = (updatedTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });

    setUpdatedTasks(newTasks);
  };

  //to delete task, don't need to use useState again?
  const onRemove = (id) => {
    //can we use same vaiables for newTasks? and in setUpdated tasks?
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setUpdatedTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {<TaskList tasks={tasks} onClick={onClick} onRemove={onRemove} />}
        </div>
      </main>
    </div>
  );
};

export default App;
