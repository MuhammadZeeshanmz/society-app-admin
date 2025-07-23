import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // Import icons

import computerScienceImg from "../assets/computer_science.jpg";
import chemistryImg from "../assets/chemistry.jpeg";
import enterImg from "../assets/enter_society.png";

const Alerts = () => {
  const navigate = useNavigate();

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      societyName: "Society of Computer Science and Technology",
      description: "Description of alert goes here. About 25 words.",
      avatar: computerScienceImg,
    },
    {
      id: 2,
      societyName: "Chemical Society",
      description: "Description of alert goes here. About 25 words.",
      avatar: chemistryImg,
    },
    {
      id: 3,
      societyName: "Entrepreneurship Society",
      description: "Description of alert goes here. About 25 words.",
      avatar: enterImg,
    },
  ]);

  const addAlert = () => {
    const societyName = prompt("Enter the name of the society:");
    if (societyName) {
      const description = prompt("Enter the description of the alert:");
      if (description) {
        const avatar = prompt("Enter the image URL for the alert:");
        if (avatar) {
          const newAlert = {
            id: alerts.length + 1,
            societyName,
            description,
            avatar,
          };
          setAlerts([...alerts, newAlert]);
        } else {
          alert("Image URL cannot be empty.");
        }
      } else {
        alert("Description cannot be empty.");
      }
    } else {
      alert("Society name cannot be empty.");
    }
  };

  const updateAlert = (id) => {
    const updatedSocietyName = prompt("Enter the updated name of the society:");
    if (updatedSocietyName) {
      const updatedDescription = prompt("Enter the updated description:");
      if (updatedDescription) {
        const updatedAvatar = prompt("Enter the updated image URL:");
        if (updatedAvatar) {
          setAlerts((prevAlerts) =>
            prevAlerts.map((alert) =>
              alert.id === id
                ? { ...alert, societyName: updatedSocietyName, description: updatedDescription, avatar: updatedAvatar }
                : alert
            )
          );
        } else {
          alert("Image URL cannot be empty.");
        }
      } else {
        alert("Description cannot be empty.");
      }
    } else {
      alert("Society name cannot be empty.");
    }
  };

  const deleteAlert = (id) => {
    if (window.confirm("Are you sure you want to delete this alert?")) {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F4F4F4", minHeight: "100vh", margin: 0 }}>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#4A4A4A",
          color: "white",
          padding: "10px 20px",
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => navigate("/home")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "20px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            &#8592;
          </button>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>Alerts</h2>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "80px 20px" }}>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "15px",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Alert Avatar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#ddd",
                  marginRight: "20px",
                }}
              >
                <img
                  src={alert.avatar}
                  alt={alert.societyName}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 style={{ margin: "5px 0", fontSize: "16px", fontWeight: "bold" }}>{alert.societyName}</h3>
                <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>{alert.description}</p>
              </div>
            </div>

            {/* Action Icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <FaEdit
                style={{ cursor: "pointer", color: "#4A90E2" }}
                onClick={() => updateAlert(alert.id)}
              />
              <FaTrash
                style={{ cursor: "pointer", color: "#E74C3C" }}
                onClick={() => deleteAlert(alert.id)}
              />
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "fixed",
          bottom: "20px",
          left: 0,
          right: 0,
          textAlign: "center",
          padding: "10px",
        }}
      >
        <button
          onClick={addAlert}
          style={{
            backgroundColor: "#4A4A4A",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <FaPlus style={{ marginRight: "5px" }} />
          Add New Alert
        </button>
      </footer>
    </div>
  );
};

export default Alerts;
