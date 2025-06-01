import React from "react";

export default function Portfolio() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Andrew's Portfolio</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>Aspiring Software Engineer | CS Student</p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1rem" }}>Projects</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Premier League Quiz Game</h3>
            <p style={{ marginTop: "0.5rem" }}>A C-based terminal game where users answer trivia about Premier League history.</p>
            <a href="https://github.com/yourgithub/premier-league-quiz" target="_blank" rel="noreferrer">View Code</a>
          </div>

          <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>To-Do List App</h3>
            <p style={{ marginTop: "0.5rem" }}>A full-stack MERN app that lets users create, update, and delete tasks.</p>
            <a href="https://yourtodoapp.vercel.app" target="_blank" rel="noreferrer">Live Demo</a><br />
            <a href="https://github.com/yourgithub/todo-app" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1rem" }}>Blog</h2>
        <ul>
          <li><a href="#">How I Built My First C Game in College</a></li>
          <li><a href="#">Tips for Learning Recursion and Linked Lists</a></li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1rem" }}>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" style={{ padding: "0.5rem", marginBottom: "0.5rem", width: "100%" }} /><br />
          <input type="email" placeholder="Your Email" style={{ padding: "0.5rem", marginBottom: "0.5rem", width: "100%" }} /><br />
          <textarea placeholder="Your Message" rows="4" style={{ padding: "0.5rem", width: "100%" }}></textarea><br />
          <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>Send</button>
        </form>
      </section>

      <footer style={{ textAlign: "center", color: "#888", fontSize: "0.9rem" }}>
        © 2025 Andrew. Built with React.
      </footer>
    </div>
  );
}
