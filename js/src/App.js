        import React from 'react'
import image from "./css/background.jpg"
import TodosByHooks from "./components/TodosByHooks"
import './css/index.css'
import {Provider} from "react-redux"
import {store} from "./reducers/root"
import ReactNotification from "react-notifications-component"

const App = () => {
    return (
        <Provider store={store}>
            <ReactNotification className="notification" />
            <div className="App">
                <img className="bg" src={image} alt="" draggable={false}/>
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
