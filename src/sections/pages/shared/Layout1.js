import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../../images/Logo.png";
import { Link } from "react-scroll";

const Navbar1 = ({ match }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#EE46B8" };
    } else {
      return { color: "#EE46B8" };
    }
  };

  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <Link
              activeClass="active"
             
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="bio"
              className="nav-link my-2 my-lg-0"
              style={isActive("/")}
            >
              BIO
            </Link>
          </li>
        </ul>
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="videos"
              className="nav-link my-2 my-lg-0"
              style={isActive("/")}
            >
              VIDEOS
            </Link>
          </li>
        </ul>
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="musica"
              className="nav-link my-2 my-lg-0"
              style={isActive("/")}
            >
              ALBUMES/MÚSICA
            </Link>
          </li>
        </ul>
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="galeria"
              className="nav-link my-2 my-lg-0"
              style={isActive("/")}
            >
              GALERIA
            </Link>
          </li>
        </ul>
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contacto"
              className="nav-link my-2 my-lg-0"
              style={isActive("/")}
            >
              CONTACTO
            </Link>
          </li>
        </ul>
        <div className="fusion nav-color" class="nav-link" to="/">
          <img alt="logo" width="180px" height="80px" src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar1);
