import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const reservation = useSelector((state) => state.reservation);

  return (
    <section className="dashboard-page">
      <div className="dashboard-container">

        <div className="dashboard-header">
          <h2>Welcome back</h2>
          <p>We look forward to hosting you</p>
        </div>
        <div className="dashboard-card">
          <h3>Upcoming Reservation</h3>

          {reservation?.status ? (
            <div className="reservation-details">
              <p><span>Date</span>{reservation.date}</p>
              <p><span>Time</span>{reservation.timeSlot}</p>
              <p><span>Guests</span>{reservation.guests}</p>
              <p><span>Status</span>{reservation.status}</p>

              <Link to="/reservation-confirmed" className="dashboard-link">
                View Details
              </Link>
            </div>
          ) : (
            <p className="empty-text">
              You have no upcoming reservations.
            </p>
          )}
        </div>
        <div className="dashboard-card">
          <h3>Digital Menu</h3>
          <p className="card-sub">
            Explore our curated menu at your own pace
          </p>

          <Link to="/DigitalMenu" className="dashboard-link">
            View Digital Menu
          </Link>
        </div>
        <div className="dashboard-card">
          <h3>Reserve Again</h3>
          <p className="card-sub">
            Book your preferred table effortlessly
          </p>

          <Link to="/reservation" className="dashboard-link">
            Book a Table
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
