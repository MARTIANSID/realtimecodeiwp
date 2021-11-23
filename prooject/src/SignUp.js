import React, {useCallback, useContext,useState} from "react";
import {withRouter} from "react-router";
import app from "./base";
import UserDataContext from "./Context/credentialscontext.js";
import classes from "./auth.module.css"

const SignUp = ({history}) => {
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")
    const userData = useContext(UserDataContext)
    const handleSignUp = async(event)=> {
        event.preventDefault();
        try {
            userData.email = email
            userData.password = password
            localStorage.setItem("email",email);
          
            // console.log(email)
            await app.auth().createUserWithEmailAndPassword(email, password);
            history.push("/join");
        } catch (error) {
            alert(error);
        }
    }
    const handleLogin =async(event)=>{
        event.preventDefault();
        try {
            console.log(email)
            userData.email = email
            userData.password = password
            localStorage.setItem("email",email);
            await app.auth().signInWithEmailAndPassword(email, password);
            history.push("/join");
        } catch (error) {
            alert(error);
        }
    };
    const changeModei = () => {
        const container = document.getElementById("container");
        container.classList.remove(classes.right_panel_active);
        // container.classList.add(classes.le)
      };
    
      const changeModeu = () => {
        const container = document.getElementById("container");
        container.classList.add(classes.right_panel_active);
      };
      const handleEmail=(event)=>{
          setEmail(event.target.value)
          console.log(email)
      }
      const handlePassword=(event)=>{
        setPassowrd(event.target.value)
        console.log(password)
    }
    return (

<body className={classes.body}>
    
    <div className={classes.container} id="container">
        <div className={`${classes.form_container} ${classes.sign_up_container}`}>
            <form className={classes.form} action="/join">
                <h1 className={classes.h1}>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"  onChange={handleEmail} value={email}/>
                <input type="password" placeholder="Password"  onChange={handlePassword}value={password}  />
                <button className={classes.button} onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
        <div className={`${classes.form_container} ${classes.sign_in_container}`}>
            <form className={classes.form} action="/join">
                <h1 className={classes.h1}>Sign in</h1>
                <input type="email" placeholder="Email" onChange={handleEmail} value={email}/>
                <input type="password" placeholder="Password"  onChange={handlePassword} value={password}/>
                <button className={classes.button} onClick={handleLogin} >Sign In</button>
                <br></br>
                <div>
                <button className={classes.button}>Sign In with Google</button>
                    </div>
            </form>
            
        </div>
        <div className={classes.overlay_container}>
            <div className={classes.overlay}>
                <div className={`${classes.overlay_panel} ${classes.overlay_left}`}>
                <h1 className={classes.h1}>Hello, Friend!</h1>
                <p className={classes.p}>Enter your personal details and start journey with us</p>
                 
                    <h2>Happy Coding</h2><br />
                    <button className={`${classes.ghost} ${classes.button} `} onClick={changeModei} id="signIn">Sign Up</button>
                </div>  
                <div className={`${classes.overlay_panel} ${classes.overlay_right}`}>
                <h1 className={classes.h1}>Welcome Back!</h1>
                <p className={classes.p }>To keep connected with us please login with your personal info</p>
                    <h2>Happy Coding</h2><br />
                    
                    <button className={`${classes.ghost} ${classes.button} `} onClick={changeModeu} id="signUp">Sign In</button>
                </div>
            </div>
        </div>
    </div>
</body>

    );
};

export default withRouter(SignUp);
