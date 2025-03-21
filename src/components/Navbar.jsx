import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Travel Operator Dashboard</div>
    </nav>
  );
};

const navbarStyle = {
  background: "linear-gradient(90deg,rgb(5, 131, 136),rgb(0, 173, 179))",
  color: "white",
  padding: "15px 20px",
  fontSize: "22px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

export default Navbar;
