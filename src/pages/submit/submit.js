import React, { Fragment, useEffect } from "react";
import "./submit.css";
import { Link, Navigate} from "react-router-dom";
import axios from "axios";
const SubmitPage = (props) => {

   function postApplication() {
    axios
      .post(`https://bootcamp-2022.devtest.ge/api/application`, props.formState)
      .then((responce) => {console.log(responce)})
      .catch((error) => {console.log(error)})
  };

  return (
    <Fragment>
      <div id="containerSP">
        <Link to="/thankyou">
        <button id="submit-application-button" onClick={postApplication}>Submit</button>
        </Link><br />
        <Link to="/applicationForm">
        <button id="back-button">Go Back</button>
        </Link>
        
      </div>
    </Fragment>
  );
};

export default SubmitPage;
