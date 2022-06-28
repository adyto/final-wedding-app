import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <div className="container center-text">
        <div className="footer__copyright">
          <h4>&copy; By Dewi & Adi</h4>
        </div>
        <a href="/#" className="footer__logo">
          Powered by Trias Zaen Mutaqin
        </a>
        <div className="footer__socials">
          <a href="https://www.instagram.com/tzm_12/">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/iaz.zaen/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
