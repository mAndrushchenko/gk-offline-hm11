import React, { FC } from "react"
import { IErrorIcon } from "../../types/components-types"
import '../../css/index.css'


export const ErrorIcon: FC<IErrorIcon> = ({ message }) => {
    return (
        <div className="custom-icon">
            <img className="error-icon" src={process.env.PUBLIC_URL + '/cross.png'} alt="" draggable={false}/>
            <p className="message">{message}</p>
        </div>
    )
}