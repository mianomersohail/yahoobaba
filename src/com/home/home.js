

import React, { useState } from 'react';
import '../homesidebar/homesidebar.css';


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
                                <li className='slide-red'><a href="">LEARN HTML</a></li>
                                <li className='slide-second'><a href="">LEARN CSS</a></li>
                                <li className='slide-red'><a href="">LEARN SAAS</a></li>
                                <li className='slide-second'><a href="">LEARN Bootstrap</a></li>
                                <li className='slide-red'><a href="">LEARN Javascript</a></li>
                                <li className='slide-second'><a href="">LEARN Advace js</a></li>
                                <li className='slide-red'><a href="">LEARN  jQuery</a></li>
                                <li className='slide-second'><a href="">LEARN PHP</a></li>
                                <li className='slide-red'><a href="">LEARN MySQL</a></li>
                                <li className='slide-second'><a href="">LEARN SVG</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                       <h2>Courses</h2>
                        <hr></hr>
                        
                        
                        
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
