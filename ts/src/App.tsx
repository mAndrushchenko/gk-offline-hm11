import React, { FC } from 'react'
import ReactNotification from "react-notifications-component"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { Provider } from "react-redux"
import { store } from "./store"
import './css/index.css'

export const App: FC = () => {
    return (
        <Provider store={store}>
            <ReactNotification className="notification"/>
            <div className="todos">
                <img src={process.env.PUBLIC_URL + '/background.jpg'} className="bg" alt="" draggable={false}/>
                <div className="by-hooks">
                    <Input/>
                    <List/>
                </div>
            </div>
        </Provider>
    )
}

