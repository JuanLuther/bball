import { useState, useEffect } from "react";
import "./App.css";

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
            <ul className="navbar-nav mx-auto">
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
        <div className="row row-cols-3 g-5">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Court 1</h3>
                <p className="card-text">Location: Avalo</p>
                <p className="card-text">Available: 10:00 AM - 6:00 PM</p>
                <a href="#booking" className="book-button btn btn-primary">
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
                <a href="#booking" className="book-button btn btn-primary">
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
                <a href="#booking" className="book-button btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section  */}
      <section id="booking" className="booking p-5">
        <h2 className="fs-2 text-center">Book a Court</h2>
        <form
          action="#"
          method="post"
          className="card-body mx-auto row row-cols-1 g-4 w-50"
        >
          <div className="col">
            <label className="col-form-label" key="court" htmlFor="court">
              Select Court:
            </label>
            <select id="court" name="court" className="form-select">
              <option value="court1">Court 1 - Avalo</option>
              <option value="court2">Court 2 - Bulilit</option>
              <option value="court3">Court 3 - Tebis & Sean</option>
            </select>
          </div>
          <div className="col">
            <label className="col-form-label" key="date" htmlFor="date">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <label className="col-form-label" key="time" htmlFor="time">
              Select Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control"
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="submit-btn btn btn-primary">
              Book Now
            </button>
          </div>
        </form>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="contact p-5 text-center bg-body-tertiary"
      >
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <p>Email: support@basketballbooking.com</p>
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