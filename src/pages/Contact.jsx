import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or Call!</p>

      <div className="contact-links">
        <p>Email: <a  href="mailto:Zeeshan.mukram6@gmail.com" target="_blank" rel="noopener noreferrer">Zeeshan.mukram6@gmail.com</a></p>
        <p>Mobile No(WhatsApp): 9066852215</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/mohammed-zeeshan-mukram-348489260/" target="_blank" rel="noopener noreferrer">Mohammed Zeeshan Mukram</a></p>
      </div>
    </div>
  );
}

export default Contact;
