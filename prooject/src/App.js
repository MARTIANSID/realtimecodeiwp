import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
// import Login from "./Login";
import SignUp from "./SignUp";
import {AuthProvider} from "./Auth";
// import PrivateRoute from "./PrivateRoute";
import CreateroomState from "./Context/CreateroomState"
import UserState from './Context/credentialsState'
import Compiler from "./Components/compiler";
import Joinroom from "./Components/joinroom";
import InterviewBeta from "./Interview/InterviewBeta";
import JoinRoom from "./JoinRoom";

const App = () => {
    return (
        <UserState>

            <CreateroomState>
                <AuthProvider>
                    <Router>
                        <div>
                             <Route exact path="/"
                                component={Home}/> 
                            {/* <Route exact path="/login"
                                component={Login}/>  */}
                                <Route  exact path="/join" component={Joinroom} />
                            <Route exact path="/signup"
                                component={SignUp}/>
                            <Route  path="/compiler/:id"  component={Compiler}></Route>
                            <Route exact path="/interviewbeta/:id"
                                component={InterviewBeta}/>
                                <Route exact path="/joinroom/"
                                component={JoinRoom}/>
                        </div>
                    </Router>
                </AuthProvider>


            </CreateroomState>


        </UserState>

    );
};

export default App;
