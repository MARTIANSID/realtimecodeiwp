import React from "react";
import './message.css'

function MessageFloat({ message }) {
    return (
        <div>
            <h4 className="messageSmall">{message.title}</h4>
        </div>
    )
}

export default MessageFloat;