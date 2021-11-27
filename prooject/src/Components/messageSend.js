import React, { useState } from "react";
import app from "../base";
import './message.css'

function MessageSend({ id, email }) {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createMessage = () => {
        const messageRef = app.database().ref("Rooms").child(id).child("message");
       
        const message = {
            title,
            email
        };

        messageRef.push(message);
        setTitle("");
    }

    const enterpressed = (e) => {
        if (e.key == 'Enter'){
            createMessage(e);
        }
        
    }

    return (
        <div className="messageAll">
            <input type="text" onKeyDown={enterpressed} onChange={handleOnChange} value={title} />
            <button type="submit" onClick={createMessage} className="messageSendButton">Send</button>
        </div>
    )
}

export default MessageSend;