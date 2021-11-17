import React from "react";
import MessageList from "./messageList";
import MessageSend from "./messageSend";
import './message.css'

function Message({ id ,email}) {
    return (
        <div className="messageMain">
            <MessageList id={id} email={email}/>
            <MessageSend id={id}/>
        </div>
    )
}

export default Message;