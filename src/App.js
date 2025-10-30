import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="page-content">
    <h2>Welcome to the Home Page</h2>
    <p>This is a simple React app deployed on GitHub Pages using HashRouter.</p>
  </div>
);

const About = () => (
  <div className="page-content">
    <h2>About Page</h2>
    <p>This project demonstrates React Router and GitHub Pages deployment.</p>
  </div>
);

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
