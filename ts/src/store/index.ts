import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { todosReducers } from "./todosReducers"
import { TReducer } from "../types/store-types"

export const rootReducer = combineReducers({
    todosReducers: todosReducers.reducer
})


export const store = configureStore({ reducer: rootReducer })

export const todoSelector = (store: TReducer) => store.todosReducers