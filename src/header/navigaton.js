import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Aboutus from '../pages/about';
import Contactus from '../pages/contactus';
import Skills from '../pages/skills';
import Stories from '../pages/stories';
import Shop from '../pages/shop';


const Navigation=()=> {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
