import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../../images/Logo.png";

const Navbar2 = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark " color="light">
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
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a
              href="/"
              className="nav-link my-2 my-lg-0"
              style={{ color: "#EE46B8" }}
            >
              REGRESAR A HOME
            </a>
          </li>
        </ul>
        <div className="fusion nav-color" class="nav-link" to="/">
          <img alt="logo" width="180px" height="80px" src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar2);
