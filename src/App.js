import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./firebase";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Footer from "./components/Footer/Footer";
import DigitalMenu  from "./pages/DigitalMenu";
import ReservationConfirmed from "./pages/ReservationConfirmed";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation-confirmed" element={<ReservationConfirmed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/DigitalMenu" element={<DigitalMenu />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;