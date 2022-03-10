import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ApplicationForm from "./pages/mainForm/main";
import "./App.css";
import LandingPage from "./pages/landingPage/Landingpage";
import SubmittedApplications from "./pages/submittedApplications/submittedApplications";
import SubmitPage from "./pages/submit/submit";
import ThankYouPage from "./pages/thankyou/thankyou";

function App() {
  const [formState, setFormState] = useState({
    token: "e7c3b8d9-bbf6-4fc8-9751-86641b157eb2",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    skills: [],
    work_preference: "",
    had_covid: false,
    had_covid_at: "",
    vaccinated: false,
    vaccinated_at: "",
    will_organize_devtalk: false,
    devtalk_topic: "",
    something_special: "",
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);
  //////////// functions //////////////////
  const handleFirstName = (firstName) => {
    setFormState({ ...formState, first_name: firstName });
  };
  const handleLastName = (lastName) => {
    setFormState({ ...formState, last_name: lastName });
  };
  const handleEmail = (Email) => {
    setFormState({ ...formState, email: Email });
  };
  const handlePhone = (Phone) => {
    setFormState({ ...formState, phone: Phone });
  };
  const handleDevtalkTopic = (DevtalkTopic) => {
    setFormState({ ...formState, devtalk_topic: DevtalkTopic });
  };
  const handleSomethingSpecial = (SomethingSpecial) => {
    setFormState({ ...formState, something_special: SomethingSpecial });
  };
  const handleHadCovidAt = (hadCovidAt) => {
    setFormState({ ...formState, had_covid_at: hadCovidAt });
  };
  const handleVaccinatedAt = (vaccinatedAt) => {
    setFormState({ ...formState, vaccinated_at: vaccinatedAt });
  };
  const handleWorkPreference = (workPreference) => {
    setFormState({ ...formState, work_preference: workPreference });
  };
  const handleSkills = (skillId, experienceYears) => {
    setFormState({
      ...formState,
      skills: [
        ...formState.skills,
        { id: skillId, experience: experienceYears },
      ],
    });
  };
  const handleSkillDelete = (index) => {
    console.log(formState.skills);
    console.log(index);
    console.log(formState.skills);

    let newSkills = formState.skills.filter((x, i) => {
      return i !== index;
    });

    setFormState({
      ...formState,
      skills: newSkills,
    });
  };

  const handleHadCovid = (hadCovid) => {
    let covBoolean;
    if (hadCovid === "true") {
      covBoolean = true;
    } else {
      covBoolean = false;
    }
    setFormState({ ...formState, had_covid: covBoolean });
  };
  const handleVaccinated = (Vaccinated) => {
    let vacBoolean;
    if (Vaccinated === "true") {
      vacBoolean = true;
    } else {
      vacBoolean = false;
    }
    setFormState({ ...formState, vaccinated: vacBoolean });
  };
  const handleWillOrganizeDevtalks = (WillOrganizeDevtalks) => {
    let talksBoolean;
    if (WillOrganizeDevtalks === "true") {
      talksBoolean = true;
    } else {
      talksBoolean = false;
    }
    setFormState({ ...formState, will_organize_devtalk: talksBoolean });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/applicationForm"
          exact
          element={
            <ApplicationForm
              formState={formState}
              firstName={formState.first_name}
              handleFirstName={handleFirstName}
              lastName={formState.last_name}
              handleLastName={handleLastName}
              email={formState.email}
              handleEmail={handleEmail}
              phone={formState.phone}
              handlePhone={handlePhone}
              hadCovidAt={formState.had_covid_at}
              handleHadCovidAt={handleHadCovidAt}
              vaccinatedAt={formState.vaccinated_at}
              handleVaccinatedAt={handleVaccinatedAt}
              devtalkTopic={formState.devtalk_topic}
              handleDevtalkTopic={handleDevtalkTopic}
              somethingSpecial={formState.something_special}
              handleSomethingSpecial={handleSomethingSpecial}
              workPreference={formState.work_preference}
              handleWorkPreference={handleWorkPreference}
              hadCovid={formState.had_covid}
              handleHadCovid={handleHadCovid}
              Vaccinated={formState.vaccinated}
              handleVaccinated={handleVaccinated}
              WillOrganizeDevtalks={formState.will_organize_devtalk}
              handleWillOrganizeDevtalks={handleWillOrganizeDevtalks}
              skillsArray={formState.skills}
              handleSkills={handleSkills}
              handleSkillDelete={handleSkillDelete}
            />
          }
        />
        <Route
          path="/submittedApplications"
          exact
          element={<SubmittedApplications />}
        />
        <Route
          path="/submit-button"
          exact
          element={<SubmitPage formState={formState} />}
        />
        <Route path="/thankyou" exact element={<ThankYouPage />} />
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
