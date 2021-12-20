import React, {useRef} from 'react';
import "../styles/header.css";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll/modules';

const Header = () => {
    const mobile = useRef();
    function openToggle(){
        mobile.current.classList.add("show");
    }
    function closeToggle(){
        mobile.current.classList.remove("show");
    }
    return (
        <div className='header-main'>
            <div className="header-body container">
                <div className="icon" onClick={()=> scroll.scrollToTop()}>future</div>
                <div className="menu">
                    <div className="categorie">About</div>
                    <div className="categorie">Events</div>
                    <div className="categorie">Contact</div>
                    <Link to="/login" className="categorie login">Get Started</Link>
                </div>
                <div className="hamburger-menu">
                    <i className="fas fa-bars" onClick={openToggle}></i>
                </div>
            </div>
            <div className="header-mobile" ref={mobile}>
                <div className="m-col">
                    <div className="menu">
                        <div className="categorie">About</div>
                        <div className="categorie">Events</div>
                        <div className="categorie">Contact</div>
                        <Link to="/login" className="categorie login">Get Started</Link>
                    </div>
                </div>
                <div className="m-col">
                    <i className="far fa-times-circle" onClick={closeToggle}></i>
                </div>
            </div>
        </div>
    );
};

export default Header;