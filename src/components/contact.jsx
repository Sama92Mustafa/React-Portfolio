export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <p>If you'd like to get in touch, please reach out via email at Samajamil92@gmail.com</p>
      <form className="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" className="contact-input" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" className="contact-input" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea className="contact-input" required></textarea>
        </div>
        <button type="submit" className="contact-button">Send</button>
      </form>
    </div>
  );
}
