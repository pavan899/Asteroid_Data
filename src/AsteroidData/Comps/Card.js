import React, { useState } from "react";
import "./styles/Card.css";

const Card = (props) => {
  const [units, updateUnits] = useState("kilometers");
  const unitsClicked = (e) => {
    e.stopPropagation();
  };
  const unitsChanged = (e) => {
    updateUnits(e.target.value);
  };
  return (
    <div className="cardInner">
      <div>{props.name}</div>
      <div>
        Name: <span className="value">{props.name}</span>
      </div>
      <div>
        Closest Approach: <span className="value">{props.date}</span>
      </div>
      <div>
        Id: <span className="value">{props.id}</span>
      </div>
      <div>
        Absolute Magnitude:{" "}
        <span className="value">{props.absolute_magnitude}</span>
      </div>
      <div>
        Max Magnitude: <span className="value">{props.maxMagnitude}</span>
      </div>
      <div>
        Diameter:{" "}
        <span className="value">
          {props.estimated_diameter[units]["estimated_diameter_min"]}
          <select
            className="units"
            onClick={unitsClicked}
            onChange={unitsChanged}
          >
            <option value="kilometers">Kms</option>
            <option value="meters">Mts</option>
            <option value="miles">Miles</option>
            <option value="feet">ft</option>
          </select>
        </span>
      </div>
      <div>
        Hazardous:{" "}
        <span className="value">{props.hazardous ? "Yes" : "No"}</span>
      </div>
    </div>
  );
};

export default Card;
