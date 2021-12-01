import React, { useEffect } from "react";
import { Typography, AppBar, Button } from '@material-ui/core'
import { Assignment } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import { ContextProvider } from "./SocketContext";
import Codingpart from "./Codingpart";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
import './styles.css'
// import { , codingpart, wrapper } from './styles.css'
// import { Autorenew } from "@material-ui/icons";

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

      copyBar: {
        borderRadius: 5,
        margin: '0px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '1px solid black',
        marginBottom: '10px',
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
        height: 1100,
      },

      fullpage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      
        // backgroundColor: 'white',
      },

      textcopy: {
        paddingLeft: '87px',
        paddingRight: '86px',
      },

      margincopy: {
        paddingRight: '68px',
        paddingLeft: '68px',
      }

}));

const InterviewBeta = () => {
    const classes = useStyles();
    const {id} = useParams()
    let history = useHistory();

    useEffect(() => {
      console.log(history)
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
            <AppBar className={classes.copyBar} position='static' color='inherit'>
              <div className={classes.textcopy}>
                <Typography variant='h5' align='center'>Invite Interviewee</Typography>
                </div>
                <CopyToClipboard text={`https://realtime-coding.netlify.app/interviewbeta/${id}`} className={classes.margincopy}>
                  
                <Button variant="contained" color="primary"  startIcon={<Assignment fontSize="large" />}>
                  Copy link
                </Button>
              </CopyToClipboard>
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