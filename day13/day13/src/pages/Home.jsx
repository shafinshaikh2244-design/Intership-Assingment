import './PageStyles.css'

function Home() {
  return (
    <section className="page-section home-page fade-in">
      <div className="hero-card">
        <h1>Welcome to the Student Portal</h1>
        <p>Explore the student dashboard, register a new student, and learn about the portal.</p>
      </div>
      <div className="info-grid slide-up">
        <div className="info-box">
          <h2>React Routing</h2>
          <p>Navigate easily between Home, Student Form, About, and Contact pages.</p>
        </div>
        <div className="info-box">
          <h2>Event Handling</h2>
          <p>Try the Student Form to see onClick, onChange, onFocus, onKeyDown, and more.</p>
        </div>
      </div>
    </section>
  )
}

export default Home
