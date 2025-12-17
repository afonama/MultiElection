import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / App Info */}
        <div className="footer-section brand">
          <h3>🗳️ Lumix</h3>
          <p>Empowering transparent and secure digital elections for institutions and organizations.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            {["Home", "Elections", "Results", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Connect</h4>
          <div className="footer-icons">
            {[FaFacebook, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => {
              const links = [
                "https://facebook.com",
                "https://twitter.com",
                "https://instagram.com",
                "https://github.com",
              ];
              return (
                <a key={i} href={links[i]} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Lumix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
