import React from "react";
import Card from "./Card.js";
import "./styles/AsteroidData.css";

const AsteroidData = (props) => {
  const data = props.data;
  const cardClicked = (e) => {
    let clicked = e.currentTarget.getAttribute("data-id");
    //console.log(clicked);
    props.cardClick(clicked);
  };
  return (
    <>
      <div>
        {Object.keys(data.near_earth_objects).map((items, index) => (
          <div key={index} className="ItemsContainer">
            <div className="dateLabel">{items}</div>
            <div className="cardContainer">
              {Object.keys(data["near_earth_objects"][items]).map(
                (arrayItem, ind) => (
                  <div
                    key={ind}
                    className="card"
                    data-id={data["near_earth_objects"][items][arrayItem]["id"]}
                    onClick={cardClicked}
                  >
                    <Card
                      date={items}
                      id={data["near_earth_objects"][items][arrayItem]["id"]}
                      name={
                        data["near_earth_objects"][items][arrayItem]["name"]
                      }
                      absolute_magnitude={
                        data["near_earth_objects"][items][arrayItem][
                          "absolute_magnitude_h"
                        ]
                      }
                      maxMagnitude={Object.keys(
                        data["near_earth_objects"][items][arrayItem][
                          "absolute_magnitude_h"
                        ]
                      ).map((o) => {
                        return Math.max(o);
                      })}
                      estimated_diameter={
                        data["near_earth_objects"][items][arrayItem][
                          "estimated_diameter"
                        ]
                      }
                      hazardous={
                        data["near_earth_objects"][items][arrayItem][
                          "is_potentially_hazardous_asteroid"
                        ]
                      }
                    />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AsteroidData;
