import React, { useState } from "react";
import "./styles/DatePicker.css";

const DatePicker = (props) => {
  const [date, updateDate] = useState({
    startDate: props.initialDate.startDate,
    endDate: props.initialDate.endDate
  });
  const dateChanged = (e) => {
    const newDate = { ...date };
    newDate[e.target.name] = e.target.value;
    updateDate(newDate);
  };
  const submitForm = (e) => {
    e.preventDefault();
    props.dateValues(date);
    props.loading(true);
  };
  return (
    <>
      <form className="dateForm">
        <div className="startDateBox">
          <label>Start date: </label>
          <input
            className="startDate"
            name="startDate"
            type="date"
            onChange={dateChanged}
            value={date.startDate}
          />
        </div>
        <div className="endDateBox">
          <label>End date: </label>
          <input
            name="endDate"
            type="date"
            onChange={dateChanged}
            className="endDate"
            value={date.endDate}
            min={date.startDate}
          />
        </div>

        <div className="endDateBox">
          <input
            type="submit"
            value="Load"
            onClick={submitForm}
            className="SubmitBtn"
          />
        </div>
      </form>
    </>
  );
};

export default DatePicker;
