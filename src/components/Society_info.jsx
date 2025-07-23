import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
 
import computerScienceImg from "../assets/computer_science.jpg";
import chemistryImg from "../assets/chemistry.jpeg";
import enterImg from "../assets/enter_society.png";

import shImage from "../assets/shehreyar.jpeg";
import maImage from "../assets/maaz.jpeg";
import ihImage from "../assets/ihtesham.jpeg";
import ibImage from "../assets/ibad.jpeg";


 import disImage from "../assets/dicussion.jpg"
 import eveImage from "../assets/event.webp"

const SocietiesInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate("/event-info");
  };

  const societies = [
    {
      id: 1,
      name: "Society of Computer Science and Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, elit quis dapibus dictum, libero mauris ultricies odio, a semper nunc lectus et dolor. Integer ac ornare augue.",
      image: computerScienceImg // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Chemical Society",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, elit quis dapibus dictum, libero mauris ultricies odio, a semper nunc lectus et dolor. Integer ac ornare augue.",
      image: chemistryImg // Replace with actual image URLs
    },
    {
      id: 3,
      name: "Entrepreneurship Society",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, elit quis dapibus dictum, libero mauris ultricies odio, a semper nunc lectus et dolor. Integer ac ornare augue.",
      image: enterImg // Replace with actual image URLs
    },
  ];

  const society = societies.find((s) => s.id === parseInt(id));

  const [roles, setRoles] = useState([
    { id: 1, name: "Shehreyar", role: "Vice President", image: shImage },
    { id: 2, name: "Maaz", role: "Vice President", image: maImage },
    { id: 2, name: "Ihtesham", role: "Fianance Scretary", image: ihImage },
    { id: 2, name: "Ibad", role: "Community Coordinator", image: ibImage },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", role: "", image: "" });

  const addRole = () => {
    const newRoleWithId = { ...newRole, id: roles.length + 1 };
    setRoles([...roles, newRoleWithId]);
    setIsAdding(false);
    setNewRole({ name: "", role: "", image: "" });
  };

  const deleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  const startEditing = (role) => {
    setCurrentRole(role);
    setIsEditing(true);
  };

  const updateRole = (updatedRole) => {
    setRoles(roles.map(role => (role.id === updatedRole.id ? updatedRole : role)));
    setIsEditing(false);
    setCurrentRole(null);
  };

  if (!society) {
    return <p>Society not found!</p>;
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F4F4F4",
        minHeight: "100vh",
        padding: "20px",
        margin: 0,
      }}
    >
<header
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#4A4A4A",
    color: "white",
    padding: "10px 20px", // Adjust padding for spacing
    display: "flex",
    alignItems: "center", // Vertically center the content
    justifyContent: "flex-start", // Align items to the start (left side)
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "100%", // Ensure the header takes full width of the screen
    margin: 0, // Remove default margin to ensure it aligns with the body
  }}
>
  <button
    onClick={() => navigate("/home")}
    style={{
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
      marginRight: "10px", 
      position: "absolute",
      right: "630px",// Space between the back icon and title
      display: "flex",
    alignitems: "center",
    marginRight: "10px",
    alignItems: "center",
  }}
>
    &#8592; {/* Back arrow */}
  </button>
  <h1
    style={{
      margin: 0, // Ensure no margins affect alignment
      fontSize: "18px",
      whiteSpace: "nowrap", // Prevent text from wrapping
      flexShrink: 0, // Prevent shrinking of the title
    }}
  >
    Society Info
  </h1>
