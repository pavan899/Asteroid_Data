import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "./styles/Asteroid.css";
import AsteroidCards from "./AsteroidCards";

const Asteroid = (props) => {
  const [AsteroidData, updateAsteroidData] = useState(null);
  //api URl passed with the req id
  let url =
    "https://api.nasa.gov/neo/rest/v1/neo/" +
    props.asteroidId +
    "?api_key=sir3NyYGNYC1j7tn2vyeTAKBzuAoEhCbYyF1Ysap";
  //calling the axios when ever the url is changed
  useEffect(() => {
    axios
      .get(url)
      .then((req) => {
        updateAsteroidData(req.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  const back = () => {
    props.back(true);
  };
  return (
    <div className="AsteroidContainer">
      <div className="backBtn" onClick={back}>
        <IoArrowBackCircleOutline />
      </div>
      <br />
      {AsteroidData ? (
        <AsteroidCards data={AsteroidData} />
      ) : (
        "Loading, Please Wait.."
      )}
    </div>
  );
};

export default Asteroid;
