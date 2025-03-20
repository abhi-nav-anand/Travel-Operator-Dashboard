import React from "react";

const Sidebar = ({ setActivePage }) => {
  return (
    <div style={sidebarStyle}>
      <h2 style={logoStyle}>Travel Admin</h2>
      {["Dashboard", "Bookings", "Customers", "Payments", "AssignTours"].map((page) => (
        <button
          key={page}
          style={buttonStyle}
          onClick={() => setActivePage(page)}
          onMouseOver={(e) => (e.target.style.background = "linear-gradient(90deg,rgb(5, 131, 136),rgb(0, 173, 179))")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

const sidebarStyle = {
  width: "220px",
  background: "#222",
  color: "white",
  padding: "20px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "20px",
  letterSpacing: "1px",
  color: "#fff",
};

const buttonStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  textAlign: "center",
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
  borderRadius: "5px",
  marginBottom: "10px",
};

export default Sidebar;
