import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <ThemeSwitcher />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
