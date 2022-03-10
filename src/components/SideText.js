import { Fragment } from "react";
import "./SideText.css";

const SideText = (props) => {
  return (
    <Fragment>
      <h1 className="sidebar-title">{props.title}</h1>
      <div className="sidebar-text-container">
        <div className="sidebar-text-div">
          <p>{props.text}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SideText;
