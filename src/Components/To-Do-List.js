import React, { useState } from 'react';
import './style.css';

function ToDoList({ tasks, taskRemove, edit, toggleTaskCompletion }) { //creates todo list
    const [editMode, setEditMode] = useState(null);
    const [editText, setEditText] = useState('');

    function handleEditClick(task) {
        setEditMode(task.id);
        setEditText(task.text);
    }

    function handleSaveClick(task) {
        edit(task.id, editText);
        setEditMode(null);
    }

    function createList(tasks) {
        let items = [];

        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            let toDoItem;

            if (editMode === task.id) {
                toDoItem = (
                    <li key={task.id} className="to-do-item">
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="edit-input"
                        />
                        <button onClick={() => handleSaveClick(task)} className="save-button">Save</button>
                    </li>
                );
            } else {
                toDoItem = (
                    <li key={task.id} className={`to-do-item ${task.completed ? 'completed' : ''}`}>
                        <span>{task.text}</span>
                        <div className="button-container">
                            <button onClick={() => handleEditClick(task)} className="edit-button">Edit</button>
                            <button onClick={() => taskRemove(task.id)} className="remove-button">Remove</button>
                            <button onClick={() => toggleTaskCompletion(task.id)} className="complete-button">
                                {task.completed ? 'Unmark' : 'Complete'}
                            </button>
                        </div>
                    </li>
                );
            }
            items.push(toDoItem);
        }
        return items;
    }

    return (
        <ul>
            {createList(tasks)}
        </ul>
    );
}

export default ToDoList;
