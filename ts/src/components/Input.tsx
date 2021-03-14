import React, { useState, useCallback, FC, FormEvent, ChangeEvent } from 'react'
import { TAppDispatch, TReducer } from "../types/store-types"
import { ITodo, TTodosArray } from "../types/components-types"
import { useDispatch, useSelector } from "react-redux"
import { errorNotification } from "./notifacation"
import { addTodo } from "../store/todosReducers"
import { todoSelector } from "../store"
import '../css/index.css'


export const Input: FC = () => {
    const [text, setText] = useState('')
    const todos = useSelector<TReducer, TTodosArray>(todoSelector)
    const dispatch = useDispatch<TAppDispatch>()

    const onAdd = useCallback((e: FormEvent) => {
        e.preventDefault()
        if (!text) return
        if (todos.length >= 15) {
            errorNotification('Sorry, but you have the maximum amount of todos. Please remove some of them and try again.')
            setText('')
            return
        }
        const newTodo: ITodo = {
            text,
            id: Date.now(),
            completed: false
        }
        dispatch(addTodo(newTodo))
        setText('')
    }, [text])

    const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
        const value = target.value
        setText(value)
    }, [todos])


    return (
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
    )
}