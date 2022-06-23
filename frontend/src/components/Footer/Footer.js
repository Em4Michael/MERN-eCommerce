import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import {faYoutube,faTwitter,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h3>About Us</h3>
            <ul className="list-unstyled">
              <li>
                Story
              </li>
              <li>
                Clients 
              </li>
              <li>
              Testimonials
              </li>
            </ul>

          </div>
          {/* Column 2 */}
          <div className="col">
            <h3>Services</h3>
            <ul className="list-unstyled">
              <li>
                Marketing
              </li>
              <li>
                Consulting
              </li>
              <li>
              Development
              </li>
              <li>
              Design
              </li>
            </ul>

          </div>
          {/* Column 3 */}
          <div className="col">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>
                09090-09090
              </li>
              <li>
                ABC Street 
              </li>
              <li>
              XYZ City, XYZ Country
              </li>
            </ul>

          </div>
          {/* Column 4 */}
          <div className="col">
            <h3>Social</h3>
            <ul className="list-unstyled">
              <li>
              <FontAwesomeIcon icon={faFacebook} className="gg" /> Facebook
              </li>
              <li>
              <FontAwesomeIcon icon={faInstagram} className="gg" /> Instagram 
              </li>
              <li>
              <FontAwesomeIcon icon={faYoutube} className="gg" /> Youtube
              </li>
              <li>
              <FontAwesomeIcon icon={faTwitter} className="gg" /> Twitter
              </li>
            </ul>

          </div>
        
        </div>
      
        <p class="copyright">&copy; Copyright 2022 - Em4Michael</p>
      </div>
    </footer>
  )
}

export default Footer;