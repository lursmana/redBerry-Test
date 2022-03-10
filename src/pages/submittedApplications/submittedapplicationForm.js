import { useEffect, useState } from "react";
import "./submittedApplications.css";
import Vector from "./Vector.png";

export default function SubmittedApplicationForm(props) {
  const [render, setRender] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div
      className={
        render ? "application-form-expanded" : "application-form-collapsed"
      }
    >
      <div
        className="application-dropdown"
        onClick={() => {
          setRender(!render);
        }}
      >
        <p className="dropdown-title">{data.first_name}</p>
        <img src={Vector} className="vector" alt="" />
      </div>
      {render && (
        <div className="application-container">
          <div className="personal-information-container">
            <h3 className="formheader">Personal Information</h3>
            <ul className="Ulist">
              <li key="1">First Name: {data.first_name}</li>
              <li key="2">Last Name: {data.last_name}</li>
              <li key="3">Email: {data.email}</li>
              <li key="4">Phone: {data.phone}</li>
            </ul>
          </div>
          <div className="skillset">
            <h3 className="formheader">Skillset</h3>
            <ul className="Ulist">
              {data.skills.map((skill) => {
                return (
                  <li>
                    <div className="skills-div">
                      <div className="skills-title">
                        {props.skillsArray.map((skill2) => {
                          if (skill.id === skill2.id) {
                            return `${skill2.title}\u00A0\u00A0\u00A0\u00A0  `;
                          }
                        })}
                      </div>
                      <div className="skills-description">
                        years of experience: {skill.experience}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* /////////////////////// covid ////////////////////// */}
          <div className="covid-situation">
            <h3 className="formheader">Covid Situation</h3>
            <div id="radio1-div">
              <p>How would you prefer to work?</p>
              <input
                type="radio"
                id="radio1-1"
                name="work-preference"
                value="From Sairme Office"
                checked={data.work_preference === "from_sairme_office"}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio1-1">
                From Sairme Office
              </label>
              <br />
              <input
                type="radio"
                id="radio1-2"
                name="work-preference"
                value="From Home"
                checked={data.work_preference === "from_home"}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio1-2">
                From Home
              </label>
              <br />
              <input
                type="radio"
                id="radio1-3"
                name="work-preference"
                value="Hybrid"
                checked={data.work_preference === "hybrid"}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio1-3">
                Hybrid
              </label>
              <br />
            </div>
            <div id="radio2-div">
              <p>Did you contract covid-19? :( </p>
              <input
                type="radio"
                name="contract-covid"
                value={true}
                checked={true}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio2-1">
                Yes
              </label>
              <br />
              <input
                type="radio"
                name="contract-covid"
                value={false}
                checked={data.had_covid === false}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio2-2">
                No
              </label>
              <br />
            </div>
            <div id="date-when-div">
              <p>When?</p>
              <input
                className="covidstuff-date-input"
                id="date-when-input"
                type="date"
                placeholder="      Date"
                readOnly
                value={data.had_covid_at}
              />
            </div>
            <div id="radio2-div">
              <p>Have you been vaccinated?</p>
              <input
                type="radio"
                id="radio3-1"
                name="vaccinated"
                value={true}
                checked={data.vaccinated === true}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio3-1">
                Yes
              </label>
              <br />
              <input
                type="radio"
                id="radio3-2"
                name="vaccinated"
                value={false}
                checked={data.vaccinated === false}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio3-2">
                No
              </label>
              <br />
            </div>
            <div id="last-vaccinated-div">
              <p>When did you get your last covid vaccine?</p>
              <input
                className="covidstuff-date-input"
                id="last-vaccinated-input"
                type="date"
                placeholder="      Date"
                readOnly
                value={data.vaccinated_at}
              />
            </div>
          </div>

          {/* /////////////////// insights ///////////////// */}

          <div className="insights">
            <h3 className="formheader">Insights</h3>
            <div id="radio1-redinsights-div">
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              <input
                type="radio"
                id="radio1-1-redinsights"
                name="Devtalks"
                value={true}
                checked={data.will_organize_devtalk === true}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio1-1-redinsights">
                Yes
              </label>
              <br />
              <input
                type="radio"
                id="radio1-2-redinsights"
                name="Devtalks"
                value={false}
                checked={data.will_organize_devtalk === false}
                readOnly
              />
              <label className="radiolabels" htmlFor="radio1-2-redinsights">
                No
              </label>
              <br />
            </div>
            <div id="text-input-redinsights">
              <p>What would you speak about in Devtalks?</p>
              <input
                type="text"
                id="devtalk-text-input"
                placeholder="     I would..."
                value={data.devtalk_topic}
                readOnly
              />
              <p>Tell us something special</p>
              <input
                type="text"
                id="special-text-input"
                placeholder="     I..."
                value={data.something_special}
                readOnly
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
