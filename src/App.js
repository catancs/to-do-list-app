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
import ProgressTracker from './Components/ProgressTracker';

function App() {
  const [tasks, setTasks] = useState([]); // Contains tasks
  const [filter, setFilter] = useState('all');

  // function to add a new task
  function addTask(task, category, dueDate, priority) {
    const newTask = {
      id: Date.now(),
      text: task,
      category: category,
      dueDate: dueDate,
      completed: false,
      priority: priority
    };

    const newTasks = [...tasks, newTask]; //add new task to tasks in a new array
    setTasks(newTasks); //update state
  }

  //function to remove a task
  function taskRemove(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  //function to edit a task
  function edit(id, newText) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) { //if the task id matches the id of the task to be edited
        const updatedTask = { ...task, text: newText }; //create a new task with updated text
        return updatedTask;
      } else {
        return task; //otherwise return the task as is
      }
    });

    setTasks(updatedTasks);
  }

  //function to toggle task completion status
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

  //function to set the task filter
  function setTaskFilter(filter) {
    setFilter(filter);
  }

  //filter tasks based on the current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={
          <div className="App">
            <ToDoTitle />
            <ProgressTracker progress={progress} />
            <main className="p-4">
              <ToDoFrame tasks={filteredTasks} addTask={addTask} taskRemove={taskRemove} edit={edit} toggleTaskCompletion={toggleTaskCompletion} setTaskFilter={setTaskFilter} />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;