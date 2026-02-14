import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="login-page">
      <Link to="/" className="back-home">
        ← Back to Home
      </Link>

      <div className="login-wrapper">
        <div className="login-card">
          <h2>Member Login</h2>
          <p className="head">
            Access your reservations and preferences here
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="form-error">{error}</p>}

            <button type="submit">Login</button>
          </form>

          <p className="create">
            New here? <Link to="/create-account">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
