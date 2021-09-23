import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import UserDataContext from "./Context/credentialscontext.js";
import * as firebase from 'firebase';


const Login = ({ history }) => {
  const userData=useContext(UserDataContext)
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {

      

        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          userData.email=email.value
          userData.password=password.value
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }


  const googleSignIn = async () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    // const provider = app.auth.GoogleAuthProvider()
    await app.auth().signInWithPopup(provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err)
    })

  }

  const signUpInstead = () => {
    history.push('/signup');
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        
      </form>
      <div>
      <button onClick={signUpInstead}>Sign up with email</button>
      </div>

      <div>
      <button onClick={googleSignIn}>
        Sign In with Google
      </button>
    </div>
    </div>
  );
};

export default withRouter(Login);