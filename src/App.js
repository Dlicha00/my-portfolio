import React from "react";

export default function App() {
  return (
    <div
      className="font-sans text-gray-900 min-h-screen"
      style={{
        background: "radial-gradient(circle at top left, #dbeafe, #f3f4f6)",
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Leul Ejigu</h1>
          <div className="space-x-4 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-start px-6 sm:px-12 max-w-4xl mx-auto pt-32">
        <div>
          <p className="text-sm text-blue-600 mb-2">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Leul Ejigu.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
            I build software that solves real problems.
          </h2>
          <p className="mt-4 text-gray-700 max-w-md">
            I'm a Computer Science student focused on turning ideas into real, functional code — from quiz games in C to UI-driven apps in React. I’m passionate about building tools, growing as a developer, and contributing to strong engineering teams.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-6 sm:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I'm currently a second-year CS student who enjoys building practical, helpful tools. I've worked with C, Java, and React, and I'm always learning more through projects and self-driven challenges. I enjoy turning problems into simple, usable solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 sm:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Premier League Quiz Game</h3>
            <p className="text-gray-700 mt-2">
              A terminal-based trivia game written in C, testing players on Premier League history. I designed the game logic, scoring system, and structured input handling.
            </p>
            <p className="text-sm text-gray-500 mt-1">Tech: C, GCC Compiler, CLI</p>
            <a href="https://github.com/Dlicha00/Football-Quiz-Game" className="text-blue-600 inline-block mt-2">View Code</a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Study Timer App</h3>
            <p className="text-gray-700 mt-2">
              A Pomodoro-style timer app for focused study sessions. React-powered UI with session tracking and user alerts. Strengthened my skills in React state and time-based logic.
            </p>
            <p className="text-sm text-gray-500 mt-1">Tech: React, JavaScript, CSS</p>
            <a href="https://github.com/yourgithub/study-timer" className="text-blue-600 inline-block mt-2">View Code</a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6 sm:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">📧 <a href="mailto:leulfikerte@gmail.com?subject=Portfolio Inquiry" className="text-blue-600">Leulfikerte@gmail.com</a></p>
        <p className="text-gray-700 mb-2">💻 <a href="https://github.com/Dlicha00" className="text-blue-600">https://github.com/Dlicha00</a></p>
        <p className="text-gray-700">🔗 <a href="NA" className="text-blue-600">NA</a></p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Leul Ejigu. Built with 💻 and Tailwind CSS.
      </footer>
    </div>
  );
}
