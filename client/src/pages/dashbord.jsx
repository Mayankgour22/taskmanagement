const Dashboard=()=>{
  const user = localStorage.getItem("user")
    return (
      <>
        <div className="dashboard-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <h2>Dashboard</h2>
            <nav>
              <ul>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
                <li>
                  <a href="#">Users</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="/createuser">Create new user</a>
                </li>
                <li>
                  <a href="/assigntask">Assign Task to user</a>
                </li>
                <li>
                  <a href="/taskdetailes"> Task Detailes</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <header>
              <h1>Welcome, {user}</h1>
            </header>
            <section className="cards">
              <div className="card">
                Users
                <br />
                <span>1,024</span>
              </div>
              <div className="card">
                Revenue
                <br />
                <span>$10,240</span>
              </div>
              <div className="card">
                Visits
                <br />
                <span>24,000</span>
              </div>
              <div className="card">
                Feedback
                <br />
                <span>321</span>
              </div>
            </section>
          </main>
        </div>
      </>
    );
}
export default Dashboard;