import React, { Fragment, useState } from "react";
import "./covidStuff.css";
import Error from "../../components/error";

const CovidStuff = (props) => {
  return (
    <Fragment>
      <div>
        <h1 id="h1-covidstuff-white">Covid Stuff</h1>
      </div>
      <div id="midcon-white-covidstuff">
        <div id="radio1-div">
          <p>How would you prefer to work?</p>
          <input
            type="radio"
            id="radio1-1"
            name="work-preference"
            value="from_sairme_office"
            checked={props.workPreference === "from_sairme_office"}
            onChange={(e) => {
              props.handleWorkPreference(e.target.value);
              props.handleCovidErrors("workPreference", "");
            }}
          />
          <label className="radiolabels" htmlFor="radio1-1">
            From Sairme Office
          </label>
          <br />
          <input
            type="radio"
            id="radio1-2"
            name="work-preference"
            value="from_home"
            checked={props.workPreference === "from_home"}
            onChange={(e) => {
              props.handleWorkPreference(e.target.value);
              props.handleCovidErrors("workPreference", "");
            }}
          />
          <label className="radiolabels" htmlFor="radio1-2">
            From Home
          </label>
          <br />
          <input
            type="radio"
            id="radio1-3"
            name="work-preference"
            value="hybrid"
            checked={props.workPreference === "hybrid"}
            onChange={(e) => {
              props.handleWorkPreference(e.target.value);
              props.handleCovidErrors("workPreference", "");
            }}
          />
          <label className="radiolabels" htmlFor="radio1-3">
            Hybrid
          </label>
          <br />
        </div>
        {props.errors.workPreference !== "" && (
          <Error message={props.errors.workPreference} />
        )}
        <div id="radio2-div">
          <p>Did you contract covid-19? :( </p>
          <input
            type="radio"
            id="radio2-1"
            name="contract-covid"
            value={true}
            checked={props.hadCovid}
            onChange={(e) => {
              props.handleHadCovid(e.target.value);
              props.handleCovidErrors("hadCovidAt", " ");
            }}
          />
          <label className="radiolabels" htmlFor="radio2-1">
            Yes
          </label>
          <br />
          <input
            type="radio"
            id="radio2-2"
            name="contract-covid"
            value={false}
            checked={props.hadCovid === false}
            onChange={(e) => {
              props.handleHadCovid(e.target.value);
              props.handleCovidErrors("hadCovid", "");
            }}
          />
          <label className="radiolabels" htmlFor="radio2-2">
            No
          </label>
          <br />
        </div>
        <Error message={props.errors.hadCovid} />

        {props.hadCovid && (
          <div id="date-when-div">
            <p>When?</p>
            <input
              className="covidstuff-date-input"
              id="date-when-input"
              type="date"
              placeholder="      Date"
              onChange={(e) => props.handleHadCovidAt(e.target.value)}
              value={props.hadCovidAt}
              onBlur={() => {
                if (props.hadCovid === true && props.hadCovidAt === "") {
                  props.handleCovidErrors(
                    "hadCovidAt",
                    "This field is required"
                  );
                } else {
                  props.handleCovidErrors("hadCovidAt", "");
                }
              }}
            />
          </div>
        )}
        {props.hadCovid === true && props.errors.hadCovidAt !== "" && (
          <Error message={props.errors.hadCovidAt} />
        )}
        <div id="radio2-div">
          <p>Have you been vaccinated?</p>
          <input
            type="radio"
            id="radio3-1"
            name="vaccinated"
            value={true}
            checked={props.Vaccinated === true}
            onChange={(e) => {
              props.handleVaccinated(e.target.value);
              props.handleCovidErrors("isVaccinatedAt", " ");
            }}
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
            checked={props.Vaccinated === false}
            onChange={(e) => {
              props.handleVaccinated(e.target.value);
              props.handleCovidErrors("isVaccinatedAt", "");
            }}
          />
          <label className="radiolabels" htmlFor="radio3-2">
            No
          </label>
          <br />
        </div>
        {props.errors.isVaccinated !== "" && (
          <Error message={props.errors.isVaccinated} />
        )}

        {props.Vaccinated && (
          <div id="last-vaccinated-div">
            <p>When did you get your last covid vaccine?</p>
            <input
              className="covidstuff-date-input"
              id="last-vaccinated-input"
              type="date"
              placeholder="      Date"
              onChange={(e) => props.handleVaccinatedAt(e.target.value)}
              value={props.vaccinatedAt}
              onBlur={() => {
                if (props.Vaccinated && props.vaccinatedAt === "") {
                  props.handleCovidErrors(
                    "isVaccinatedAt",
                    "This field is required"
                  );
                } else {
                  props.handleCovidErrors("isVaccinatedAt", "");
                }
              }}
            />
          </div>
        )}
        {props.Vaccinated && props.errors.isVaccinatedAt !== "" && (
          <Error message={props.errors.isVaccinatedAt} />
        )}
      </div>
    </Fragment>
  );
};

export default CovidStuff;
