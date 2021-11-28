import React from "react";
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from "@material-ui/core";

import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import { ContextProvider } from "./SocketContext";

import './styles.css'

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
        width: '100%',
      },

}));

const InterviewBeta = () => {
    const classes = useStyles();

    return (
        <ContextProvider>
            <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Interview</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
        </ContextProvider>
        
    );
};

export default InterviewBeta;