import React from "react";
import MessageList from "./messageList";
import MessageSend from "./messageSend";
import './message.css'

function Message({ id }) {
    return (
        <div className="messageMain">
            <MessageList id={id}/>
            <MessageSend id={id}/>
        </div>
    )
}

export default Message;