</header>
<header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#4A4A4A',
          color: 'white',
          padding: '10px 20px',
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => navigate('/home')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            &#8592; {/* Left arrow */}
          </button>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', whiteSpace: "nowrap", }}>Society Info</h2>
        </div>
      </header>



      {/* Content */}
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {/* Society Image and Name */}
        <div style={{ textAlign: "center", flex: 1,   }}>
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: "10px",
              backgroundColor: "#ddd",
              margin: "0 auto",
            }}
          >
            <img
              src={society.image}
              alt={society.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              display: "inline-block",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
              margintop: "10px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {society.name}
            </h2>
          </div>

          <div
            style={{
              textAlign: "left",
              color: "#555",
              marginTop: "10px",
              padding: "0 20px",
            }}
          >
            <h3>Description:</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              {society.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content After Description */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "left",
          backgroundColor: "#fff",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Roles Section */}
        <h3 style={{ marginBottom: "10px", fontWeight: "bold" }}>Society Roles:</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {roles.map(role => (
            <div key={role.id} style={cardStyle}>
              <img
                src={role.image}
                alt={role.role}
                style={imageStyle}
              />
              <div style={infoStyle}>
                <h4 style={nameStyle}>{role.name}</h4>
                <p style={roleStyle}>Role: {role.role}</p>
              </div>
              {/* Admin Controls */}
              <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "black",

                  }}
                  title="Update Role"
                  onClick={() => startEditing(role)}
                >
                  🖉 {/* Update Icon */}
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    // color: "black",
                  }}
                  title="Delete Role"
                  onClick={() => deleteRole(role.id)}
                >
                  🗑️ {/* Delete Icon */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Role Button */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#4A4A4A",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setIsAdding(true)}
          >
            + Add Role
          </button>
        </div>

        {/* Add Role Modal */}
        {isAdding && (
          <div style={modalStyle}>
            <div style={modalContentStyle}>
              <h3>Add Role</h3>
              ...
<form
  onSubmit={(e) => {
    e.preventDefault();
    addRole();
  }}
>
  <div style={{ marginBottom: "10px" }}>
    <label>Name:</label>
    <input
      type="text"
      value={newRole.name}
      onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "10px" }}>
    <label>Role:</label>
    <input
      type="text"
      value={newRole.role}
      onChange={(e) => setNewRole({ ...newRole, role: e.target.value })}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "10px" }}>
    <label>Image URL:</label>
    <input
      type="text"
      value={newRole.image}
      onChange={(e) => setNewRole({ ...newRole, image: e.target.value })}
      style={inputStyle}
    />
  </div>
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <button type="submit" style={{ ...buttonStyle, marginRight: "10px" }}>Add</button>
    <button type="button" onClick={() => setIsAdding(false)} style={buttonStyle}>Cancel</button>
  </div>
</form>
            </div>
          </div>
        )}

        {/* Update Role Modal */}
        {isEditing && (
  <div style={modalStyle}>
    <div style={modalContentStyle}>
      <h3>Update Role</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateRole(currentRole);
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={currentRole.name}
            onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Role:</label>
          <input
            type="text"
            value={currentRole.role}
            onChange={(e) => setCurrentRole({ ...currentRole, role: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Image URL:</label>
          <input
            type="text"
            value={currentRole.image}
            onChange={(e) => setCurrentRole({ ...currentRole, image: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" style={{ ...buttonStyle, marginRight: "10px" }}>Update</button>
          <button type="button" onClick={() => setIsEditing(false)} style={buttonStyle}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
)}


        {/* Discussion Forum Section */}
        <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
          Discussion Forum:
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/discussion/${id}`)} // Add navigation here
        >
          <img
            src={disImage}
            alt="Go to Discussion"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
              Go To Discussion
            </h4>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <h3 style={{ marginTop: "30px", fontWeight: "bold" }}>
  Upcoming Events:
</h3>

{/* Add navigation here */}
<div 
  
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  }}
  onClick={() => navigate(`/event_info/${id}`)} // Add navigation here
>
  <img
    src={eveImage}
    alt="Event"
    style={imageStyle}
  />
  <div style={infoStyle}>
    <h4 style={nameStyle}>Event Name</h4>
    <p style={roleStyle}>Venue: Hall</p>
    <p style={roleStyle}>Timing: 9 to 12</p>
    <p style={roleStyle}>Dates: 10-10-24</p>
  </div>
</div>

      </div>
    </div>
  );
};

// Reusable Styles
const cardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  padding: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  objectFit: "cover",
};

const infoStyle = {
  display: "flex",
  flexDirection: "column",
};

const nameStyle = {
  margin: 0,
  fontSize: "16px",
  fontWeight: "bold",
};

const roleStyle = {
  margin: 0,
  fontSize: "14px",
  color: "#555",
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "5px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  
};

const buttonStyle = {
  backgroundColor: "#4A4A4A",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
 
};

export default SocietiesInfo;