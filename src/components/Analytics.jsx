import React from "react";

const Analytics = () => {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Analytics Overview</h3>
      <p style={{ marginTop: "10px" }}>Total Bookings: 10</p>
      <p>Total Revenue: $12,500</p>
      <p>Pending Payments: 3</p>
    </div>
  );
};

export default Analytics;
