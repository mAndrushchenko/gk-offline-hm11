import {createSlice} from "@reduxjs/toolkit";
import {defListForHooks} from "../components/defaltTodoList";

export const todosReducers = createSlice({
    name: 'todoReducers',
    initialState: defListForHooks,
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload)
        },
        removeTodo: (state, action) => {
            return state.filter(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
            })
        },
        toggleTodo: (state, action) => {
                state.forEach(todo => {
                if (todo.id === action.payload) {
                    return todo.completed = !todo.completed
                }
                return todo
            })
        }
    }
})

export const {addTodo, removeTodo, toggleTodo} = todosReducers.actions