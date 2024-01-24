import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { projectsData } from "./projectsData";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        {" "}
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
