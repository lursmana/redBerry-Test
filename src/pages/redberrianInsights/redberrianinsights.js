import React, { Fragment } from "react";
import "./redberrianInsights.css";
import Error from "../../components/error";

const RedberrianInsights = (props) => {
  return (
    <Fragment>
      <h1 id="h1-redinsights-white">What about you?</h1>
      <div id="midcon-white-redinsights">
        <div id="radio1-redinsights-div">
          <p>Would you attend Devtalks and maybe also organize your own?</p>
          <input
            type="radio"
            id="radio1-1-redinsights"
            name="Devtalks"
            value={true}
            checked={props.WillOrganizeDevtalks === true}
            onChange={(e) => {
              props.handleWillOrganizeDevtalks(e.target.value);
              props.handleRedberrianErrors("devTalkTopic", " ");
            }}
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
            checked={props.WillOrganizeDevtalks === false}
            onChange={(e) => {
              props.handleWillOrganizeDevtalks(e.target.value);
              props.handleRedberrianErrors("devTalkTopic", "");
            }}
          />
          <label className="radiolabels" htmlFor="radio1-2-redinsights">
            No
          </label>
          <br />
        </div>
        <div id="text-input-redinsights">
          {props.WillOrganizeDevtalks && (
            <Fragment>
              <p>What would you speak about in Devtalks?</p>
              <input
                type="text"
                id="devtalk-text-input"
                placeholder="     I would..."
                onChange={(e) => props.handleDevtalkTopic(e.target.value)}
                value={props.devtalkTopic}
                onBlur={() => {
                  if (props.devtalkTopic === "") {
                    props.handleRedberrianErrors(
                      "devTalkTopic",
                      "This is a required field"
                    );
                  } else {
                    props.handleRedberrianErrors("devTalkTopic", "");
                  }
                }}
              />
              {props.errors.devTalkTopic && (
                <Error message={props.errors.devTalkTopic} />
              )}{" "}
            </Fragment>
          )}
          <p>Tell us something special</p>
          <input
            type="text"
            id="special-text-input"
            placeholder="     I..."
            onChange={(e) => props.handleSomethingSpecial(e.target.value)}
            value={props.somethingSpecial}
            onBlur={() => {
              if (props.somethingSpecial === "") {
                props.handleRedberrianErrors(
                  "somethingSpecial",
                  "This field is required"
                );
              } else {
                props.handleRedberrianErrors("somethingSpecial", "");
              }
            }}
          />
          {props.errors.somethingSpecial && (
            <Error message={props.errors.somethingSpecial} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default RedberrianInsights;
