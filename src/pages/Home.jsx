import "./Home.css"; // We'll create this CSS file next

function Home() {
  return (
    <div className="home-container">
      <img
        src="/profile.jpg"
        alt="Zeeshan"
        className="profile-pic"
      />
      <h1>Zeeshan</h1>
      <p>Frontend Developer | React Learner | Full-stack Enthusiast</p>

      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>Bachelor’s Degree in [Your Major] – [Your University]</li>
          <li>[Any other relevant course or diploma]</li>
        </ul>
      </div>

      <div className="section">
        <h2>Certifications</h2>
        <ul>
          <li>[Certification Name] – [Platform or Authority]</li>
          <li>[Another one, if any]</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
