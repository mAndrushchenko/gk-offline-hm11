import React, { useCallback } from 'react'
import '../css/index.css'
import { useDispatch, useSelector } from "react-redux"
import { removeTodo, toggleTodo } from "../reducers/todosReducers"

const Todo = () => {
    const todos = useSelector(state => state.todosReducers)
    const dispatch = useDispatch()

    const onToggle = useCallback((id) => {
        dispatch(toggleTodo(id))
    }, [todos])

    const handleRemove = useCallback((id) => {
        dispatch(removeTodo(id))
    }, [todos])

    return (
        <>
            {!todos[0] && <div>No todos...</div>}
            {todos[0] && todos.map(todo => (
                <div
                    id={todo.id}
                    key={todo.id}
                    className='todo-item'
                >
                    <li
                        className={`li-item  + ${todo.completed ? 'completed' : ''}`}
                        onClick={() => onToggle(todo.id)}
                    >
                        {todo.text}
                    </li>
                    <button
                        className="btn btn-close"
                        onClick={() => handleRemove(todo.id)}
                    >
                        X
                    </button>
                </div>))}
        </>
    )
}

export default Todo

