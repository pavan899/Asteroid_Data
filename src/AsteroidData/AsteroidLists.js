import React, { useState, useRef } from "react";
import "./styles/AsteroidLists.css";
import DatePicker from "./Comps/DatePicker.js";
import AsteroidData from "./Comps/AsteroidData.js";
import Asteroid from "./Comps/Asteroid.js";

const AsteroidLists = (props) => {
  const [clickedCard, updateclickedCard] = useState(null);
  const header = useRef(null);
  const dateValues = (date) => {
    props.updateDate(date);
  };
  const cardClicked = (cardId) => {
    updateclickedCard(cardId);
  };
  const back = (clicked) => {
    updateclickedCard(null);
  };
  return (
    <div className="mainContainer">
      <div className="leftContainer" ref={header}>
        <div className="logoContainer">Asteroid Data</div>
        <DatePicker
          dateValues={dateValues}
          loading={props.loading}
          initialDate={props.initialDate}
        />
      </div>
      <div className="rightContainer">
        {clickedCard ? (
          <Asteroid asteroidId={clickedCard} back={back} />
        ) : (
          <AsteroidData cardClick={cardClicked} data={props.data} />
        )}
      </div>
    </div>
  );
};

export default AsteroidLists;
