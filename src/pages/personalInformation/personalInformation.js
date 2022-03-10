import React, { Fragment } from "react";
import "./PersonalInformation.css";
import Error from "../../components/error";

const PersonalInformation = (props) => {
  return (
    <Fragment>
      <div id="WB">
        <h1 id="H1white">Hey, Rocketeer, what are your coordinates?</h1>
      </div>
      <div id="midconW">
        <input
          type="text"
          className="inputs"
          id="name"
          placeholder="       First Name"
          onChange={(e) => props.handleFirstName(e.target.value)}
          onBlur={(e) => {
            if (e.target.value.length < 3) {
              props.handlePersonalInfoErrors(
                "firstName",
                "First name is required and must be at least 2 characters long"
              );
            } else {
              props.handlePersonalInfoErrors("firstName", "");
            }
          }}
          value={props.firstName}
        />
        {props.errors.firstName !== "" && (
          <Error message={props.errors.firstName} />
        )}
        <input
          type="text"
          className="inputs"
          id="lastname"
          placeholder="       Last Name"
          onChange={(e) => props.handleLastName(e.target.value)}
          onBlur={(e) => {
            if (e.target.value.length < 3) {
              props.handlePersonalInfoErrors(
                "lastName",
                "Last name is required and must be at least 2 characters long"
              );
            } else {
              props.handlePersonalInfoErrors("lastName", "");
            }
          }}
          value={props.lastName}
        />
        {props.errors.lastName !== "" && (
          <Error message={props.errors.lastName} />
        )}
        <input
          type="email"
          className="inputs"
          id="mail"
          placeholder="       Email"
          onChange={(e) => props.handleEmail(e.target.value)}
          onBlur={(e) => {
            if (
              !e.target.value
                .toLowerCase()
                .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            ) {
              props.handlePersonalInfoErrors(
                "email",
                "A valid email address is required"
              );
            } else {
              props.handlePersonalInfoErrors("email", "");
            }
          }}
          value={props.email}
        />
        {props.errors.email !== "" && (
          <Error message={props.errors.email} />
        )}
        <input
          type="tel"
          className="inputs"
          id="phonenum"
          placeholder="       +955 5"
          onChange={(e) => props.handlePhone(e.target.value)}
          onBlur={(e) => {
            if (!e.target.value.match(/\d\d\d\d\d\d\d\d\d/)) {
              props.handlePersonalInfoErrors(
                "phone",
                "Phone format is invalid"
              );
            } else {
              props.handlePersonalInfoErrors("phone", "");
            }
          }}
          value={props.phone}
        />
        {props.errors.phone !== "" && (
          <Error message={props.errors.phone} />
        )}
      </div>
    </Fragment>
  );
};

export default PersonalInformation;
