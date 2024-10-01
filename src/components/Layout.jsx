import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Layout() {
  return (
    <>
      <header className="layout-header">
        <img src={logo} alt="Sama Mustafa Logo" className="logo" />
        <h1>Sama Mustafa's Portfolio</h1>
        <nav className="layout-nav">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link> | <Link to="/projects">Projects</Link>
        </nav>
      </header>
      <hr />
    </>
  );
}
