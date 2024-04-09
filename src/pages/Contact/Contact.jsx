import React from "react";

const Contact = () => {
  return (
    <div
      className="contact"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5em", color: "#333", marginBottom: "20px" }}>
        Contact Us
      </h2>
      <p style={{ fontSize: "1.1em", color: "#666", marginBottom: "30px" }}>
        Have any questions? Feel free to get in touch with us.
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "10px",
            marginBottom: "15px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "10px",
            marginBottom: "15px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{
            padding: "10px",
            marginBottom: "15px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6347",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
