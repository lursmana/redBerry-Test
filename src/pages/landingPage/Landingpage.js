import React, { useEffect } from "react";
import "./LandingPage.css";
import Rocketman from "./rocketman.png";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  
  return (
    <div id="containerLP">
      <div id="backgroundLP">
        <h1 id="welcomeLP">Welcome Rocketeer!</h1>
        <Link id="linkap" to="/applicationForm">
          <button id="startBtn">Start Questionare</button>
        </Link>
        <Link to="/submittedApplications">
        <button id="submittedAP">Submitted Aplications</button>
        </Link>
    

        <img id="rocketman" src={Rocketman} />
      </div>
    </div>
  );
};

export default LandingPage;
