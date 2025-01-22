import React, { useState } from "react";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Used only for Sign-Up
  });

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Sign-Up Data:", formData);
    } else {
      console.log("Sign-In Data:", formData);
    }

    alert(`${isSignUp ? "Sign-Up" : "Sign-In"} successful!`);
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        {isSignUp && (
          <div style={{ marginBottom: "10px" }}>
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </div>
        )}
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <button
        onClick={toggleForm}
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
      </button>
    </div>
  );
}

export default App;

