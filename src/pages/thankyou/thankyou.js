import React, { Fragment, useEffect } from "react";
import "./thankyou.css";
import { Link, useNavigate} from "react-router-dom";


const ThankYouPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        navigate("/");
      }, 3000);
      return () => clearInterval(interval);
    },);

      
    

    return (
      <Fragment>
        <div id="containerTYP">
          <h1 id="h1TYP">Thanks for Joining 😊</h1>
        </div>
      </Fragment>
    );
  };
  
  export default ThankYouPage;