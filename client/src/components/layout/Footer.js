import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div id="footer">
        <div class="container">
          <div class="row row-bottom-padded-sm">
            <div class="col-md-4 col-sm-4 col-xs-12 fh5co-footer-link">
              <h3 class="mission">Mission Statement</h3>
              <p class="we">We're dedicated to helping you make the most of your date by providing you with an easy-to-use platform that connect you with other Developers by posting Questions and get help from others.</p>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
              <h3 class="whowe">Check Us</h3>
              <ul class="no-bullets">
                <li><a href="about-us.html">About Us</a>
                </li>
                <li><a href="about-us.html#fh5co-our-services">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
              <h3 class="service">Services</h3>
              <ul class="no-bullets">
                <li><a href="#">Features</a>
                </li>
                <li><a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
              <h3 class="help">Help</h3>
              <ul class="no-bullets">
                <li><a href="home.html">FAQ</a>
                </li>
                <li><a href="home.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <p class="copyright">
            Copyright {new Date().getFullYear()} &copy; <a href ="https://www.linkedin.com/in/ferew-tucho-627880167/" trget="_blank">Ferew</a> | <a href ="https://www.linkedin.com/in/nebiyou-kebede-78a9b4168/">Nebiyou</a> All Rights Reserved.
	            </p>

        </div>
      </div>

    </footer>
  );
};
