//import logo from './logo.svg';
import ToDoFrame from './Components/To-Do-Frame';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import './App.css';
//import ToDoTitle from './Components/To-Do-Title';
import React, { useState } from 'react';
import './App.css';
import ToDoTitle from './Components/To-Do-Title';
import LoginPage from './Components/LoginPage';


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

  function taskRemove(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  function edit(id, newText) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, text: newText };
        return updatedTask;
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={
          <div className="App">
            <ToDoTitle />
            <main className="p-4">
              <ToDoFrame tasks={tasks} addTask={addTask} taskRemove={taskRemove} edit={edit} />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
