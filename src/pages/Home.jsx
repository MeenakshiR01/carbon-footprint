import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>
            Personalized Carbon Footprint <span>Estimator</span>
          </h1>
          <p>
            Track your daily activities, understand your environmental impact,
            and receive personalized eco-friendly suggestions to reduce your
            carbon footprint.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="primary-btn">
              Get Started
            </a>
            <a href="/login" className="primary-btn">
              Calculate Now
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>📊 Daily Carbon Tracking</h3>
            <p>
              Calculate emissions from electricity, transportation, food habits,
              and daily activities.
            </p>
          </div>

          <div className="feature-card">
            <h3>👤 Personalized Insights</h3>
            <p>
              The system adapts to your lifestyle, location, and habits to give
              customized results.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌱 Eco-Friendly Advice</h3>
            <p>
              Get practical suggestions to reduce emissions and improve your
              eco-score.
            </p>
          </div>
        </section>

        {/* Footer Line */}
        <footer className="footer">
          <p>
            MCA Final Semester Project | Carbon Footprint Estimator & Eco Advisor
          </p>
        </footer>
      </div>
    </>
  );
}

