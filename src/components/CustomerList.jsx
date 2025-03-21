import React, { useState } from "react";
import { users as initialUsers } from "../data";

const CustomerList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateUser = () => {
    if (!newUser.name || !newUser.email || !newUser.phone) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { ...updatedUsers[editIndex], ...newUser };
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
    }

    setNewUser({ name: "", email: "", phone: "" });
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setEditIndex(index);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Customer List</h2>

      <div style={formContainerStyle}>
        <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Name" style={inputStyle} />
        <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" style={inputStyle} />
        <input type="tel" name="phone" value={newUser.phone} onChange={handleInputChange} placeholder="Phone" style={inputStyle} />
        <button onClick={handleAddOrUpdateUser} style={editIndex !== null ? updateButtonStyle : addButtonStyle}>
          {editIndex !== null ? "Update Customer" : "Add Customer"}
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.phone}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEditUser(index)} style={editButtonStyle}>Edit</button>
                <button onClick={() => handleDeleteUser(index)} style={deleteButtonStyle}>Delete</button>
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

export default CustomerList;
