import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./Todoitem";
import Completed from "./completed";

function TodoInput() {
    const [taskname, setTaskname] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.value);
        setTaskname(e.target.value);
    }

    const handleClick = (task) => {
        const payload = {
            title: task,
            status: false,
            id: uuid()
        }
        setTodos([payload, ...todos]);
    }
   
    const handleToggle = (id) => {
        const newTodos = todos.map(e => e.id === id ? { ...e, status: !e.status } : e)
        setTodos(newTodos);
    }

    const handleDelete = (id) => {
        const deleteTasks = todos.filter(e => e.id !== id);
        setTodos(deleteTasks);
    }

    const completedTask = todos.filter(e => e.status === true);

    return (
        <>
            <div>
             {todos.map(task => {
                return <TodoItem key={task.id}  {...task} handleToggle={handleToggle} handleDelete={handleDelete} />
             })}
            
            <input type="text" placeholder="Write Something" value={taskname} onChange={handleChange} />
            <button onClick={() => handleClick(taskname)}>+</button>

                {completedTask !=[] ? <Completed completedTask={completedTask} /> : null}
                
                </div>
           
        </>
    )
}

export default TodoInput;