import React, { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function handleNewTodoChange(event) {
        setNewTodo(event.target.value);
    }

    function handleNewTodoSubmit(event) {
        event.preventDefault();
        if (newTodo.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo("");
        }
    }

    function handleTodoDelete(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Todo List</h1>
            <form onSubmit={handleNewTodoSubmit}>
                <label style={{ fontSize: 22 }} htmlFor="new-todo-input">Add a Todo:</label>
                <input
                    style={{ height: 25, margin: 20 }}
                    id="new-todo-input"
                    type="text"
                    value={newTodo}
                    onChange={handleNewTodoChange}
                />
                <button style={{ fontSize: 18, backgroundColor: 'blue', color: '#fff', paddingRight: 10, paddingLeft: 10 }} type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li style={{ listStyle: 'none', marginBottom: 10, backgroundColor: 'green', width: 400, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10 }} key={todo.id}>
                        <h1>{todo.text}</h1>
                        <button style={{ height: 30, width: 70, fontSize: 18 }} onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
