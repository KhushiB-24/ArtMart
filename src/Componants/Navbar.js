import React from "react";
import { Link, UNSAFE_ErrorResponseImpl } from "react-router-dom";
import './Navbar.css';
import logo from "../Images/ArtMart_new.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid main-nav">
        <div className="row">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div className="container-fluid">
                <a className="navbar-brand mx-3" href="#">
                  <img src={logo} alt="logo" />
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
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item mx-3">
                      <Link
                        to="/home"
                        className="nav-link active"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/explore" className="nav-link">
                        Explore
                      </Link>
                    </li>
                    <li className="nav-item dropdown mx-3">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Categories
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        <i className="bi bi-search mx-2 fs-4" />
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        <i className="bi bi-bag-check-fill mx-2 fs-4" />
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                      >
                        <i className="bi bi-person-fill mx-2 fs-3" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link to="/signup" className="dropdown-item">
                            SignUp
                          </Link>
                        </li>
                        <li>
                          <Link to="/signin" className="dropdown-item">
                            SignIn
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
