/* eslint-disable react/prop-types */
// import React from "react";

const CourtCard = ({
  courtNumber,
  courtName,
  startTime = "",
  endTime = "",
  date = "",
}) => {
  return (
    <>
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body">
            <h5>{courtNumber}</h5>
            <h4 className="text-primary">{courtName}</h4>
            <p>
              Time: {startTime} - {endTime}
            </p>
            <p>Date: {date}</p>
            <a
              href="#booking"
              className="book-button btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modal-booking"
              data-court={courtName}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourtCard;
