import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <p>You can download my resume below or view key milestones here.</p>

      <a
        href="/Zeeshan_Resume.pdf"
        download
        className="download-btn"
      >
        Download Resume
      </a>

      <div className="timeline">
        <div className="timeline-item">
          <h3>Bachelor’s Degree in [Your Major]</h3>
          <p>[Your University] — [Year]</p>
        </div>
        <div className="timeline-item">
          <h3>Frontend Projects</h3>
          <p>React, HTML, CSS, JS — 2024–2025</p>
        </div>
        <div className="timeline-item">
          <h3>Learning Full-Stack</h3>
          <p>Java, React, GitHub — Ongoing</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
