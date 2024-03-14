import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.tsx";
import Signup from "./Auth/Signup.tsx";
import Dashboard from "./Dashboard/Dashboard.tsx";
import Profile from "./Profile/Profile.tsx";
import Inventory from "./Inventory/Inventory.tsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
