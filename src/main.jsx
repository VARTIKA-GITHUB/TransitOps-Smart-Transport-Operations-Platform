import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const data = [
  ["Mercedes Actros 1845", "MH 12 AB 4182", "On trip", "Amit Sharma", "78"],
  ["Tata Prima 5530.S", "KA 01 MN 7834", "Available", "—", "92"],
  ["Ashok Leyland BOSS", "DL 3C AR 9932", "In shop", "—", "45"],
  ["Eicher Pro 3015", "TN 09 BX 2011", "Available", "—", "66"],
];
function Metric({ n, x, c = "#8172f5" }) {
  return (
    <div className="metric">
      <div>
        <p>{n}</p>
        <h2>{x}</h2>
        <small>
          +8.2% <span>vs. last month</span>
        </small>
      </div>
      <svg viewBox="0 0 100 100">
        <polyline
          points="0,55 15,44 30,57 45,30 60,44 75,20 100,30"
          fill="none"
          stroke={c}
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
function Dashboard({ user, onLogout }) {
  let [a, setA] = useState("Overview"),
    [dark, setDark] = useState(false),
    [q, setQ] = useState(""),
    [m, setM] = useState(false),
    [toast, setToast] = useState("");
  let menus = {
    manager: [
      "Overview",
      "Fleet",
      "Drivers",
      "Trips",
      "Maintenance",
      "Fuel logs",
      "Expenses",
      "Reports",
      "Users",
      "Settings",
    ],
    driver: ["Overview", "My Trips", "Profile"],
    safety: ["Overview", "Drivers", "Maintenance", "Safety Reports"],
    finance: ["Overview", "Expenses", "Fuel logs", "Reports", "Analytics"],
  }[user.key];
  let go = () => {
    setM(false);
    setToast("Trip created as draft — ready to dispatch.");
    setTimeout(() => setToast(""), 2500);
  };
  return (
    <div className={"app " + (dark ? "dark" : "")}>
      <aside>
        <div className="brand">
          <b>↗</b> transit<span>ops</span>
        </div>
        <div className="workspace">
          <i>
            {user.name
              .split(" ")
              .map((x) => x[0])
              .join("")}
          </i>
          <div>
            <strong>{user.name}</strong>
            <small>{user.role}</small>
          </div>
          ⌄
        </div>
        <nav>
          {menus.map((n) => (
            <button
              key={n}
              className={a === n ? "active" : ""}
              onClick={() => setA(n)}
            >
              <span>◈</span>
              {n}
              {n === "Maintenance" && <em>3</em>}
            </button>
          ))}
        </nav>
        <div className="sidefoot">
          <button onClick={() => setDark(!dark)}>
            ◐ {dark ? "Light mode" : "Dark mode"}
            <u />
          </button>
          <div className="user">
            <i>{user.name[0]}</i>
            <div>
              <strong>{user.name}</strong>
              <small>{user.email}</small>
            </div>
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      </aside>
      <main>
        <header>
          <div>
            <p className="crumb">
              OPERATIONS / <b>{a.toUpperCase()}</b>
            </p>
            <h1>
              {a === "Overview"
                ? "Good morning, " + user.name.split(" ")[0] + "!"
                : a}
            </h1>
            <p className="sub">
              Here’s what’s happening with your fleet today.
            </p>
          </div>
          <div className="actions">
            <button className="new" onClick={() => setM(true)}>
              ＋ New trip
            </button>
          </div>
        </header>
        <section className="metrics">
          <Metric n="Active vehicles" x="48" />
          <Metric n="Fleet utilization" x="76.4%" c="#31c887" />
          <Metric n="Active trips" x="16" c="#f4a524" />
          <Metric n="Monthly expenses" x="$84,320" c="#ef7184" />
        </section>
        <section className="charts">
          <div className="panel revenue">
            <div className="pt">
              <div>
                <h3>Revenue overview</h3>
                <p>Revenue & expenses this year</p>
              </div>
            </div>
            <div className="bars">
              {[45, 65, 50, 74, 55, 89, 72, 78, 58, 92, 68, 86].map((h, i) => (
                <div key={i}>
                  <b style={{ height: h * 0.48 + "%" }} />
                  <b style={{ height: h + "%" }} />
                </div>
              ))}
            </div>
          </div>
          <div className="panel status">
            <div className="pt">
              <div>
                <h3>Fleet status</h3>
                <p>Current vehicle availability</p>
              </div>
            </div>
            <div className="donutrow">
              <div className="donut">
                48<small>vehicles</small>
              </div>
              <div className="statuslist">
                <p>
                  <i />
                  Available <b>24</b>
                </p>
                <p>
                  <i />
                  On trip <b>16</b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="panel vehicles">
            <div className="pt">
              <div>
                <h3>Vehicle overview</h3>
                <p>Live status of your fleet</p>
              </div>
            </div>
            <div className="search">
              ⌕
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search vehicles..."
              />
            </div>
            <table>
              <tbody>
                {data
                  .filter((r) =>
                    r.join("").toLowerCase().includes(q.toLowerCase())
                  )
                  .map((r) => (
                    <tr key={r[1]}>
                      <td>
                        <strong>{r[0]}</strong>
                        <small>{r[1]}</small>
                      </td>
                      <td>{r[2]}</td>
                      <td>{r[3]}</td>
                      <td>{r[4]}%</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      {m && (
        <div className="overlay">
          <div className="modal">
            <button className="close" onClick={() => setM(false)}>
              ×
            </button>
            <h2>Create a new trip</h2>
            <div className="form">
              <label>
                Origin
                <input />
              </label>
              <label>
                Destination
                <input />
              </label>
            </div>
            <button className="new full" onClick={go}>
              Create trip →
            </button>
          </div>
        </div>
      )}
      {toast && <div className="toast">✓ {toast}</div>}
    </div>
  );
}
function App() {
  let [user, setUser] = useState(null),
    [email, setEmail] = useState("manager@transitops.com"),
    [password, setPassword] = useState("Password@123"),
    [error, setError] = useState("");
  useEffect(() => {
    let t = localStorage.getItem("transitops_token");
    if (t)
      fetch("http://localhost:3001/api/auth/me", {
        headers: { Authorization: "Bearer " + t },
      })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((x) => setUser(x.user))
        .catch(() => localStorage.removeItem("transitops_token"));
  }, []);
  let login = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let r = await fetch("http://localhost:3001/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }),
        x = await r.json();
      if (!r.ok) throw Error(x.error);
      localStorage.setItem("transitops_token", x.token);
      setUser(x.user);
    } catch (x) {
      setError(x.message);
    }
  };
  if (user)
    return (
      <Dashboard
        user={user}
        onLogout={() => {
          localStorage.removeItem("transitops_token");
          setUser(null);
        }}
      />
    );
  return (
    <div className="overlay">
      <form className="modal" onSubmit={login}>
        <div className="brand">
          <b>↗</b> transit<span>ops</span>
        </div>
        <h2>Welcome back</h2>
        <p>Sign in to manage your transport operations.</p>
        <div className="form">
          <label>
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </label>
          <label>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </label>
        </div>
        {error && <p className="red">{error}</p>}
        <button className="new full">Sign in</button>
        <small>Demo: manager, driver, safety, or finance @transitops.com</small>
      </form>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
