import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar(props) {

  let labelText = "";
  if(props.mode === 'light'){
    labelText = 'dark';
  }else{
    labelText = 'light';
  }

  let modeText = "Enable Dark Mode";


  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <img src={logo} height={40} width={100} alt="" />
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.homePageText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="mode"
                onClick={props.toggleMode}
              />
              <label className={`form-check-label text-${labelText}`}>{props.mode === 'light' ? modeText: "Enable White mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  homePageText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
  homePageText: "Home",
  mode: 'light'
};
