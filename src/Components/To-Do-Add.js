import React, { useState } from 'react';
import './To-Do-Frame';
import './style.css';
import ToDoList from './To-Do-List';

function ToDoAdd  ({ addTask })  { 
  const [task, setTask] = useState(''); //state var task


  function addNewTask() { //function to add task
    const trimmedTask = task.trim();
    if (trimmedTask.length > 0) {
      addTask(trimmedTask);
      setTask('');
    }
  }

  function newInput (event) { 
    const inputValue = event.target.value;
    setTask(inputValue);  };


  return (
    <div className="to-do-add">
      <input
        type="text"
        value={task}
        onChange={newInput}
        className="to-do-input-field"
        placeholder="Type your task here..."
      />
      <button onClick={addNewTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default ToDoAdd;
