import React from "react";
import "./contact-us.scss";

const Contact = () => {
  return (
    <footer>
      <div className="social2">
        <a
          href="https://www.facebook.com/lostfusion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook" />
        </a>

        <a
          href="https://www.instagram.com/lostfusion_oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram" />
        </a>

        <a href="tel:+525574127694">
          <i class="fab fa-whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Contact;
