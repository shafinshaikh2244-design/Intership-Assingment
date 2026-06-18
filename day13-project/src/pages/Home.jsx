import './PageStyles.css';

function Home() {
  return (
    <section className="page-section home-page">
      <div className="hero-card fade-in">
        <h1>Welcome to the Student Portal</h1>
        <p>Access schedules, manage student data, and explore campus announcements.</p>
      </div>
      <div className="info-grid slide-up">
        <div className="info-box">
          <h2>Quick Access</h2>
          <p>Use the navbar to move between pages and try the event-driven student form.</p>
        </div>
        <div className="info-box">
          <h2>Animations</h2>
          <p>Simple page transitions and hover effects make the portal feel interactive.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
