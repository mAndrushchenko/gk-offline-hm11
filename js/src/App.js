import React from 'react'
import image from "./css/background.jpg"
import TodosByHooks from "./components/TodosByHooks"
import './css/index.css'
import {Provider} from "react-redux"
import {store} from "./reducers/root"

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <img src={image} alt=""/>
                <div className="todos">
                    <div className="by-hooks">
                        <h1>Todo list</h1>
                        <TodosByHooks/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App
