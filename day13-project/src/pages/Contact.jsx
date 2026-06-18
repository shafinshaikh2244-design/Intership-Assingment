import './PageStyles.css';

function Contact() {
  return (
    <section className="page-section contact-page fade-in">
      <h1>Contact</h1>
      <p>Need help with the portal? Reach out to student services or use the contact details below.</p>
      <div className="contact-card">
        <div>
          <h2>Email</h2>
          <p>studentportal@example.com</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
