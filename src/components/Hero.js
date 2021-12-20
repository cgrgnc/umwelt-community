import React from 'react';
import "../styles/hero.css";
import image1 from "../assets/sec-hero.jpeg";

const Hero = () => {
    return (
        <div className='hero-main'>
            <div className="hero-body container">
                <div className="text-col">
                    <div className="title">
                        The World is Starving for Resource
                    </div>
                    <div className="button">Get Started</div>
                </div>
                <div className="second-hero">
                    <div className="sec-hero-box">
                        <div className="div">We help people getting a better resource!</div>
                    </div>
                    <div className="sec-hero-img">
                        <img src={image1} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;