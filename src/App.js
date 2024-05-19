//import logo from './logo.svg';
import ToDoFrame from './Components/To-Do-Frame';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import './App.css';
//import ToDoTitle from './Components/To-Do-Title';
import React, { useState } from 'react';
import './App.css';
import ToDoTitle from './Components/To-Do-Title';
import LoginPage from './Components/LoginPage';
import ToDoAdd from './Components/To-Do-Add';
import ToDoList from './Components/To-Do-List';
import SignupPage from './Components/SignupPage';


function App() {
  const [tasks, setTasks] = useState([]); //contains tasks


  function addTask(task, category, dueDate) {
    const newTask = {
      id: Date.now(),
      text: task,
      category: category,
      dueDate: dueDate,
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
    const updatedTasks = tasks.map(task => { //make array of tasks with completed status for the task with the specified id

      if (task.id === id) { // if the task id matches the id of the task to be edited
        const updatedTask = { ...task, text: newText }; //create a new task with completed status opposite to the current status
        return updatedTask;
      } else {
        return task; //otherwise return the task as is
      }
    });

    setTasks(updatedTasks);
  }


  function toggleTaskCompletion(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          completed: !task.completed
        };
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
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={
          <div className="App">
            <ToDoTitle />
            <main className="p-4">
              <ToDoFrame tasks={tasks} addTask={addTask} taskRemove={taskRemove} edit={edit} toggleTaskCompletion={toggleTaskCompletion} />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
