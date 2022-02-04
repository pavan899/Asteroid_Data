import React from "react";
import "./styles/loadingScreen.css";
import { RiLoader2Line } from "react-icons/ri";

const loadingScreen = (props) => {
  return (
    <div className="loadingScreen">
      Loading contents, please wait!
      <div>
        <RiLoader2Line />
      </div>
    </div>
  );
};

export default loadingScreen;
