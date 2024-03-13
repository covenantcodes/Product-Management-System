import "./App.css";
import Login from "./Auth/Login.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup.tsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
