import './PageStyles.css'

function Contact() {
  return (
    <section className="page-section contact-page fade-in">
      <h1>Contact</h1>
      <p>If you have questions, reach out to the student services team.</p>
      <div className="contact-card slide-up">
        <div>
          <h2>Email</h2>
          <p>studentportal@college.edu</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+91 98765 43210</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
