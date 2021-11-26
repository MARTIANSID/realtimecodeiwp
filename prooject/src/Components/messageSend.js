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
        console.log('hey its me');
    }

    return (
        <div className="messageAll">
            <input type="text" onKeyDown={event => event.key === 'Enter' && enterpressed} onChange={handleOnChange} value={title} />
            <button type="submit" onClick={createMessage} className="messageSendButton">Send</button>
        </div>
    )
}

export default MessageSend;