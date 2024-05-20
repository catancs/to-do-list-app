import React, { useState } from 'react';
import './To-Do-Frame';
import './style.css';
import ToDoList from './To-Do-List';

function ToDoAdd({ addTask }) {
  const [task, setTask] = useState(''); // state var task
  const [category, setCategory] = useState(''); // state var category
  const [dueDate, setDueDate] = useState(''); // state var due date
  const [priority, setPriority] = useState('Medium'); // state var priority, default is Medium

  function addNewTask() { // function to add task
    const trimmedTask = task.trim();
    if (trimmedTask.length > 0) {
      addTask(trimmedTask, category, dueDate, priority);
      setTask('');
      setCategory('');
      setDueDate('');
      setPriority('Medium');
    }
  }

  function newInput(event) {
    const inputValue = event.target.value;
    setTask(inputValue);
  }

  function newCategoryInput(event) {
    const inputValue = event.target.value;
    setCategory(inputValue);
  }

  function newDueDateInput(event) {
    const inputValue = event.target.value;
    setDueDate(inputValue);
  }

  function newPriorityInput(event) {
    const inputValue = event.target.value;
    setPriority(inputValue);
  }

  return (
    <div className="to-do-add">
      <input
        type="text" value={task} onChange={newInput} className="to-do-input-field" placeholder="Type your task here..." />
      <input type="text" value={category} onChange={newCategoryInput} className="to-do-input-field" placeholder="Category" />
      <input type="date" value={dueDate} onChange={newDueDateInput} className="to-do-input-field" />
      <select value={priority} onChange={newPriorityInput} className="to-do-input-field">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={addNewTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
}

export default ToDoAdd;
