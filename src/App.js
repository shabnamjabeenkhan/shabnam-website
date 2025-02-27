import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { projectsData } from "./projectsData";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    document.title = 'Shabnam Khan Portfolio Website';
  
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
