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
                <div className="col-6">
                  <label className="col-form-label" key="time" htmlFor="time">
                    <span className="text-danger">* </span> Start Time:
                  </label>
                  <select
                    name="time"
                    id="time"
                    className="form-select"
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
                <div className="col-6">
                  <label className="col-form-label" key="hours" htmlFor="hours">
                    <span className="text-danger">* </span> Hours:
                  </label>
                  <select
                    name="hours"
                    id="hours"
                    className="form-select"
                    required
                  >
                    <option value="">---</option>
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                    <option value="5">5 Hours</option>
                  </select>
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
