import { useState, useEffect } from "react";
import "./App.css";
import BookingModal from "./views/BookingModal";

function App() {
  // const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);

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
                <a className="nav-link" href="#booking">
                  Book a Court
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

      {/* Available Courts Section  */}
      <section id="courts" className="courts p-5  text-center bg-body-tertiary">
        <div className="mb-4">
          <h2 className="fs-2">Available Courts</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Court 1</h3>
                <p className="card-text">Location: Avalo</p>
                <p className="card-text">Available: 10:00 AM - 6:00 PM</p>
                <a
                  href="#booking"
                  className="book-button btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-booking"
                  data-court="Avalo"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3>Court 2</h3>
                <p>Location: Bulilit</p>
                <p>Available: 9:00 AM - 5:00 PM</p>
                <a
                  href="#booking"
                  className="book-button btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-booking"
                  data-court="Bulilit"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3>Court 3</h3>
                <p>Location: Tebis & Sean</p>
                <p>Available: 12:00 PM - 8:00 PM</p>
                <a
                  href="#booking"
                  className="book-button btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-booking"
                  data-court="Tebis & Sean"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
