import React from "react";

import CreateRoomContext from './createroom'

export default function CreateroomState(props) {
    const state={
        inRoom:false,
        roomId:"",
    }
    return (
       <CreateRoomContext.Provider  value={state}>
           {props.children}
        </CreateRoomContext.Provider>
    )
}
