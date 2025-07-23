import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// Import your images
import computerScienceImg from "../assets/computer_science.jpg";
import chemistryImg from "../assets/chemistry.jpeg";
import enterImg from "../assets/enter_society.png";

const MySocieties = () => {
  const navigate = useNavigate();
  const [societies, setSocieties] = useState([
    {
      id: 1,
      name: "Society of Computer Science and Technology",
      role: "President",
      image: computerScienceImg,
    },
    {
      id: 2,
      name: "Chemical Society",
      role: "Undefined",
      image: chemistryImg,
    },
    {
      id: 3,
      name: "Entrepreneurship Society",
      role: "Secretary",
      image: enterImg,
    },
  ]);

  const addSociety = () => {
    const name = prompt("Enter the name of the new society:");
    if (name) {
      const newSociety = {
        id: societies.length + 1,
        name,
        role: "Member",
        image: "https://via.placeholder.com/80",
      };
      setSocieties([...societies, newSociety]);
    }
  };

  const updateSociety = (id) => {
    const updatedName = prompt("Enter the new name for the society:");
    const updatedRole = prompt("Enter the new role:");
    setSocieties(
      societies.map((society) =>
        society.id === id
          ? { ...society, name: updatedName || society.name, role: updatedRole || society.role }
          : society
      )
    );
  };

  const deleteSociety = (id) => {
    if (window.confirm("Are you sure you want to delete this society?")) {
      setSocieties(societies.filter((society) => society.id !== id));
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
            &#8592; {/* Left arrow */}
          </button>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", whiteSpace: "nowrap" }}>My Societies</h2>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "80px 20px" }}>
        {societies.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "16px", color: "#555" }}>No societies available</p>
        ) : (
          societies.map((society) => (
            <div
              key={society.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "15px",
                margin: "10px 0",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/societies/${society.id}`)}
// Navigate to SocietyInfo
            >
              {/* Society Image */}
              <div
                style={{
                  flexShrink: 0,
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#ddd",
                }}
              >
                <img
                  src={society.image}
                  alt={society.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Vertical Divider */}
              <div
                style={{
                  width: "1px",
                  height: "80px",
                  backgroundColor: "#ddd",
                  margin: "0 20px",
                }}
              ></div>

              {/* Society Details */}
              <div>
                <h3 style={{ margin: "5px 0", fontSize: "16px", fontWeight: "bold" }}>{society.name}</h3>
                <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
                  <strong>My Role:</strong> {society.role}
                </p>
              </div>

              {/* Action Icons */}
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  right: "20px",
                  gap: "10px",
                }}
              >
                <FaEdit
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering navigation
                    updateSociety(society.id);
                  }}
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "#4A4A4A",
                  }}
                  title="Edit Society"
                />
                <FaTrash
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering navigation
                    deleteSociety(society.id);
                  }}
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "#E63946",
                  }}
                  title="Delete Society"
                />
              </div>
            </div>
          ))
        )}
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
          onClick={addSociety}
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
          <FaPlus style={{ marginRight: "8px" }} />
          Add New Society
        </button>
      </footer>
    </div>
  );
};

export default MySocieties;
