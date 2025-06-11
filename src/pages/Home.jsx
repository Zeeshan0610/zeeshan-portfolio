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

      <div className="about">
        <p>
        I'm Zeeshan, a passionate Full stack developer, Being fresher currently looking to start my career in growing organisation.
        I enjoy building clean UIs, learning new tech, and solving real-world problems through code.
      </p>
      </div>

      <div className="section">
        <h2>Education</h2>
          <p>Bachelor’s Degree in Computer Science and Engineering </p>
              Visvesvaraya Technological University(VTU)
      </div>
      </div>

  );
}

export default Home;
