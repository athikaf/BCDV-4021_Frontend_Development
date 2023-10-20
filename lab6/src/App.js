import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

function Dashboard() {
  return <h2>Dashboard</h2>;
}
function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
function UserProfile({ match }) {
  const userId = match.params.id;
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
        ></Route>
        <Route path="/login" component={Login} />
        <Route path="/user/:id" component={UserProfile} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
