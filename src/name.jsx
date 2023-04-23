import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./home";

const Name = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home", { state: {  name } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F0F2F5",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "40px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Welcome!
      </h1>
      <label
        style={{
          marginBottom: "10px",
          fontSize: "20px",
          color: "#555",
        }}
      >
        Name:
        <input
          type="text" required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginLeft: "10px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #999",
          }}
        />
      </label>
      <label
        style={{
          marginBottom: "10px",
          fontSize: "20px",
          color: "#555",
        }}
      >
        Email:
        <input
          type="email" required
          style={{
            marginLeft: "10px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #999",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Name;
