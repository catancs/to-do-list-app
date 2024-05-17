import React from 'react';
import './style.css';
import ToDoList from './To-Do-List';
import ToDoAdd from './To-Do-Add';


const ToDoFrame = ({tasks,  addTask, taskRemove, edit }) => { 
  return (
    <div className="to-do-frame">
      <ToDoAdd addTask={addTask} />
      <ToDoList tasks={tasks} taskRemove={taskRemove} edit={edit}
       />
    </div>
    
  );
};

export default ToDoFrame;
