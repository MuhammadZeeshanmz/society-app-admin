import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Discussion = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([
    // { id: 1, username: "Prof Raiz Hussian", message: "Welcome to the discussion forum!", isAdmin: true, imageUrl: "" },
    { id: 2, username: "Prof Abid", message: "This is a great discussion!", isAdmin: false, imageUrl: "https://via.placeholder.com/60" },
    { id: 3, username: "Prof Zulqurnain", message: "I totally agree with you.", isAdmin: false, imageUrl: "https://via.placeholder.com/60" },
    { id: 3, username: "Prof Waqar Shah", message: "I totally agree with you.", isAdmin: false, imageUrl: "https://via.placeholder.com/60" },
  ]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addComment = () => {
    if (username && message) {
      const newComment = {
        id: comments.length + 1, // Generate a new unique ID for the comment
        username,
        message,
        isAdmin: username.toLowerCase() === "admin",
        imageUrl: imageUrl || "", // Keep imageUrl empty if not provided
      };

      // Append the new comment to the existing comments
      setComments((prevComments) => [...prevComments, newComment]);

      // Reset the input fields after posting
      setUsername("");
      setMessage("");
      setImageUrl("");
    } else {
      alert("Both username and message are required.");
    }
  };

  const updateComment = (id) => {
    const newUsername = prompt("Enter the updated username:", comments.find(comment => comment.id === id).username);
    const newMessage = prompt("Enter the updated message:", comments.find(comment => comment.id === id).message);
    const newImageUrl = prompt("Enter the updated image URL:");

    if (newMessage || newUsername || newImageUrl) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === id
            ? {
                ...comment,
                username: newUsername || comment.username, // Update the username if provided
                message: newMessage || comment.message, // Update the message if provided
                imageUrl: newImageUrl || comment.imageUrl, // Update the image URL if provided
              }
            : comment
        )
      );
    }
  };

  const deleteComment = (id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
        padding: "0 20px",
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
          backgroundColor: "#4A4A4A",
          color: "white",
          padding: "15px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            &#8592; {/* Back arrow */}
          </button>
          {/* Discussion Forum Title */}
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: "bold",
              marginLeft: "10px",
              whiteSpace: "nowrap",
            }}
          >
            Discussion Forum
          </h1>
        </div>
      </header>

      {/* Content */}
      <div style={{ marginTop: "80px", paddingBottom: "20px" }}>
        {/* Input Section */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          {/* Username Field */}
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              flex: 1,
              padding: "14px 20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              width: "250px",
            }}
          />
          {/* Message Field */}
          <input
            type="text"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flex: 2,
              padding: "14px 20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              width: "500px",
            }}
          />
          {/* Image URL Field */}
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{
              flex: 1,
              padding: "14px 20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              width: "250px",
            }}
          />
          {/* Post Button */}
          <button
            onClick={addComment}
            style={{
              padding: "14px 25px",
              borderRadius: "8px",
              backgroundColor: "#4A4A4A",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              width: "150px",
              marginTop: "8px",
            }}
          >
            <FaPlus style={{ marginRight: "8px" }} /> Add
          </button>
        </div>

        {/* Comments Section */}
        <div>
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.3s",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#ddd",
                  }}
                >
                  <img
                    src={comment.imageUrl || "https://via.placeholder.com/60"} // Use the imageUrl if provided
                    alt={comment.username}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {comment.isAdmin ? "Admin" : comment.username}
                  </h4>
                  <p style={{ margin: "10px 0", fontSize: "16px", lineHeight: "1.5" }}>
                    {comment.message}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => updateComment(comment.id)}
                  style={{
                    fontSize: "14px",
                    color: "#007BFF",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteComment(comment.id)}
                  style={{
                    fontSize: "14px",
                    color: "#FF6347",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discussion;
