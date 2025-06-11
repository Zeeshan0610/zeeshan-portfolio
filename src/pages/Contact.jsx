import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or connect on GitHub!</p>

      <div className="contact-links">
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a></p>
        {/* Optional */}
        <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></p>
      </div>
    </div>
  );
}

export default Contact;
