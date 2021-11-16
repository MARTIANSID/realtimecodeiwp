import React, { useContext } from "react";
import UserDataContext from "../Context/credentialscontext";
import axios from "axios";
import nextId from "react-id-generator";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import classes from "./joinroom.module.css";

// import UserDataContext from '../Context/credentialscontext'

export default function Joinroom() {
  let history = useHistory();
  const userData = useContext(UserDataContext);

  const createRoom = () => {
    const id = uuid();
    const url =
      "https://real-time-coding-default-rtdb.firebaseio.com/Rooms.json";
    const data = {
      roomId: id,
      emailofcreator: userData.email,
      code: "",
      userid: "",
    };

    let urlid;
    axios.post(url, data).then((response) => {
      console.log(response);
      urlid = response.data.name;
      console.log(response.data.name);
      history.push("/compiler/" + urlid);
    });
  };

  const joinRoom = () => {};

  return (
      <div className={classes.room}>
    <div className={classes.room}>
   
      <label className={classes.label}>Enter Room Id</label>
      <div>
        <input className={classes.input} />
      </div>
      <button className={classes.joinRoombutton}>Join Room</button>

      <button className={classes.createRoombutton} onClick={createRoom}>
        {" "}
        Create Room
      </button>
    </div>
    </div>
    
  );
}