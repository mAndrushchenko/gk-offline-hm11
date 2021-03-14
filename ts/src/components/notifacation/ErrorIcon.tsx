import React, { FC } from "react"
import { IErrorIcon } from "../../types/components-types"
import icon from '../../css/false-2061131_640.png'
import '../../css/index.css'


export const ErrorIcon: FC<IErrorIcon> = ({ message }) => {
    return (
        <div className="custom-icon">
            <img className="error-icon" src={icon} alt="" draggable={false}/>
            <p className="message">{message}</p>
        </div>
    )
}