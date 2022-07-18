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
          Powered by Adi Yulianto
        </a>
        <div className="footer__socials">
          <a href="https://www.instagram.com/ady.to/">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/BRANDITS/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
