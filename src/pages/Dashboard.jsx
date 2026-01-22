import { Link } from "react-router-dom";

export default function Dashboard() {
  const latestEmission = {
    total: 2.45,
    electricity: 1.2,
    transport: 0.9,
    food: 0.35,
    date: "18 Jan 2026",
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>EcoTrack Dashboard</h1>
        <button className="logout-btn">Logout</button>
      </div>

      {/* Welcome */}
      <div className="dashboard-welcome">
        <h2>Welcome back 🌱</h2>
        <p>
          Track, analyze, and reduce your carbon footprint effectively.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Carbon Footprint</h3>
          <p className="big-number">{latestEmission.total} tCO₂</p>
          <span>Last updated: {latestEmission.date}</span>
        </div>

        <div className="dashboard-card">
          <h3>Electricity</h3>
          <p className="big-number blue">
            {latestEmission.electricity} tCO₂
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Transport</h3>
          <p className="big-number orange">
            {latestEmission.transport} tCO₂
          </p>
        </div>
      </div>

      {/* Action */}
      <div className="dashboard-action">
        <div>
          <h3>Add New Emission Data</h3>
          <p>
            Enter your latest electricity, transport, and lifestyle
            details to calculate your updated carbon footprint.
          </p>
        </div>

        <Link to="/calculator" className="primary-btn">
          Calculate Now →
        </Link>
      </div>

      {/* Tip */}
      <div className="dashboard-tip">
        <h4>🌍 Sustainability Tip</h4>
        <p>
          Switching to LED bulbs and reducing vehicle usage can
          significantly lower your carbon footprint.
        </p>
      </div>
    </div>
  );
}

