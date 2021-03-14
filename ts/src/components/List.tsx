import React, { FC } from 'react'
import { TTodosArray } from "../types/components-types"
import { TReducer } from "../types/store-types"
import { useSelector } from "react-redux"
import { todoSelector } from "../store"
import { Todo } from "./Todo"
import '../css/index.css'

export const List: FC = () => {
    const todos = useSelector<TReducer, TTodosArray>(todoSelector)

    return (
        <>
            {!todos[0] && <div>No todos...</div>}
            {todos[0] && todos.map(todo => {
                return <Todo todo={todo} key={todo.id}/>
            })}
        </>
    )
}


