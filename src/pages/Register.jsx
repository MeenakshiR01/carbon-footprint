import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h2>Create Account 🌍</h2>
          <p className="auth-subtitle">
            Tell us a bit about yourself to personalize your eco journey
          </p>

          <form className="auth-form">
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <select required>
              <option value="">Lifestyle Type</option>
              <option>Student</option>
              <option>Working Professional</option>
              <option>Homemaker</option>
            </select>

            <select required>
              <option value="">Primary Transport</option>
              <option>Public Transport</option>
              <option>Two Wheeler</option>
              <option>Car</option>
              <option>Walking / Cycling</option>
            </select>

            <select required>
              <option value="">Food Preference</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Mixed</option>
            </select>

            <button type="submit" className="primary-btn full-btn">
              Register
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}

