import React, { useState, useEffect } from "react";
import app from "../base";
import MessageFloat from "./messageFloat";
import './message.css'


function MessageList({ id }) {
    const [messageList, setMessageList] = useState('');

  useEffect(() => {
    const messageRef = app.database().ref('Rooms').child(id).child("message");
    messageRef.on('value', (snapshot) => {
      const message = snapshot.val();
      const messageList = [];
      //console.log(message);
      for (let id in message) {
        messageList.push(message[id]);
      }
      console.log(messageList);
      setMessageList(messageList);
    });
  }, []);

  return (
      <div>
          <h3 className="messageHeading">Messages</h3>
          <br></br>
          <div className="messageMiddle">
              {messageList ? messageList.map((message, index) => <MessageFloat message={message} key={index} />) : ''}
          </div>
      </div>
  );
}

export default MessageList;