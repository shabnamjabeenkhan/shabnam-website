import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About"
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { projectsData } from './projectsData';
import Nav from "./components/Nav";
import { Link } from 'react-router-dom';


function App() {   return (     <Router>      <nav>        <ul>          <li>           
   <Link to="/about">About</Link>          </li>          <li>            
    <Link to="/projects">Projects</Link>          </li>          <li>           
       <Link to="/contact">Contact</Link>          </li>        </ul>      </nav>      
       <Switch>        <Route path="/" exact component={About} />       
        <Route path="/about" component={About} />        
        <Route path="/contact" component={Contact} />      </Switch>    </Router>  ); }

export default App;
