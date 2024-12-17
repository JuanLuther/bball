import { useState, useEffect } from "react";
import "./App.css";
import BookingModal from "./views/BookingModal";
import Filter from "./views/Filter";
import AvailableCourts from "./views/AvailableCourts";

function App() {
  // const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const checkScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* Header Section  */}
      <header className="">
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <ul className="navbar-nav mx-md-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courts">
                  Available Courts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section  */}
      <section id="home" className="text-center p-5">
        <h1 className="fs-1">
          Welcome to the ZC Basketball Court Booking System
        </h1>
        <p>Book your court easily and play your favorite sport.</p>
        <a href="#courts" className="btn btn-primary">
          Find Available Courts
        </a>
      </section>

      {/* Calendar */}

      <section id="courts" className="bg-body-tertiary p-5">
        <div className="mb-4">
          <h2 className="fs-2 text-center">Available Courts</h2>
        </div>
        <div className="d-flex flex-column gap-5 align-items-center">
          <div className="">
            <Filter
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          </div>
          <div className="col-12">
            <AvailableCourts
              startTime={startTime}
              endTime={endTime}
              date={"12-15-2024"}
            />
          </div>
        </div>
      </section>

      {/* Available Courts Section  */}

      {/* Booking */}
      <BookingModal />

      {/* Contact Section */}
      <section id="contact" className="contact p-5 text-center">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <p>Email: jerickdalemendoza@gmail.com</p>
      </section>

      {/* Footer  */}
      <footer className="pt-3 pb-1 text-center text-bg-primary">
        <p>&copy; 2024 Basketball Court Booking. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-warning position-fixed bottom-0 end-0 mb-3 me-3"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;
