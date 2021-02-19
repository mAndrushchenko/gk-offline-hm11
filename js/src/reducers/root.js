import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {todosReducers} from "./todosReducers"

const rootReducer = combineReducers({
    todosReducers:  todosReducers.reducer
})


export const store = configureStore({reducer: rootReducer})

