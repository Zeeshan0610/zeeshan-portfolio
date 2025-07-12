import "./Projects.css";

const projects = [
  {
    title: "A Shoulder Surfing Resistant Graphical Authentication System",
    description: "A Java full stack project Which consists of three layer graphical authentication system",
    demo: "#",
  },
  {
    title: "Healthcare Dashboard",
    description: "A responsive React dashboard using mock data and real-world UI layout.",
    demo: "#", 
  },
  {
    title: "Portfolio Website",
    description: "This portfolio itself — built with React, routing, and clean UI.",
    demo: "#",
  },
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
            
              {proj.demo !== "#" && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
        
        ))}
      </div>
    </div>
  );
}

export default Projects;
