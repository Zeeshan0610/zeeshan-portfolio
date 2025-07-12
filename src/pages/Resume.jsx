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
          <h3>Bachelor’s Degree in Computer Science and Engineering</h3>
          <p>Visvesvaraya Technological University — [2020-2024]</p>
        </div>
        
        <div className="timeline-item">
          <h3>Learning Full-Stack</h3>
          <p>Java, ReactJS, HTML, CSS, JavaScript, GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
