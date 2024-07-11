import './nav.css'
import {Link } from 'react-router-dom'
function Nav() {
    return (
        <>
            <div className="container-fluid">
                <div className="row nav-row">
                   


                        <div className="col-lg-2 nav-img ">
                            <img src="https://www.yahoobaba.net/public/frontend/images/logo.svg" />

                        </div>
                        
                        <div className="col-lg-7 nav-search-btn linear">
                            <div>
                                <input className="search" type="search" placeholder="Search Courses" />
                                <button className="search-btn">Search</button>

                            </div>

                        </div>
                
                    <div className="col-lg-3 nav-li">
                        <ul className="nav-icons">
                            <li><a href=""><i className="fa fa-youtube-play"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-instagram"></i></a></li>
                            <li><a href="" className="icon-btn-login">Login</a></li>
                            <li><a href="" className="icon-btn-login">Signup</a></li>
                        </ul>

                    </div>

                    <div className="col-lg-10 offset-xl-2 second-nav">
                        <ul className="second-nav-ul">
                            <li><Link to="/home">HOME</Link></li>
                            <li><a href="">WEB RESOURCES</a></li>
                            <li><Link to="/interview" href="">INTERVIEW QUESTIONS</Link></li>
                            <li className="second-none"><a href="">WEB TRENDS</a></li>
                            <li className="second-ul-b second-none"><a href="">CODE PROJECTS</a></li>
                            <li className="second-ul-b second-none"><a href="">FREE TEMPLATES</a></li>
                        </ul>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Nav;