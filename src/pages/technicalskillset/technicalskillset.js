import React, { Fragment, useEffect, useState } from "react";
import "./technicalskillset.css";
import axios from "axios";
import Remove from "../mainForm/Remove.png";
import Error from "../../components/error";

const TechnicalSkillSet = (props) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("1");
  const [selectExperience, setSelectExperience] = useState("");

  useEffect(() => {
    console.log(selectedSkill);
  }, [selectedSkill]);

  const addSkill = () => {
    if (selectExperience && selectedSkill) {
      props.handleSkills(parseInt(selectedSkill), parseInt(selectExperience));
      setSelectedSkill("1");
      setSelectExperience("");
    }
  };

  useEffect(() => {
    axios
      .get(`https://bootcamp-2022.devtest.ge/api/skills`)
      .then((results) => setSkills(results.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  return (
    <Fragment>
      <h1 id="headW">Tell us about your skills</h1>
      <div id="midconW">
        <select
          type="dropDown"
          id="DDI"
          name="skills"
          placeholder="      Skills"
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
        >
          {skills.map((skill) => {
            return (
              <option key={skill.id} value={skill.id}>
                {skill.title}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          id="TI"
          placeholder="     Experience Duration In Years"
          onChange={(e) => setSelectExperience(e.target.value)}
          value={selectExperience}
        />
        <button
          id="APL"
          onClick={(e) => {
            e.preventDefault();
            addSkill();
          }}
        >
          Add Programing Language
        </button>
        {props.errors.skills !== "" && <Error message={props.errors.skills} />}
        <div>
          <ul id="explist">
            {" "}
            {props.skillsArray.map((skill, index) => {
              return (
                <li key={index + 1000}>
                  <div className="experienceList">
                    <p className="experienceListText">
                      {skills.map((x) => {
                        if (skill.id === x.id) {
                          return x.title;
                        } else return null;
                      })}{" "}
                      Years of experience {skill.experience}
                    </p>
                    <div id="Remove-Button">
                      <img
                        src={Remove}
                        onClick={() => props.handleSkillDelete(index)}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TechnicalSkillSet;
