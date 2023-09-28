import React, { useState, useEffect } from 'react';
import './TodoApp.css';
import axios from 'axios';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    const addTodo = () => {
        axios.post('http://localhost:8000/api/', { title: newTodo })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodo('');
            })
            .catch(error => console.error(error));
    };

    const toggleTodo = (id, completed) => {
        axios.put(`http://localhost:8000/api/show/${id}`, { completed: !completed })
            .then(response => {
                const updatedTodos = todos.map(todo =>
                    todo.id === id ? { ...todo, completed: !completed } : todo
                );
                setTodos(updatedTodos);
            })
            .catch(error => console.error(error));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:8000/api/destroy/${id}`)
            .then(() => {
                const updatedTodos = todos.filter(todo => todo.id !== id);
                setTodos(updatedTodos);
            })
            .catch(error => console.error(error));
    };

    return (
        
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                placeholder="New Todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id, todo.completed)}
                        />
                        {todo.task}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
