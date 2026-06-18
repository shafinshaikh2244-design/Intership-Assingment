import './PageStyles.css'

function About() {
  return (
    <section className="page-section about-page fade-in">
      <h1>About Student Portal</h1>
      <p>This portal demonstrates React routing, event handling, and component lifecycle using useEffect.</p>
      <div className="about-grid slide-up">
        <div className="about-card">
          <h2>Routing</h2>
          <p>Navigate between pages without reloading the browser.</p>
        </div>
        <div className="about-card">
          <h2>Clean Structure</h2>
          <p>Separate components and pages keep the app organized and easy to maintain.</p>
        </div>
      </div>
    </section>
  )
}

export default About
