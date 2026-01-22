import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h2>Welcome Back 🌱</h2>
          <p className="auth-subtitle">
            Login to track your carbon footprint and eco progress
          </p>

          <form className="auth-form">
            <input
              type="email"
              placeholder="Email address"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit" className="primary-btn full-btn">
              Login
            </button>
          </form>

          <p className="auth-footer">
            New user? <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </>
  );
}

