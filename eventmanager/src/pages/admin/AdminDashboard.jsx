import "../../styles/adminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          Event<span>Sphere</span>
        </div>

        <nav className="sidebar-menu">

          <a href="/" className="active">
            Dashboard
          </a>

          <a href="/">Create Event</a>

          <a href="/">Manage Events</a>

          <a href="/">Registrations</a>

          <a href="/">Attendance</a>

          <a href="/">Certificates</a>


        </nav>

      </aside>

      {/* MAIN CONTENT */}

      <main className="dashboard-main">

        {/* TOPBAR */}

        <div className="topbar">

          <div>
            <h1>Admin Dashboard</h1>
            <p>
              Manage all college events efficiently.
            </p>
          </div>

          <div className="topbar-right">

            <input
              type="text"
              placeholder="Search..."
            />

            <div className="profile">
              A
            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stat-card glass hover-card">
            <p>Total Events</p>
            <h2>128</h2>
            <span>+12%</span>
          </div>

          <div className="stat-card glass hover-card">
            <p>Registrations</p>
            <h2>8,492</h2>
            <span>+25%</span>
          </div>

          <div className="stat-card glass hover-card">
            <p>Attendance</p>
            <h2>96%</h2>
            <span>+8%</span>
          </div>

          <div className="stat-card glass hover-card">
            <p>Certificates</p>
            <h2>3,421</h2>
            <span>+18%</span>
          </div>

        </div>

        {/* ANALYTICS + RECENT */}

        <div className="dashboard-grid">

          {/* ANALYTICS */}

          <div className="analytics-card glass">

            <div className="card-header">

              <h2>Event Analytics</h2>

              <span>This Month</span>

            </div>

            <div className="analytics-bars">

              <div className="bar active"></div>
              <div className="bar"></div>
              <div className="bar active"></div>
              <div className="bar"></div>
              <div className="bar active"></div>
              <div className="bar"></div>
              <div className="bar active"></div>

            </div>

          </div>

          {/* RECENT EVENTS */}

          <div className="recent-events glass">

            <div className="card-header">
              <h2>Recent Events</h2>
            </div>

            <div className="recent-event">

              <div>
                <h3>Hackathon 2026</h3>
                <p>Computer Science</p>
              </div>

              <span>Live</span>

            </div>

            <div className="recent-event">

              <div>
                <h3>Tech Symposium</h3>
                <p>ECE Department</p>
              </div>

              <span>Upcoming</span>

            </div>

            <div className="recent-event">

              <div>
                <h3>Cultural Fest</h3>
                <p>Arts Club</p>
              </div>

              <span>Closed</span>

            </div>

          </div>

        </div>

        {/* TABLE */}

        <div className="table-card glass">

          <div className="card-header">
            <h2>Recent Registrations</h2>
          </div>

          <table>

            <thead>

              <tr>
                <th>Student</th>
                <th>Department</th>
                <th>Event</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Santhosh Kumar</td>
                <td>EEE</td>
                <td>Hackathon</td>
                <td>
                  <span className="status approved">
                    Approved
                  </span>
                </td>
              </tr>

              <tr>
                <td>Arun</td>
                <td>CSE</td>
                <td>Symposium</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>ECE</td>
                <td>Cultural Fest</td>
                <td>
                  <span className="status approved">
                    Approved
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;