import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-wrapper glass">

          {/* LEFT */}
          <div className="footer-brand">

            <h2>
              Event<span className="gradient-text">Sphere</span>
            </h2>

            <p>
              Premium college event management platform
              for symposiums, hackathons, workshops,
              and cultural experiences.
            </p>

            <div className="footer-socials">

              <a href="/">IG</a>
              <a href="/">LN</a>
              <a href="/">GH</a>
              <a href="/">YT</a>

            </div>

          </div>

          {/* CENTER */}
          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/">Events</a>
            <a href="/">Dashboard</a>
            <a href="/">Certificates</a>

          </div>

          {/* RIGHT */}
          <div className="footer-contact">

            <h3>Contact</h3>

            <p>eventsphere@gmail.com</p>
            <p>+91 9876543210</p>
            <p>Chennai, Tamil Nadu</p>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © 2026 EventSphere. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;