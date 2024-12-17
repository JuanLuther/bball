/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CourtCard from "./components/CourtCard.jsx";

const AvailableCourts = ({ startTime, endTime, date }) => {
  const [courts, setCourts] = useState([]);

  // Fetch court data from an API
  useEffect(() => {
    fetch("http://localhost:3000/api/courts") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setCourts(data))
      .catch((err) => console.error("Error fetching courts:", err));
  }, []);

  return (
    <section className="text-center">
      <div className="row row-cols-1 row-cols-md-4 g-5">
        {courts
          .filter(
            (court) => !(court.booked || []).includes(parseInt(startTime))
          )
          .map((court) => (
            <CourtCard
              key={court.court_id} // Ensure unique keys
              courtNumber={court.court_name}
              courtName={court.location}
              startTime={startTime}
              endTime={endTime}
              date={date}
            />
          ))}
      </div>
    </section>
  );
};

export default AvailableCourts;
