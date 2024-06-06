// import { Component } from 'react'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from './Todo'

function ToDoList1() {
    
    const itasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(itasks);
    const [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    const handleAdd = () => {
        console.log(tasks);
        if (!input) return;

        setTasks([...tasks, { taskName: input, completed: false }]);
        setInput(" ");
    }

    const handleRemove = (index) => {
        const newTasks = [...tasks];

        newTasks.splice(index, 1);

        setTasks(newTasks);
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleToggle = (index) => {
        const newTasks = [...tasks];

        newTasks[index].completed = !newTasks[index].completed;

        setTasks(newTasks);
    }

    
    return (
        <div>
            <input value={input} onChange={handleChange} />
            <button onClick={handleAdd}>add</button>

            <ul>
                {tasks.map((task, index) => {
                    return (
                        <ToDo 
                            key={index}
                            index={index}
                            task={task}
                            handleToggle={handleToggle}
                            handleRemove={handleRemove}
                        />
                    )
                })}
            </ul>
        </div>
    )

}

export default ToDoList1