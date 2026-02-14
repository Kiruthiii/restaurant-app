import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/reservationConfirmed.css";

const ReservationConfirmed = () => {
  const reservation = useSelector((state) => state.reservation);

  return (
    <section className="form-page">
      <div className="form-card">
        <h2>Reservation Confirmed</h2>

        <p className="confirm-sub">
          Your table has been successfully reserved.
        </p>

        <div className="confirm-details">
          <p><span>Date:</span> {reservation.date}</p>
          <p><span>Time:</span> {reservation.timeSlot}</p>
          <p><span>Table:</span> {reservation.tableType}</p>
          <p><span>Guests:</span> {reservation.guests}</p>
          <p><span>Status:</span> {reservation.status}</p>
        </div>

        <Link to="/" className="confirm-link">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ReservationConfirmed;
