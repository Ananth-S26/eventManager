import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Background Glow */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="container hero-container">

          <div className="hero-left">

            <div className="hero-badge glass">
              PREMIUM EVENT EXPERIENCE
            </div>

            <h1>
              Discover The Future Of
              <span className="gradient-text"> College Events</span>
            </h1>

            <p className="hero-description">
              Participate in symposiums, hackathons, workshops,
              technical contests, and cultural experiences —
              all through one modern premium platform.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Events
              </button>

              <button className="secondary-btn">
                View Dashboard
              </button>
            </div>

            {/* STATS */}
            <div className="hero-stats">

              <div className="stat-card glass hover-card">
                <h2>120+</h2>
                <p>Events</p>
              </div>

              <div className="stat-card glass hover-card">
                <h2>10K+</h2>
                <p>Participants</p>
              </div>

              <div className="stat-card glass hover-card">
                <h2>25+</h2>
                <p>Departments</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">

            <div className="dashboard-preview glass">

              <div className="dashboard-top">
                <h3>Event Analytics</h3>

                <span>Live</span>
              </div>

              <div className="analytics-bars">
                <div className="bar"></div>
                <div className="bar active"></div>
                <div className="bar"></div>
                <div className="bar active"></div>
                <div className="bar"></div>
                <div className="bar active"></div>
                <div className="bar"></div>
              </div>

              <div className="dashboard-cards">

                <div className="mini-card glass">
                  <h4>5,092</h4>
                  <p>Registrations</p>
                </div>

                <div className="mini-card glass">
                  <h4>98%</h4>
                  <p>Attendance</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED EVENTS */}

      <section className="featured-section">

        <div className="container">

          <div className="section-heading">

            <h2>
              Featured <span className="gradient-text">Experiences</span>
            </h2>

            <p>
              Explore the most anticipated events happening this semester.
            </p>

          </div>

          <div className="events-grid">

            <div className="event-card glass hover-card">

              <div className="event-image"></div>

              <div className="event-content">

                <span className="event-tag">TECH</span>

                <h3>Hackathon 2026</h3>

                <p>
                  Collaborate, innovate, and build impactful
                  projects with top minds.
                </p>

                <button className="primary-btn small-btn">
                  Register Now
                </button>

              </div>

            </div>

            <div className="event-card glass hover-card">

              <div className="event-image"></div>

              <div className="event-content">

                <span className="event-tag">SYMPOSIUM</span>

                <h3>Tech Summit</h3>

                <p>
                  Workshops, coding rounds, guest lectures,
                  and premium networking.
                </p>

                <button className="primary-btn small-btn">
                  Register Now
                </button>

              </div>

            </div>

            <div className="event-card glass hover-card">

              <div className="event-image"></div>

              <div className="event-content">

                <span className="event-tag">CULTURAL</span>

                <h3>Fest Night</h3>

                <p>
                  Experience music, dance, entertainment,
                  and unforgettable memories.
                </p>

                <button className="primary-btn small-btn">
                  Register Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-box glass">

            <h2>
              Ready To Showcase Your Talent?
            </h2>

            <p>
              Join thousands of students participating in
              premium college events across departments.
            </p>

            <button className="primary-btn">
              Get Started
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;