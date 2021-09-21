import React from "react";
import app from "./base";
import Compiler from "./Components/compiler";
import Joinroom from "./Components/joinroom";

const Home = () => {
  return (
    <>
     <Joinroom></Joinroom>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
