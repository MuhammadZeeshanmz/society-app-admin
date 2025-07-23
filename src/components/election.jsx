import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import shImage from "../assets/shehreyar.jpeg";
import maImage from "../assets/maaz.jpeg";
import ihImage from "../assets/ihtesham.jpeg";
import ibImage from "../assets/ibad.jpeg";

const Election = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Shehreyar",
      votes: 16,
      description: "A dedicated individual focused on community welfare.",
      achievements: "Implemented several key projects for youth development.",
      vision: "A society that thrives on inclusivity and innovation.",
      post: "President", // New field for post
      image: shImage, // Default image URL
    },
    {
      id: 1,
      name: "Maaz",
      votes: 12,
      description: "A dedicated individual focused on community welfare.",
      achievements: "Implemented several key projects for youth development.",
      vision: "A society that thrives on inclusivity and innovation.",
      post: "President", // New field for post
      image: maImage, // Default image URL
    },
    {
      id: 2,
      name: "Ekhtisham",
      votes: 9,
      description: "An experienced leader with a proven track record.",
      achievements: "Revamped infrastructure projects in underprivileged areas.",
      vision: "Empowering every individual for a better tomorrow.",
      post: "Vice President", // New field for post
      image: ihImage, // Default image URL
    },
    {
      id: 2,
      name: "Ibad",
      votes: 8,
      description: "An experienced leader with a proven track record.",
      achievements: "Revamped infrastructure projects in underprivileged areas.",
      vision: "Empowering every individual for a better tomorrow.",
      post: "Vice President", // New field for post
      image: ibImage // Default image URL
    },
    {
      id: 3,
      name: "Candidate 3",
      votes: 15,
      description: "A creative thinker with a passion for progress.",
      achievements: "Launched multiple eco-friendly initiatives.",
      vision: "Building a sustainable future together.",
      post: "Community Manager", // New field for post
      image: "https://via.placeholder.com/100?text=C3", // Default image URL
    },
    {
      id: 3,
      name: "Candidate 3",
      votes: 19,
      description: "A creative thinker with a passion for progress.",
      achievements: "Launched multiple eco-friendly initiatives.",
      vision: "Building a sustainable future together.",
      post: "Community Manager", // New field for post
      image: "https://via.placeholder.com/100?text=C3", // Default image URL
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'add' or 'update'
  const [currentCandidate, setCurrentCandidate] = useState(null);
  const [candidateImage, setCandidateImage] = useState(null); // New state for the image
  const [candidatePost, setCandidatePost] = useState(""); // New state for post

  const navigate = useNavigate();

  const addCandidate = (candidate) => {
    setCandidates([
      ...candidates,
      { ...candidate, id: candidates.length + 1, votes: 0, image: candidateImage || "https://via.placeholder.com/100", post: candidatePost },
    ]);
    setIsModalOpen(false);
    setCandidateImage(null); // Reset image after adding
    setCandidatePost(""); // Reset post after adding
  };

  const updateCandidate = (updatedCandidate) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === updatedCandidate.id ? { ...updatedCandidate, image: candidateImage || updatedCandidate.image, post: candidatePost || updatedCandidate.post } : candidate
      )
    );
    setIsModalOpen(false);
    setCandidateImage(null); // Reset image after updating
    setCandidatePost(""); // Reset post after updating
  };

  const deleteCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCandidateImage(reader.result); // Set image as base64 encoded string
      };
      reader.readAsDataURL(file); // Read the file as base64
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F4F4F4",
        minHeight: "100vh",
        margin: 0,
      }}
    >
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
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", whiteSpace: "nowrap" }}>
            Election
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "80px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <FaPlus
            onClick={() => {
              setModalType("add");
              setCurrentCandidate(null);
              setIsModalOpen(true);
              setCandidatePost(""); // Reset post in modal
            }}
            style={{
              color: "#4A4A4A",
              cursor: "pointer",
              fontSize: "30px",
            }}
          />
        </div>

        {/* Candidates List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto",
                  backgroundColor: "#ddd",
                }}
              >
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                {candidate.name}
              </h3>
              <p style={{ textAlign: "center", color: "#555" }}>
                Votes: {candidate.votes}
              </p>
              <p>
                <strong>Post:</strong> {candidate.post} {/* Display the post */}
              </p>
              <p>
                <strong>Description:</strong> {candidate.description}
              </p>
              <p>
                <strong>Achievements:</strong> {candidate.achievements}
              </p>
              <p>
                <strong>Vision:</strong> {candidate.vision}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <FaEdit
                  onClick={() => {
                    setModalType("update");
                    setCurrentCandidate(candidate);
                    setIsModalOpen(true);
                    setCandidateImage(candidate.image); // Preload image in modal
                    setCandidatePost(candidate.post); // Preload post in modal
                  }}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                />
                <FaTrash
                  onClick={() => deleteCandidate(candidate.id)}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for Add/Update Candidate */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h3>{modalType === "add" ? "Add Candidate" : "Update Candidate"}</h3>
            <input
              type="text"
              placeholder="Name"
              value={currentCandidate?.name || ""}
              onChange={(e) =>
                setCurrentCandidate({
                  ...currentCandidate,
                  name: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <select
              value={candidatePost || currentCandidate?.post || ""}
              onChange={(e) => setCandidatePost(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select Post</option>
              <option value="President">President</option>
              <option value="Vice President">Vice President</option>
              <option value="Community Manager">Community Manager</option>
              <option value="Finance Secretary">Finance Secretary</option>
            </select>
            <textarea
              placeholder="Description"
              value={currentCandidate?.description || ""}
              onChange={(e) =>
                setCurrentCandidate({
                  ...currentCandidate,
                  description: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <textarea
              placeholder="Achievements"
              value={currentCandidate?.achievements || ""}
              onChange={(e) =>
                setCurrentCandidate({
                  ...currentCandidate,
                  achievements: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <textarea
              placeholder="Vision"
              value={currentCandidate?.vision || ""}
              onChange={(e) =>
                setCurrentCandidate({
                  ...currentCandidate,
                  vision: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />

            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: "10px" }}
            />
            {candidateImage && (
              <img
                src={candidateImage}
                alt="Candidate"
                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }}
              />
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <button
                onClick={() =>
                  modalType === "add"
                    ? addCandidate(currentCandidate)
                    : updateCandidate(currentCandidate)
                }
                style={{
                  backgroundColor: "#4A4A4A",
                  color: "white",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                {modalType === "add" ? "Add" : "Update"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Election;
