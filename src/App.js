import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <navbar
          className="navbar"
          style={{ position: "fixed", top: "0", left: "0" }}
        >
          <ul className="mx-auto">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <li>Menu</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>About</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li>Contact</li>
            </Link>
          </ul>
        </navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
