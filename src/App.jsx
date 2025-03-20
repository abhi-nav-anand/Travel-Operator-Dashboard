import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import AssignTours from "./pages/AssignTours";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Bookings":
        return <Bookings />;
      case "Customers":
        return <Customers />;
      case "Payments":
        return <Payments />;
      case "AssignTours":
        return <AssignTours />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#f5f5f5" }}>
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar setActivePage={setActivePage} />
        <main style={{ flex: 1, padding: "20px" }}>{renderPage()}</main>
      </div>
    </div>
  );
};

export default App;
