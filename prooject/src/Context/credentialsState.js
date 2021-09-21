import React from "react";

import UserDataContext from './credentialscontext'


export default function UserState(props) {
    const state={
        email:"",
        userPasword:"",
    }
    return (
       <UserDataContext.Provider  value={state}>
           {props.children}
        </UserDataContext.Provider>
    )
}