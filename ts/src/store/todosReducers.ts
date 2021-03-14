import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodo, TTodosArray } from "../types/components-types"
import { defListForHooks } from "./defaltTodoList"

export const todosReducers = createSlice({
    name: 'todoReducers',
    initialState: defListForHooks,
    reducers: {
        addTodo: (state: TTodosArray, action: PayloadAction<ITodo>) => {
            state.unshift(action.payload)
        },
        removeTodo: (state: TTodosArray, action: PayloadAction<ITodo>) => {
            return state.filter(todo => {
                if (todo.id !== action.payload.id) {
                    return todo
                }
            })
        },
        toggleTodo: (state: TTodosArray, action: PayloadAction<ITodo>) => {
            state.forEach(todo => {
                if (todo.id === action.payload.id) {
                    return todo.completed = !todo.completed
                }
                return todo
            })
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todosReducers.actions