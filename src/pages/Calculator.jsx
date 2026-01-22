import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    electricity: "",
    transport: "",
    food: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple emission calculation (demo logic)
    const electricityEmission = formData.electricity * 0.00085;
    const transportEmission = formData.transport * 0.00021;
    const foodEmission = formData.food * 0.00125;

    const totalEmission =
      electricityEmission + transportEmission + foodEmission;

    // Store temporarily (later backend)
    const emissionData = {
      electricity: electricityEmission.toFixed(2),
      transport: transportEmission.toFixed(2),
      food: foodEmission.toFixed(2),
      total: totalEmission.toFixed(2),
      date: new Date().toDateString(),
    };

    localStorage.setItem("latestEmission", JSON.stringify(emissionData));

    navigate("/dashboard");
  };

  return (
    <div className="calculator-container">
      <h1>Carbon Footprint Calculator</h1>
      <p className="subtitle">
        Enter your daily usage details to estimate your carbon emissions.
      </p>

      <form className="calculator-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Electricity Usage (kWh)</label>
          <input
            type="number"
            name="electricity"
            value={formData.electricity}
            onChange={handleChange}
            required
            placeholder="e.g. 120"
          />
        </div>

        <div className="form-group">
          <label>Transport Distance (km)</label>
          <input
            type="number"
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            required
            placeholder="e.g. 35"
          />
        </div>

        <div className="form-group">
          <label>Food / Lifestyle Spend (₹)</label>
          <input
            type="number"
            name="food"
            value={formData.food}
            onChange={handleChange}
            required
            placeholder="e.g. 400"
          />
        </div>

        <button type="submit" className="primary-btn full-width">
          Calculate & Save
        </button>
      </form>
    </div>
  );
}

