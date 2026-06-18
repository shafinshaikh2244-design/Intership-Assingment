import './PageStyles.css';

function About() {
  return (
    <section className="page-section about-page fade-in">
      <h1>About Student Portal</h1>
      <p>
        This portal is built in ReactJS to demonstrate routing, form event handling, and component lifecycle.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h2>React Router</h2>
          <p>Navigate between Home, Student Form, About, and Contact pages without reloading.</p>
        </div>
        <div className="about-card">
          <h2>Event Handling</h2>
          <p>Use onClick, onChange, onSubmit, onFocus, onKeyDown, onKeyUp, and onMouseOver events.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
