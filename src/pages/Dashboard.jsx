import React from "react";
import Analytics from "../components/Analytics";

const Dashboard = () => {
  return (
    <div style={dashboardContainer}>
      <h2 style={headerStyle}>Dashboard Overview</h2>
      <div style={analyticsContainer}>
        <Analytics />
      </div>
    </div>
  );
};

const dashboardContainer = {
  padding: "20px",
  background: "#f8f9fa",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
  fontSize: "26px",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
  marginBottom: "20px",
};

const analyticsContainer = {
  padding: "15px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
};

export default Dashboard;
