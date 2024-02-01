import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import navbarBg from './navbar-bg.jpg';
import logo from './a1.jpg';
import constructionImage from './a3.png';

function App() {
  return (
    <Router>
      <div className="app-bg">
        <TopLeftContent />
        <Navbar />
        <MainContent />
        <BottomRightImage />
      </div>
    </Router>
  );
}

const TopLeftContent = () => (
  <div className="top-left-content">
    <img src={logo} alt="Company Logo" className="logo" />
    <div className="company-info">
      <div className="company-name">Constructure</div>
      <div className="company-group">Prolix Group</div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/search">Search</Link></li>
    </ul>
  </nav>
);

const MainContent = () => (
  <div className="main-content">
    <h1 className="title">Innovation</h1>
    <h2 className="subtitle">Constructure</h2>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur. Morbi vestibulum egetas urna sed facilisis. Orci
      donec odio porttitor bibendum sociis ultricies sit integer. Non facilisi egetas augue
      fermentum enim facilisis mauris tellus.
    </p>
    <button className="read-more-btn">Read More</button>
  </div>
);

const BottomRightImage = () => (
  <div className="bottom-right-image">
    <img src={constructionImage} alt="Construction Workers" />
  </div>
);

export default App;
