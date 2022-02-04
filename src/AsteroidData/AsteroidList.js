import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./loadingScreen.js";
import AsteroidLists from "./AsteroidLists.js";
import "./styles/AsteroidList.css";

const AsteroidList = () => {
  //setting initial state and updating the state when date input changes
  const [date, updateDate] = useState({
    startDate: "1997-11-25",
    endDate: "1997-12-01"
  });
  //using the date variables from the state
  const [isLoading, updateLoadingStatus] = useState(true);
  const [error, errorUpdate] = useState(null);
  const [data, updateData] = useState(null);

  let startDate = date.startDate ? date.startDate : "1997-11-25";
  let endDate = date.endDate ? date.endDate : "";
  let url =
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
    startDate +
    "&end_date=" +
    endDate +
    "&api_key=sir3NyYGNYC1j7tn2vyeTAKBzuAoEhCbYyF1Ysap";

  useEffect(() => {
    //passing the url to the axios with a get method
    axios
      .get(url)
      .then((res) => {
        updateLoadingStatus(false);
        updateData(res.data);
      })
      .catch((err) => {
        errorUpdate(err);
        console.log(err);
      });
  }, [url, date]);
  //reload function to re load page
  const refreshPage = () => {
    window.location.reload(false);
  };

  const updatingDate = (date) => {
    updateDate(date);
  };
  return (
    <div>
      {!error && isLoading ? (
        <LoadingScreen />
      ) : !error && !isLoading ? (
        data ? (
          <AsteroidLists
            data={data}
            initialDate={date}
            updateDate={updatingDate}
            loading={updateLoadingStatus}
          />
        ) : (
          "loading..."
        )
      ) : (
        // <AsteroidLists data={data} updateDate={updatingDate} />
        <div className="Errortab">
          Error Loading Data...
          <span
            onClick={refreshPage}
            style={{ cursor: "Pointer", color: "blue" }}
          >
            Reload
          </span>
        </div>
      )}
    </div>
  );
};

export default AsteroidList;
