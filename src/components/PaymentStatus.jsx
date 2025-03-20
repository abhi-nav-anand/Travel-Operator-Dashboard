import React, { useState } from "react";
import { payments as initialPayments } from "../data";

const PaymentStatus = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [newPayment, setNewPayment] = useState({ customer: "", amount: "", status: "Pending" });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  // Add or Update Payment
  const handleAddOrUpdatePayment = () => {
    if (!newPayment.customer || !newPayment.amount || !newPayment.status) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      // Update existing payment
      const updatedPayments = [...payments];
      updatedPayments[editIndex] = { ...updatedPayments[editIndex], ...newPayment };
      setPayments(updatedPayments);
      setEditIndex(null);
    } else {
      // Add new payment with a unique ID
      setPayments([...payments, { id: Date.now(), ...newPayment }]);
    }

    setNewPayment({ customer: "", amount: "", status: "Pending" }); // Reset form
  };

  // Delete Payment
  const handleDeletePayment = (id) => {
    const updatedPayments = payments.filter((payment) => payment.id !== id);
    setPayments(updatedPayments);
  };

  // Edit Payment
  const handleEditPayment = (index) => {
    setNewPayment(payments[index]);
    setEditIndex(index);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Payment Status</h2>

      {/* Add/Edit Payment Form */}
      <div style={formContainerStyle}>
        <input type="text" name="customer" value={newPayment.customer} onChange={handleInputChange} placeholder="Customer Name" style={inputStyle} />
        <input type="number" name="amount" value={newPayment.amount} onChange={handleInputChange} placeholder="Amount" style={inputStyle} />
        <select name="status" value={newPayment.status} onChange={handleInputChange} style={inputStyle}>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
        <button onClick={handleAddOrUpdatePayment} style={editIndex !== null ? updateButtonStyle : addButtonStyle}>
          {editIndex !== null ? "Update Payment" : "Add Payment"}
        </button>
      </div>

      {/* Payment Table */}
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>Customer</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment.id} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={tableCellStyle}>{payment.customer}</td>
              <td style={tableCellStyle}>₹{payment.amount}</td>
              <td style={{ ...tableCellStyle, fontWeight: "bold", color: getStatusColor(payment.status) }}>
                {payment.status}
              </td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEditPayment(index)} style={editButtonStyle}>Edit</button>
                <button onClick={() => handleDeletePayment(payment.id)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
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
  return status === "Paid" ? "green" : "red";
};

export default PaymentStatus;
