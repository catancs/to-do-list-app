import React from 'react';
import './style.css';
import ToDoList from './To-Do-List';
import ToDoAdd from './To-Do-Add';

const ToDoFrame = ({ tasks, addTask, taskRemove, edit, toggleTaskCompletion, setTaskFilter }) => {
  return (
    <div className="to-do-frame">
      <ToDoAdd addTask={addTask} />
      <div className="filter-buttons">
        <button onClick={() => setTaskFilter('all')}>All</button>
        <button onClick={() => setTaskFilter('completed')}>Completed</button>
        <button onClick={() => setTaskFilter('incomplete')}>Incomplete</button>
      </div>
      <ToDoList tasks={tasks} taskRemove={taskRemove} edit={edit} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default ToDoFrame;
