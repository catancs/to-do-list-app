import React from 'react';
import './style.css';
import ToDoList from './To-Do-List';
import ToDoAdd from './To-Do-Add';


const ToDoFrame = ({tasks,  addTask }) => { 
  return (
    <div className="to-do-frame">
      <ToDoAdd addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default ToDoFrame;
