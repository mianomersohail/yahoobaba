
import React, { useState } from 'react';
import './homesidebar.css';

function Homesidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <button className='hamburger-menu' onClick={toggleMenu}>
                            &#9776;
                        </button>
                        <div className={`first-slide-bar ${menuOpen ? 'open' : ''}`}>
                            <ul className='first-slide-bar-ul'>
                                <li className='slide-red'><a href="">PHP Questions</a></li>
                                <li className='slide-second'><a href="">Html Questions</a></li>
                                <li className='slide-red'><a href="">jQuery Questions</a></li>
                                <li className='slide-second'><a href="">Javascript Questions</a></li>
                                <li className='slide-red'><a href="">Css Questions</a></li>
                                <li className='slide-second'><a href="">MySQL Questions</a></li>
                                <li className='slide-red'><a href="">SAAS Questions</a></li>
                                <li className='slide-second'><a href="">SQL Questions</a></li>
                                <li className='slide-red'><a href="">Python Questions</a></li>
                                <li className='slide-second'><a href="">Java Questions</a></li>
                                <li className='slide-red'><a href="">Vue Js Questions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <h1 className='home-side-interview'>Interview Questions</h1>
                        <hr />
                        <div className='side-home-box1'>
                            <div className='box1'><p>PHP</p></div>
                            <div className='box1'><p>HTML</p></div>
                            <div className='box1'><p>jQuery</p></div>
                            <div className='box1'><p>Javascript</p></div>
                        </div>
                        <div className='side-home-box1'>
                            <div className='box1'><p>CSS</p></div>
                            <div className='box1'><p>MySQL</p></div>
                            <div className='box1'><p>SAAS</p></div>
                            <div className='box1'><p>SQL</p></div>
                        </div>
                        <div className='side-home-box1'>
                            <div className='box1'><p>LESS</p></div>
                            <div className='box1'><p>PYTHON</p></div>
                            <div className='box1'><p>JAVA</p></div>
                            <div className='box1'><p>VUE JS</p></div>
                        </div>
                    </div>
                    <div className='col-md-3 home-side-imgs'>
                        <img className='home-side-img' src="https://www.yahoobaba.net/public/frontend/images/sidelaravel.jpg" alt="Laravel" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homesidebar;
