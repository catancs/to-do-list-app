//import logo from './logo.svg';
import ToDoFrame from './Components/To-Do-Frame';
import React, { useState } from 'react';
import './App.css';
import ToDoTitle from './Components/To-Do-Title';

function App() {
  const [tasks, setTasks] = useState([]); //contains tasks

  function addTask(task) {
    const newTask = {
      id: Date.now(),      
      text: task,          
      completed: false    
    };

    const newTasks = [...tasks, newTask]; //add new task to tasks in a new array
    setTasks(newTasks); //update state
  };

  return (
    <div className="App">
      <ToDoTitle />
      <main className="p-4">
        <ToDoFrame tasks={tasks} addTask={addTask} /> 
          
      </main>
    </div>
  );
}

export default App;

