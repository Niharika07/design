import './App.css';
import React, { Component } from "react"
import Home from "./Home"
import Topnav from './Navbar.js';
import Footer from './Footer.js';
import About from './About.js';
import Healthcare from './Healthcare.js';
import Groupfinder from './Groupfinder';
import Questarde from './Questrade';
import Map from './Map';
import { Routes, Route } from "react-router-dom";

class App extends Component {
    render() {
      return (
        <div className="App">
        <Topnav />

        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/healthcare" element={<Healthcare/>} />
          <Route exact path="/groupfinder" element={<Groupfinder/>} />
          <Route exact path="/questrade" element={<Questarde/>} />
          <Route exact path="/map" element={<Map/>} />
          <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
        </div>
       

      )
    }
  }

export default App;