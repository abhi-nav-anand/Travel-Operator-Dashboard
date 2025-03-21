import React, { useState } from "react";
import { bookings as initialBookings } from "../data";

const BookingList = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [newBooking, setNewBooking] = useState({ customer: "", destination: "", status: "Pending" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateBooking = () => {
    if (!newBooking.customer || !newBooking.destination) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updatedBookings = [...bookings];
      updatedBookings[editIndex] = { ...updatedBookings[editIndex], ...newBooking };
      setBookings(updatedBookings);
      setEditIndex(null);
    } else {
      setBookings([...bookings, { id: bookings.length + 1, ...newBooking }]);
    }

    setNewBooking({ customer: "", destination: "", status: "Pending" }); // Reset form
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
  };

  const handleEditBooking = (index) => {
    setNewBooking(bookings[index]);
    setEditIndex(index);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Booking List</h2>

      <div style={formContainerStyle}>
        <input type="text" name="customer" value={newBooking.customer} onChange={handleInputChange} placeholder="Customer Name" style={inputStyle} />
        <input type="text" name="destination" value={newBooking.destination} onChange={handleInputChange} placeholder="Destination" style={inputStyle} />
        <select name="status" value={newBooking.status} onChange={handleInputChange} style={selectStyle}>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleAddOrUpdateBooking} style={editIndex !== null ? updateButtonStyle : addButtonStyle}>
          {editIndex !== null ? "Update Booking" : "Add Booking"}
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>Customer</th>
            <th style={tableHeaderStyle}>Destination</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={tableCellStyle}>{booking.customer}</td>
              <td style={tableCellStyle}>{booking.destination}</td>
              <td style={{ ...tableCellStyle, fontWeight: "bold", color: getStatusColor(booking.status) }}>
                {booking.status}
              </td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEditBooking(index)} style={editButtonStyle}>Edit</button>
                <button onClick={() => handleDeleteBooking(index)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  background: "#f8f9fa",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "15px",
  color: "#333",
};

const formContainerStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const inputStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  flex: 1,
};

const selectStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const addButtonStyle = {
  padding: "8px 12px",
  background: "#28a745",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

const updateButtonStyle = {
  ...addButtonStyle,
  background: "#007bff",
};

const editButtonStyle = {
  padding: "6px 10px",
  background: "#ffc107",
  color: "black",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  marginRight: "5px",
};

const deleteButtonStyle = {
  padding: "6px 10px",
  background: "#dc3545",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#fff",
  borderRadius: "8px",
  overflow: "hidden",
};

const headerRowStyle = {
  background: "linear-gradient(90deg, rgb(5, 131, 136), rgb(0, 173, 179))",
  color: "white",
  textAlign: "left",
};

const tableHeaderStyle = {
  padding: "12px",
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const tableCellStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const rowEvenStyle = {
  background: "#f2f2f2",
};

const rowOddStyle = {
  background: "#ffffff",
};

const getStatusColor = (status) => {
  switch (status) {
    case "Confirmed":
      return "green";
    case "Pending":
      return "orange";
    case "Completed":
      return "gray";
    default:
      return "black";
  }
};

export default BookingList;
