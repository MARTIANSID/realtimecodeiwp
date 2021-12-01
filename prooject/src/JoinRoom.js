import React, { useContext,useState} from "react";
// import {withRouter} from "react-router";
// import app from "./base";
import UserDataContext from "./Context/credentialscontext.js";
import classes from "./auth.module.css"
import classesnow from "./Components/joinroom.module.css";

import axios from "axios";
// import nextId from "react-id-generator";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";


const JoinRoom = () => {
 
    const changeModei = () => {
        const containerroom = document.getElementById("containeroom");
        containerroom.classList.remove(classes.right_panel_active);
        // container.classList.add(classes.le)
      };
    
      const changeModeu = () => {
        const containerroom = document.getElementById("containeroom");
        containerroom.classList.add(classes.right_panel_active);
      };
      

    let history = useHistory();
 const[id,setId] = useState()
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

  const joinRoom = (events) => {
    setId(events.target.value)
   
  };

  const join=()=>{
    history.push("/compiler/" + id);
  }

  const startInterview = () => {
    const id = uuid()
    const url = "https://real-time-coding-default-rtdb.firebaseio.com/Interview.json"
    const data = {
      interviewId: id,
      emailofcreator: userData.email,
      code: "",
      userid: "",
      question: "",
    };

    let urlid;
    axios.post(url, data).then((response) => {
      console.log(response);
      urlid = response.data.name;
      console.log(response.data.name);
      history.push("/interviewbeta/" + urlid);
    });
  }

    return (

<body className={classes.body}>
    
    <div className={classes.containerroom} id="containeroom">
        <div className={`${classes.form_container} ${classes.sign_up_container}`}>
            <div className={classes.form} >
                {/* <h1 className={classes.h1}>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"  onChange={handleEmail} value={email}/>
                <input type="password" placeholder="Password"  onChange={handlePassword}value={password}  />
                <button className={classes.button} onClick={handleSignUp}>Sign Up</button> */}
                <label className={classesnow.label}>Enter Room Id</label>
     
        <input className={classes.enterid} placeholder="Room ID" onChange={joinRoom}/>
      
      <button className={classesnow.joinRoombutton} onClick={join}>Join Room</button>

      <button className={classesnow.createRoombutton} onClick={createRoom}>
        {" "}
        Create Room
      </button>
            </div>
            
        </div>
        <div className={`${classes.form_container} ${classes.sign_in_container}`}>
            <div className={classes.form} >
                {/* <h1 className={classes.h1}>Sign in</h1>
                <input type="email" placeholder="Email" onChange={handleEmail} value={email}/>
                <input type="password" placeholder="Password"  onChange={handlePassword} value={password}/>
                <button className={classes.button} onClick={handleLogin} >Sign In</button>
                <br></br>
                <div>
                <button className={classes.button}>Sign In with Google</button>
                    </div> */}
                    
                    <br />
      <button className={classesnow.createRoombutton} onClick={startInterview} >Start Interview (beta)</button>
            </div>
            
        </div>
        <div className={classes.overlay_container}>
            <div className={classes.overlay}>
                <div className={`${classes.overlay_panel} ${classes.overlay_left}`}>
                <h1 className={classes.h1}>Hello, Friend!</h1>
                <p className={classes.p}>Try out are latest realtime coding feature</p>
                 
                    <h2>Happy Coding</h2><br />
                    <button className={`${classes.ghost} ${classes.button} `} onClick={changeModei} id="signIn">Realtime Coding</button>
                </div>  
                <div className={`${classes.overlay_panel} ${classes.overlay_right}`}>
                <h1 className={classes.h1}>Hello, Mate!</h1>
                <p className={classes.p }>Try out our latest interview feature</p>
                    <br />
                    
                    <button className={`${classes.ghost} ${classes.button} `} onClick={changeModeu} id="signUp">Take Interview</button>
                </div>
            </div>
        </div>
    </div>
</body>

    );
};

export default JoinRoom;