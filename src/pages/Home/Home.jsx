import React from "react";

function Home() {
  return (
    <div
      className="hero"
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1611307742746-43cbea512c37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div className="hero-content" style={{ zIndex: 1 }}>
        <h1 style={{ fontSize: "3.5em", marginBottom: "20px" }}>
          Welcome to Our Website
        </h1>
        <p style={{ fontSize: "1.2em", marginBottom: "30px" }}>
          This is a beautiful hero section created with React.
        </p>
        <a
          href="#"
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6347",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "25px",
            transition: "background-color 0.3s ease",
          }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;
