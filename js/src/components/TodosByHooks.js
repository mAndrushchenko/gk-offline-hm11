import React, { useState, useCallback } from 'react'
import Todo from "./Todo"
import '../css/index.css'
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../reducers/todosReducers"
import { errorNotification } from "./notifacation"


const TodosByHooks = () => {
    const [text, setText] = useState('')
    const todos = useSelector(state => state.todosReducers)
    const dispatch = useDispatch()

    const onAdd = useCallback((e) => {
        e.preventDefault()
        if (!text) return
        if (todos.length >= 14) {
            errorNotification('Sorry, but you have the maximum amount of todos. Please remove some of them and try again.')
            setText('')
            return
        }
        const newTodo = {
            text,
            id: Date.now(),
            completed: false
        }
        dispatch(addTodo(newTodo))
        setText('')
    }, [text])

    const handleChange = useCallback(({ target }) => {
        const value = target.value
        setText(value)
    }, [todos])


    return (
        <div className="App">
            <form onSubmit={onAdd} className="todo-maker">
                <input
                    type='text'
                    onChange={handleChange}
                    className="field"
                    value={text}
                />
                <button
                    type="submit"
                    className="btn-add"
                    onClick={onAdd}>
                    Add
                </button>
            </form>
            <Todo/>
        </div>
    )
}

export default TodosByHooks
