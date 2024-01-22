import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/pages/About"
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { projectsData } from './projectsData';



const App = () => {
  return (
   
    <div>
   
       <Router>
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='projects' element={<Projects ProjectsData = {projectsData}/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
