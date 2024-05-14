import React from 'react';
import './To-Do-Frame.css';

const ToDoFrame = ({ children }) => {
  return (
    <div className="to-do-frame">
      {children}
    </div>
  );
};

export default ToDoFrame;
