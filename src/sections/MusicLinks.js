import React from "react";
import { Link } from "react-scroll";
import { withRouter } from "react-router-dom";

const MusicLinks = ({ match }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#EE46B8" };
    } else {
      return { color: "#EE46B8" };
    }
  };
  return (
    <footer>
      <div className="social">
        <a
          href="https://www.facebook.com/lostfusion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-f"></i>
        </a>

        <a
          href="https://www.instagram.com/lostfusion_oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://open.spotify.com/artist/7KZHOPhqGOczZDbLBCUskM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-spotify"></i>
        </a>

        <a
          href="https://music.apple.com/us/artist/lost-fusi%C3%B3n/1507822747?fbclid=IwAR1CH44LyLI_Lf-qaS85cWmEwkH4apy47cd6a5u7E4dKXNLVK2-3Yb-C9W4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-apple"></i>
        </a>

        <a
          href="https://www.youtube.com/channel/UCRHNmMDXY8N0i3C8Pp9M-nA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-youtube"></i>
        </a>

        <div className="home-icon">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="home"
            className="nav-link my-2 my-lg-0"
            style={isActive("/")}
          >
            <i class="fas fa-home"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(MusicLinks);
