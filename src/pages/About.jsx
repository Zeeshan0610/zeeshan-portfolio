import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I'm Zeeshan, a passionate web developer currently exploring React and full-stack development.
        I enjoy building clean UIs, learning new tech, and solving real-world problems through code.
      </p>

      <div className="about-section">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React (in progress)</li>
          <li>Git & GitHub</li>
          <li>Java (learning)</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Interests</h2>
        <p>
          I’m curious about tech trends, AI, and building user-focused web applications.  
          I also love collaborating on projects that teach me something new!
        </p>
      </div>
    </div>
  );
}

export default About;
