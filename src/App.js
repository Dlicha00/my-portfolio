import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow-sm py-6 text-center">
        <h1 className="text-4xl font-bold">Leul</h1>
        <p className="text-lg text-gray-600 mt-1">Aspiring Software Engineer • Computer Science Student</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a second-year Computer Science student who enjoys learning by building. I’ve developed a strong foundation
            in C, Java, and Python, and I’m currently mastering web development with React. My passion lies in solving
            real-world problems through technology — from building fun quiz games to productivity tools. I'm seeking
            opportunities to apply my skills through software engineering internships and grow as a developer.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6">

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-xl font-bold">Premier League Quiz Game</h3>
              <p className="mt-2 text-gray-700">
                A terminal-based trivia game built entirely in C that challenges users with questions about Premier League football history.
                I implemented structured input handling, a game loop, score tracking, and win/loss logic to create a smooth and engaging CLI experience.
              </p>
              <p className="mt-1 text-gray-600 text-sm">Built with: C • GCC Compiler • CLI Interface</p>
              <a href="https://github.com/yourgithub/premier-league-quiz" className="text-blue-600 mt-2 inline-block">View Code</a>
            </div>

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-xl font-bold">Study Timer App</h3>
              <p className="mt-2 text-gray-700">
                A simple timer app that helps students stay focused using the Pomodoro technique. Users can set session durations,
                track completed study intervals, and receive alerts when breaks start. This project helped reinforce my knowledge of
                time-based logic and React state management.
              </p>
              <p className="mt-1 text-gray-600 text-sm">Built with: React • JavaScript • CSS</p>
              <a href="https://github.com/yourgithub/study-timer" className="text-blue-600 inline-block">View Code</a>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Email: <a href="Leul Ejigu" className="text-blue-700">andrew@example.com</a></p>
          <p className="text-gray-700">GitHub: <a href="https://github.com/yourgithub" className="text-blue-700">github.com/yourgithub</a></p>
          <p className="text-gray-700">LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-700">linkedin.com/in/yourlinkedin</a></p>
        </section>
      </main>

      <footer className="bg-white text-center text-sm text-gray-500 py-4">
        © 2025 Leul Ejigu. All rights reserved.
      </footer>
    </div>
  );
}

