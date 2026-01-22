import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌱 EcoTrack</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
