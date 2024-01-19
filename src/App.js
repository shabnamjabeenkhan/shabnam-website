import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/pages/About"

const App = () => {
  return (
   
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<About/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
