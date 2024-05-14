import React from 'react';
import './style.css';

function ToDoList({ tasks }) { //creates to-do list

    let items = [];

    function createList(tasks) { 

        for (let i = 0; i < tasks.length; i++) {

            let task = tasks[i];
            let toDoItem = (  //creates to-do item
                <li key={task.id} className="to-do-item">
                    {task.text} 
                </li>
            );

            items.push(toDoItem); 
        }

        return items;
    }

    return (
        <ul >
            {createList(tasks)} 
        </ul>
    );
}

export default ToDoList;
