import React, { useState } from "react";
import app from "../base";

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
    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            <button type="submit" onClick={createMessage}>Send</button>
        </div>
    )
}

export default MessageSend;