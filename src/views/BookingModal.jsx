import { useEffect, useState } from "react";

const BookingModal = () => {
  const [court, setCourt] = useState("");

  const handleModalShow = (e) => {
    const selectedCourt = e.relatedTarget.getAttribute("data-court");
    setCourt(selectedCourt);
  };

  useEffect(() => {
    // Add event listener for modal events after component mounts
    const modalElement = document.getElementById("modal-booking");

    if (modalElement) {
      modalElement.addEventListener("show.bs.modal", handleModalShow);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (modalElement) {
        modalElement.removeEventListener("show.bs.modal", handleModalShow);
      }
    };
  }, []);

  return (
    <>
      {/* Booking Section  */}
      <section id="booking">
        <div className="modal fade" id="modal-booking">
          <div className="modal-dialog">
            <form action="#" method="post" className="modal-content col-12">
              <div className="modal-header">
                <h2 className="modal-title  text-center">Book a Court</h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body row row-cols-1 g-3">
                <div className="col">
                  <label className="col-form-label" key="court" htmlFor="court">
                    <span className="text-danger">* </span>Select Court:
                  </label>
                  <select
                    id="court"
                    name="court"
                    className="form-select"
                    value={court}
                    onChange={(e) => setCourt(e.target.value)}
                  >
                    <option value="Avalo">Court 1 - Avalo</option>
                    <option value="Bulilit">Court 2 - Bulilit</option>
                    <option value="Tebis & Sean">Court 3 - Tebis & Sean</option>
                  </select>
                </div>
                <div className="col">
                  <label className="col-form-label" key="date" htmlFor="date">
                    <span className="text-danger">* </span> Select Date:
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
                    <span className="text-danger">* </span> Select Time:
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn btn btn-primary">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingModal;
