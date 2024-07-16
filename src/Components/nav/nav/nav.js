import { Link } from "react-router-dom";
import List from "./List";
import "../nav.css";
import Home from "../Homes/Home";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fa fa-address-card" href="#">
            <span className="nav-getresponse">GetReponse</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active nav-active nav-relative-one"
                  aria-current="page"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-relative-two" href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link nav-relative-three" aria-disabled="true">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-relative-four" aria-disabled="true">
                  Enterprice
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn login-btn" type="submit">
                Login
              </button>
              <button className="btn signup" type="submit">
                Sign up for free
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Home/>
    </>
  );
}

export default Nav;
