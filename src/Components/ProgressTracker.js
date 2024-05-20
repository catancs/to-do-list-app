import React from 'react';
import ToDoFrame from './To-Do-Frame';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ToDoTitle from './To-Do-Title';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './style.css';

function ProgressTracker({ progress }) {
    return (
        <div className="progress-tracker">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <p>{Math.round(progress)}% completed</p>
        </div>
    );
}

export default ProgressTracker;
