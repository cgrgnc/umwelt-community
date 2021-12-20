import React from 'react';
import Hero from "../components/Hero";
import greenbackground from "../assets/greenbackground.jpeg";
const Homepage = () => {
    return (
        <div>
            <div className="second-back-box">
                <img src={greenbackground} alt="backgrn" className='second-back'/>
            </div>
            <Hero/>
        </div>
    );
};

export default Homepage;