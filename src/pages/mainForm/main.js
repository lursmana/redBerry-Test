import React, { useEffect, useState } from "react";
import Ellipse from "./Ellipse.png";
import Next from "./Next.png";
import Previous from "./Previous.png";
import SideText from "../../components/SideText";
import { SidebarTexts } from "../../constants";
import PersonalInformation from "../personalInformation/personalInformation";
import TechnicalSkillSet from "../technicalskillset/technicalskillset";
import CovidStuff from "../covid/covidStuff";
import RedberrianInsights from "../redberrianInsights/redberrianinsights";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";

const ApplicationForm = (props) => {
  const [page, setPage] = useState(1);
  const [sidebarTitle, setSidebarTitle] = useState("");
  const [sidebarText, setSidebarText] = useState("");
  const navigate = useNavigate();
  const { formState } = props;
  const [errors, setErrors] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: "",
    skills: "",
    workPreference: " ",
    hadCovid: "",
    hadCovidAt: "",
    isVaccinated: "",
    isVaccinatedAt: "",
    willOrganizeDevTalks: "",
    devTalkTopic: "",
    somethingSpecial: "",
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  //////////// functions //////////////////

  const toLandingPage = () => {
    const path = "/";
    navigate(path);
  };

  const toSubmitPage = () => {
    const pathtosubmitt = "/submit-button";
    navigate(pathtosubmitt);
  };

  useEffect(() => {
    setSidebarTitle(SidebarTexts.covidStuff[page - 1].title);
    setSidebarText(SidebarTexts.covidStuff[page - 1].text);
  }, [page]);

  ///////////////////// errors /////////////////////////////

  const handlePersonalInfoErrors = (errorKey, errorMessage) => {
    if (errorKey === "firstName") {
      setErrors({ ...errors, firstName: errorMessage });
    }
    if (errorKey === "lastName") {
      setErrors({ ...errors, lastName: errorMessage });
    }
    if (errorKey === "email") {
      setErrors({ ...errors, email: errorMessage });
    }
    if (errorKey === "phone") {
      setErrors({ ...errors, phone: errorMessage });
    }
  };

  const handleCovidErrors = (errorKey, errorMessage) => {
    if (errorKey === "workPreference") {
      setErrors({ ...errors, workPreference: errorMessage });
    }
    if (errorKey === "hadCovid") {
      setErrors({ ...errors, hadCovid: errorMessage });
    }
    if (errorKey === "hadCovidAt") {
      setErrors({ ...errors, hadCovidAt: errorMessage });
    }
    if (errorKey === "isVaccinated") {
      setErrors({ ...errors, isVaccinatedAt: errorMessage });
    }

    if (errorKey === "isVaccinatedAt") {
      setErrors({ ...errors, isVaccinatedAt: errorMessage });
    }
  };

  const handleRedberrianErrors = (errorKey, errorMessage) => {
    if (errorKey === "willOrganizeDevTalks") {
      setErrors({ ...errors, willOrganizeDevTalks: errorMessage });
    }
    if (errorKey === "devTalkTopic") {
      setErrors({ ...errors, devTalkTopic: errorMessage });
    }
    if (errorKey === "somethingSpecial") {
      setErrors({ ...errors, somethingSpecial: errorMessage });
    }
  };

  //////////////////// navigation //////////////////

  const handleNext = () => {
    if (
      page === 1 &&
      errors.firstName === "" &&
      errors.lastName === "" &&
      errors.email === ""
    ) {
      setPage(2);
    }

    if (page === 2 && formState.skills.length === 0) {
      setErrors({ ...errors, skills: "You must choose at least one skill" });
    }

    if (page === 2 && formState.skills.length > 0) {
      setPage(3);
    }

    if (page === 3 && formState.work_preference === "") {
      setErrors({ ...errors, workPreference: "This Field is Required" });
    }
    if (page === 3 && formState.work_preference !== "") {
      setErrors({ ...errors, workPreference: "" });
    }

    if (
      page === 3 &&
      errors.workPreference === "" &&
      errors.isVaccinated === "" &&
      errors.isVaccinatedAt === "" &&
      errors.hadCovid === "" &&
      errors.hadCovidAt === ""
    ) {
      setPage(4);
    }

    if (
      page === 4 &&
      errors.willOrganizeDevTalks === "" &&
      errors.devTalkTopic === "" &&
      errors.somethingSpecial === ""
    ) {
      toSubmitPage();
    }
  };

  return (
    <form id="container">
      <div>
        {page === 1 && (
          <PersonalInformation
            firstName={formState.first_name}
            handleFirstName={props.handleFirstName}
            lastName={formState.last_name}
            handleLastName={props.handleLastName}
            email={formState.email}
            handleEmail={props.handleEmail}
            phone={formState.phone}
            handlePhone={props.handlePhone}
            errors={errors}
            handlePersonalInfoErrors={handlePersonalInfoErrors}
          />
        )}
        {page === 2 && (
          <TechnicalSkillSet
            skillsArray={props.skillsArray}
            handleSkills={props.handleSkills}
            handleSkillDelete={props.handleSkillDelete}
            errors={errors}
          />
        )}
        {page === 3 && (
          <CovidStuff
            hadCovidAt={formState.had_covid_at}
            handleHadCovidAt={props.handleHadCovidAt}
            vaccinatedAt={formState.vaccinated_at}
            handleVaccinatedAt={props.handleVaccinatedAt}
            workPreference={formState.work_preference}
            handleWorkPreference={props.handleWorkPreference}
            hadCovid={formState.had_covid}
            handleHadCovid={props.handleHadCovid}
            Vaccinated={formState.vaccinated}
            handleVaccinated={props.handleVaccinated}
            errors={errors}
            handleCovidErrors={handleCovidErrors}
          />
        )}
        {page === 4 && (
          <RedberrianInsights
            devtalkTopic={formState.devtalk_topic}
            handleDevtalkTopic={props.handleDevtalkTopic}
            somethingSpecial={formState.something_special}
            handleSomethingSpecial={props.handleSomethingSpecial}
            WillOrganizeDevtalks={formState.will_organize_devtalk}
            handleWillOrganizeDevtalks={props.handleWillOrganizeDevtalks}
            errors={errors}
            handleRedberrianErrors={handleRedberrianErrors}
          />
        )}
      </div>

      <SideText title={sidebarTitle} text={sidebarText} />
      <div id="Navigation-div">
        <div id="ellipcecon-div">
          <img
            src={Previous}
            onClick={() => {
              page === 1 ? toLandingPage() : setPage(page - 1);
            }}
            id="previous"
            alt=""
          />
          <img src={Ellipse} alt="" className="ellipseFilled" />
          <img
            src={Ellipse}
            className={page > 1 ? "ellipseFilled" : "ellipse"}
            alt=""
          />
          <img
            src={Ellipse}
            className={page > 2 ? "ellipseFilled" : "ellipse"}
            alt=""
          />
          <img
            src={Ellipse}
            className={page > 3 ? "ellipseFilled" : "ellipse"}
            alt=""
          />
          <img
            src={Ellipse}
            className={page > 4 ? "ellipseFilled" : "ellipse"}
            alt=""
          />
          <img alt="" src={Next} onClick={handleNext} id="next" />
        </div>
      </div>
    </form>
  );
};

export default ApplicationForm;
