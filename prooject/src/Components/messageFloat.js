import React from "react";
import './message.css'

function MessageFloat({ message }) {
    return (
        <div className="messageCloud">
            <h3 className="messageHeader">{message.email}</h3>
            <h4 className="messageSmall">{message.title}</h4>
        </div>
    )
}

export default MessageFloat;