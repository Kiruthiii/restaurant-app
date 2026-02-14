import { NavLink } from "react-router-dom";
import "../../components/Navbar/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-brand">
          Royal Feast
        </div>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>

          <NavLink
            to="/reservation"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Reservation
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Login
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
