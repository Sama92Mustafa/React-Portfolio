import React from 'react';

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>
            I create responsive, user-friendly websites using modern web technologies like React, HTML, CSS, and JavaScript.
          </p>
        </div>
        <div className="service-item">
          <h2>Mobile Apps</h2>
          <p>
            Developing cross-platform mobile applications with a focus on performance and user experience.
          </p>
        </div>
        <div className="service-item">
          <h2>General Programming</h2>
          <p>
            Offering services in various programming languages, including Java, Python, and C++ for software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
