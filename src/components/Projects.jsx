import React from 'react';

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <ul>
        <li className="project-card">
          <h2 className="project-title">1. Personal Portfolio Website</h2>
          <p className="project-description">
            A responsive and dynamic personal portfolio website built using React.js and styled with CSS. It features multiple pages, including Home, About Me, Projects, Services, and Contact.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </li>
        
      </ul>
    </div>
  );
}
