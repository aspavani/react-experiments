// import { Component } from 'react'
import React, { useEffect, useState, useReducer } from 'react';
import ToDo from './Todo';

const itasks = JSON.parse(localStorage.getItem('tasks')) || [];


function reducer(tasks, action) {   
    switch(action.type) {
        case "ADD_TODO":
            if(!action.inputTask) {return tasks;}
            return ([...tasks, { taskName: action.inputTask, completed: false }]);

        case "REMOVE_TODO":
            const newtasks = [...tasks];
            newtasks.splice(action.index, 1);
            return newtasks;

        case "TOGGLE_TODO":
            const newTasks = [...tasks];
            newTasks[action.index].completed = !newTasks[action.index].completed;
            return newTasks;

        case "RESET_TODOS":
            return itasks;

        default:
            return tasks;
    }
}

function ToDoList2() {
    
    const [tasks, dispatch] = useReducer(reducer, itasks);
    const [input, setInput] = useState("");

    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [...tasks]);

    const handleAdd = () => {
        dispatch({type:"ADD_TODO", inputTask:input});
    }

    const handleRemove = (index) => {
        dispatch({type:"REMOVE_TODO", index:index})
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleToggle = (index) => {
        dispatch({type:"TOGGLE_TODO", index:index});
        
    }

    const handleReset = () => {
        dispatch({type:"RESET_TODOS"});
    }

    
    return (
        <div>
            <input value={input} onChange={handleChange} /> 
            <button onClick={handleAdd}>Add</button>
            &nbsp; &nbsp; 
            
            <button onClick={handleReset} style={{ display:(tasks.length > 0 ? "none" : "")}}>Reset</button>
     

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

export default ToDoList2;