import "./Projects.css";

const projects = [
  {
    title: "Healthcare Dashboard",
    description: "A responsive React dashboard using mock data and real-world UI layout.",
    github: "https://github.com/your-username/healthcare-dashboard",
    demo: "#", // optional
  },
  {
    title: "Portfolio Website",
    description: "This portfolio itself — built with React, routing, and clean UI.",
    github: "https://github.com/your-username/zeeshan-portfolio",
    demo: "#",
  },
  // Add more projects later!
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {proj.demo !== "#" && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
