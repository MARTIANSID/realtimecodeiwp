import React from "react";
import app from "./base";
import Compiler from "./Components/compiler";

const Home = () => {
  return (
    <>
      <Compiler></Compiler>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
