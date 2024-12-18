import { Link } from "react-scroll";
import React from "react";

import logo from '../assets/website-logo.png'

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src={logo} alt="Logoipsum" width="50"/>
        </div>
        <div className="footer--items">
            
        </div>
      </div>
    </footer>
  );
}

export default Footer;