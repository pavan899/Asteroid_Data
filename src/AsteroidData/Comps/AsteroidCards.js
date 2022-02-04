import React, { useState } from "react";
import "./styles/AsteroidCards.css";

const AsteroidCards = (props) => {
  const [units, updateUnits] = useState("kilometers");
  const [velocityUnits, updateVelocityUnits] = useState(
    "kilometers_per_second"
  );
  const [missDistanceUnits, updatemissDistanceUnits] = useState("kilometers");
  const updateVelocity = (e) => {
    updateVelocityUnits(e.currentTarget.value);
  };
  const updatemissDistance = (e) => {
    updatemissDistanceUnits(e.currentTarget.value);
  };
  const unitsChanged = (e) => {
    updateUnits(e.currentTarget.value);
  };
  return (
    <div className="asteroidCards">
      <h1 className="title">{props.data.name}</h1>
      <div className="cards">
        <div className="flexBoxes">
          <div>{props.data.absolute_magnitude_h}</div>
          <div>Absolute Magnitude</div>
        </div>
        <div className="flexBoxes">
          {Object.keys(props.data["estimated_diameter"][units]).map(
            (arrayElement, index) => (
              <div key={index}>
                <b>
                  {arrayElement === "estimated_diameter_min"
                    ? "Min: "
                    : "Max: "}
                </b>
                {props.data["estimated_diameter"][units][arrayElement]}{" "}
              </div>
            )
          )}
          <div style={{ position: "relative" }}>
            Estimated Diameter in
            <select onChange={unitsChanged} className="unitsContainer">
              <option value="kilometers">Kms</option>
              <option value="meters">Mts</option>
              <option value="miles">Miles</option>
              <option value="feet">Ft</option>
            </select>
          </div>
        </div>
        <div
          className="flexBoxes"
          style={
            props.data.is_potentially_hazardous_asteroid
              ? { backgroundColor: "#f44336", color: "white" }
              : { backgroundColor: "#8bc34a", color: "white" }
          }
        >
          {props.data.is_potentially_hazardous_asteroid ? (
            <span>Hazardous</span>
          ) : (
            <span>Non-Hazardous</span>
          )}
        </div>
        <div
          className="flexBoxes"
          style={
            props.is_sentry_object
              ? { backgroundColor: "#cf522a", color: "white" }
              : { backgroundColor: "#009688", color: "white" }
          }
        >
          {props.data.is_sentry_object ? (
            <span>Sentry Object</span>
          ) : (
            <span>Non-sentry Object</span>
          )}
          {props.data.is_sentry_object}
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Close approach date</th>
              <th>
                Relative velocity{" "}
                <select className="tableUnits" onChange={updateVelocity}>
                  <option value="kilometers_per_second">kmps</option>
                  <option value="kilometers_per_hour">kmph</option>
                  <option value="miles_per_hour">mph</option>
                </select>
              </th>
              <th>
                Miss distance
                <select className="tableUnits" onChange={updatemissDistance}>
                  <option value="kilometers">kms</option>
                  <option value="miles">miles</option>
                  <option value="astronomical">astronomical</option>
                  <option value="lunar">lunar</option>
                </select>
              </th>
              <th>Orbiting body</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.data["close_approach_data"]).map((items, i) => (
              <tr key={i}>
                <td>
                  {
                    props.data["close_approach_data"][items][
                      "close_approach_date"
                    ]
                  }
                </td>
                <td>
                  {
                    props.data["close_approach_data"][items][
                      "relative_velocity"
                    ][velocityUnits]
                  }
                </td>
                <td>
                  {
                    props.data["close_approach_data"][items]["miss_distance"][
                      missDistanceUnits
                    ]
                  }
                </td>
                <td>
                  {props.data["close_approach_data"][items]["orbiting_body"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AsteroidCards;
