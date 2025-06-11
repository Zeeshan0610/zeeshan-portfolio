import "./Home.css"; // We'll create this CSS file next

function Home() {
  return (
    <div className="home-container">
      <img
        src="/profile.jpg"
        alt="Zeeshan"
        className="profile-pic"
      />
      <h1>Mohammed Zeeshan Mukram</h1>
      <p>Full-stack Developer</p>

      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>Bachelor’s Degree in Computer Science and Engineering </li>
              Visvesvaraya Technological University(VTU)
        </ul>
      </div>

      <div className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Full Stack Development</li>
          KodNest
        </ul>
      </div>
    </div>
  );
}

export default Home;
