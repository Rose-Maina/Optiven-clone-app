import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import About from './components/About';
import Home from './components/Home';
import Testimonials from './components/Testimonials.js';
import Contact from './components/Contact';
import Properties from './components/Properties';
import InformationCenter from './components/InformationCentre';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <div className="App">
      <Navbar1/>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="property" element={<Properties/>}></Route>
          <Route path="/InformationCentre" element={<InformationCenter/>}></Route>
          <Route path="/testimonials" element={<Testimonials/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </div>
    </>
  );
}

export default App;