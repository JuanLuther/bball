/* eslint-disable react/prop-types */
// import { useState } from "react";

const Filter = ({ startTime, setStartTime, endTime, setEndTime }) => {
  return (
    <div className="d-flex flex-column flex-md-row gap-3">
      {/* Start Time */}
      <div className="d-none">
        <p>Start Time: {startTime}</p>
        <p>End Time: {endTime}</p>
      </div>
      <div className="">
        <label htmlFor="start_time" className="form-label">
          Start Time:
        </label>
        <select
          name="time"
          id="start_time"
          className="form-select"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        >
          <option value="">---</option>
          <option value="8">08:00 AM</option>
          <option value="9">09:00 AM</option>
          <option value="10">10:00 AM</option>
          <option value="11">11:00 AM</option>
          <option value="12">12:00 PM</option>
          <option value="13">01:00 PM</option>
          <option value="14">02:00 PM</option>
          <option value="15">03:00 PM</option>
          <option value="16">04:00 PM</option>
          <option value="17">05:00 PM</option>
          <option value="18">06:00 PM</option>
          <option value="19">07:00 PM</option>
          <option value="20">08:00 PM</option>
          <option value="21">09:00 PM</option>
          <option value="22">10:00 PM</option>
        </select>
      </div>
      {/* End Time */}
      <div className="">
        <label htmlFor="end_time" className="form-label">
          End Time:
        </label>
        <select
          name="time"
          id="end_time"
          className="form-select"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        >
          <option value="">---</option>
          <option value="8">08:00 AM</option>
          <option value="9">09:00 AM</option>
          <option value="10">10:00 AM</option>
          <option value="11">11:00 AM</option>
          <option value="12">12:00 PM</option>
          <option value="13">01:00 PM</option>
          <option value="14">02:00 PM</option>
          <option value="15">03:00 PM</option>
          <option value="16">04:00 PM</option>
          <option value="17">05:00 PM</option>
          <option value="18">06:00 PM</option>
          <option value="19">07:00 PM</option>
          <option value="20">08:00 PM</option>
          <option value="21">09:00 PM</option>
          <option value="22">10:00 PM</option>
        </select>
      </div>
      {/* Date */}
      <div className="">
        <label htmlFor="date" className="form-label">
          Date:
        </label>
        <input id="date" className="time form-control mb-2" type="date" />
      </div>
    </div>
  );
};

export default Filter;
