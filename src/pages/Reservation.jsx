import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDate,
  setTimeSlot,
  setGuests,
  setTableType,
  confirmReservation,
} from "../store/reservationSlice";
import "../styles/reservation.css";

const Reservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmReservation());
    navigate("/reservation-confirmed");
  };

  return (
    <section className="form-page">
      <a href="/" className="back-home">← Back to Home</a>

      <div className="form-card">
        <h2>Book a Table</h2>
        <p className="form-sub">
          Reserve your dining experience with us
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />

          <input
            type="date"
            required
            onChange={(e) => dispatch(setDate(e.target.value))}
          />

          <input
            type="time"
            required
            onChange={(e) => dispatch(setTimeSlot(e.target.value))}
          />
          <select
            required
            onChange={(e) => dispatch(setTableType(e.target.value))}
          >
            <option value="">Select Table Type</option>
            <option value="Royal Booth">Royal Booth </option>
            <option value="Window Table">Window Table </option>
            <option value="Private Hall">Private Hall</option>
          </select>

          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
            required
            onChange={(e) =>
              dispatch(setGuests(Number(e.target.value)))
            }
          />

          <button type="submit">Confirm Reservation</button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
