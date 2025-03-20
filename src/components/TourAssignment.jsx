import React, { useState } from "react";
import { users, bookings } from "../data";

const TourAssignment = () => {
  const [assignedTour, setAssignedTour] = useState({ user: "", booking: "" });

  const handleAssign = () => {
    if (assignedTour.user && assignedTour.booking) {
      alert(`Tour assigned successfully!\n\nCustomer: ${assignedTour.user}\nBooking: ${assignedTour.booking}`);
    } else {
      alert("Please select both a customer and a booking before assigning.");
    }
  };

  return (
    <div>
      <select
        style={{ padding: "8px", marginRight: "10px" }}
        onChange={(e) => setAssignedTour({ ...assignedTour, user: e.target.value })}
      >
        <option>Select Customer</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      <select
        style={{ padding: "8px", marginRight: "10px" }}
        onChange={(e) => setAssignedTour({ ...assignedTour, booking: e.target.value })}
      >
        <option>Select Booking</option>
        {bookings.map((booking) => (
          <option key={booking.id} value={booking.destination}>
            {booking.destination}
          </option>
        ))}
      </select>

      <button
        style={{
          padding: "8px 12px",
          background: "linear-gradient(90deg,rgb(5, 131, 136),rgb(0, 173, 179))",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={handleAssign}
      >
        Assign
      </button>
    </div>
  );
};

export default TourAssignment;
