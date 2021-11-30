import React, { useEffect } from "react";
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from "@material-ui/core";

import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import { ContextProvider } from "./SocketContext";
import Codingpart from "./Codingpart";

import { fullpage, codingpart, wrapper } from './styles.css'
import { Autorenew } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '40%',
        //backgroundColor: 'white',
        height: 1100,
        
      },

      codingpart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        backgroundColor: 'white',
        height: 1200,
      },

      fullpage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      
        // backgroundColor: 'white',
      }

}));

const InterviewBeta = () => {
    const classes = useStyles();

    useEffect(() => {

    })

    return (
      <div className={`${classes.fullpage} `} >
        <div className={`${classes.codingpart} `}>
          <Codingpart />
        </div>
    

    
        <ContextProvider>
            <div className={`${classes.wrapper} `}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Interview</Typography>
            </AppBar>
            <VideoPlayer email={localStorage.getItem("email")} />
            <Options>
                <Notifications />
            </Options>
        </div>
        </ContextProvider>
        
        </div>
    );
};

export default InterviewBeta;