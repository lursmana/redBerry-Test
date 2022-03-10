import React, { Fragment, useEffect, useState } from "react";
import SubmittedApplicationForm from "./submittedapplicationForm";
import "./submittedApplications.css";
import axios from "axios";

const SubmittedApplications = () => {
  const [applications, setApplications] = useState([]);
  const [skillsArray, setSkillsArray] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then((results) => setSkillsArray(results.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://bootcamp-2022.devtest.ge/api/applications?token=1679051d-5cca-47c1-a2d5-cdd6f171b3f6`
      )
      .then((results) => setApplications(results.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(applications);
  }, [applications]);

  return (
    <div className="background">
      {applications.map((application, index) => {
        return (
          <SubmittedApplicationForm
            data={application}
            skillsArray={skillsArray}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SubmittedApplications;
