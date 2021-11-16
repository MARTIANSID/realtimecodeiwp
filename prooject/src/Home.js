import React from "react";
// import app from "./base";
// import Compiler from "./Components/compiler";
// import Joinroom from "./Components/joinroom";
import  classes from './home.module.css'

const Home = () => {
    return (
        <>
            <div>
                <nav className={classes.navbar}>
                    <ul>
                        <li><a className={classes.logo} href="/">ℝeal Time ℂoding</a></li>
                        <li><a className={classes.auth} href="/signup">Sign-in/Sign-up</a></li>
                        <li><a className={classes.auth} href="/homme">Home</a></li>
                        <li><a className={classes.auth} href="/signup">Support</a></li>
                    </ul>
                </nav>
                <div id={classes.slider}>
                    <div className={classes.slides}>

                        <div className={classes.slider}>
                            <div className={classes.legend}></div>
                            <div className={classes.content}>
                                <div className={classes.content_txt}>
                                    <h1>Work in a collaborative environment</h1>
                                    <h2>
                                        Share the link to your friends or colleague. Choose a language
                                                        to code. Write some code. See changes in code that your friend
                                                        or colleague made in real time.
                                    </h2>
                                </div>
                            </div>
                            <div className={classes.images}>
                                <img src="home.jpg"/>
                            </div>
                        </div>


                        <div className={classes.slider}>
                            <div className={classes.legend}></div>
                            <div className={classes.content}>
                                <div className={classes.content_txt}>
                                    <h1>Compile your code</h1>
                                    <h2>
                                        Choose from more than 50 popular languages. Compile your code.
                                                        If code contains error it will be displayed in the output
                                                        window. If code is error free output will be displayed.
                                    </h2>
                                </div>
                            </div>
                            <div className={classes.images}>
                                <img src="collaborative.jpg"/>
                            </div>
                        </div>


                        <div className={classes.slider}>
                            <div className={classes.legend}></div>
                            <div className={classes.content}>
                                <div className={classes.content_txt}>
                                    <h1>Chat window</h1>
                                    <h2>
                                        You can chat with your colleagues using the chat window. If your
                                                        friend sends some message it notification will be displayed.
                                    </h2>
                                </div>
                            </div>
                            <div className={classes.images}>
                                <img src="chat.png"/>
                            </div>
                        </div>


                        <div className={classes.slider}>
                            <div className={classes.legend}></div>
                            <div className={classes.content}>
                                <div className={classes.content_txt}>
                                    <h1>Happy Coding</h1>
                                </div>
                            </div>
                            <div className={classes.images}>
                                <img src="4.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer> 🖤 Made by Saima , Aniket, Preetham, Aditya, Badhan.  </footer>
        </>
    );
};

export default Home;
