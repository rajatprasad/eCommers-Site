import React,{ useState} from "react";
import "./Footer.css";
import {Button, Modal} from "react-bootstrap"

const Footer = () => {
  
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">Tickly Tots</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms and conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shipping 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {/* Privacy Policy */}
                  </a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="#">
                   Returns and Cancellations
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">Company</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">Contact & Support</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <i className="fas fa-phone"></i>+91 8073132809 ( Monday to Saturday (10AM to 6PM))
                  </span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://api.whatsapp.com/send?phone=918494829712" target="_blank" title="WhatsApp">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i> +91 8494829712
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="mailto:b4xabhishek@gmail.com" aria-hidden="true">
                    <i className="fas fa-envelope"></i>Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="row text-center">
            <div className="col-md-4 box">
              <span className="copyright quick-links">
                Copyright &copy; TicklyTots{" "}
                {(new Date().getFullYear())}
              </span>
            </div>
            <div className="col-md-4 box">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://api.whatsapp.com/send?phone=918494829712">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/ticklytots/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/ticklytots/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 box">
              <ul className="list-inline quick-links">
                <li className="list-inline-item">
                  <a href="#"></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
