import React, { FC, useCallback } from "react"
import { removeTodo, toggleTodo } from "../store/todosReducers"
import { ITodoComponent } from "../types/components-types"
import { TAppDispatch } from "../types/store-types"
import { useDispatch } from "react-redux"
import '../css/index.css'


export const Todo: FC<ITodoComponent> = ({ todo }) => {
    const dispatch = useDispatch<TAppDispatch>()
    const {text, completed} = todo

    const onToggle = useCallback(() => {
        dispatch(toggleTodo(todo))
    }, [])

    const handleRemove = useCallback(() => {
        dispatch(removeTodo(todo))
    }, [])

    return (
        <div className='todo-item'>
            <li
                className={`li-item  + ${completed ? 'completed' : ''}`}
                onClick={onToggle}
            >
                {text}
            </li>
            <button
                className="btn btn-close"
                onClick={handleRemove}
            >
                X
            </button>
        </div>
    )
}