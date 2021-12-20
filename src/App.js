import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import greenbackground from "../src/assets/greenbackground.jpeg";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import {useState, useEffect} from "react";


function App() {
  
  return (
    <Router>
      <img src={greenbackground} alt="backgrn" className='first-back'/>
      {/* <div className="second-back-box">
        <img src={greenbackground} alt="backgrn" className='second-back'/>
      </div> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="*" element={<Homepage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
