import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-column">
                <h4> Company</h4>
                <ul>
                  <li>
                    <a href="#">About Us </a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Get Help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Return</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Online Order</h4>
                <ul>
                  <li>
                    <a href="#">Breakfast</a>
                  </li>
                  <li>
                    <a href="#">Lunch</a>
                  </li>
                  <li>
                    <a href="#">Evening</a>
                  </li>
                  <li>
                    <a href="#">Dinner</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.facebook.com/" target={"_blank"}><i className="fab fa-facebook-f" ></i></a>
                  <a href="https://twitter.com/AbhishekSaware1" target={"_blank"}><i className="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/" target={"_blank"}><i className="fab fa-instagram" ></i></a>
                  <a href="https://www.linkedin.com/in/abhishek-saware-515112193/" target={"_blank"}><i className="fab fa-linkedin-in" ></i></a>
                  <a href="https://github.com/abhisaware123" target={"_blank"}><i className="fab fa-github" ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright"> 
            <h4>Made with Love by Abhishek Saware</h4>
            <hr style={{align:"center"}}/>
            <p>All rights are reserved <span>  &copy; </span> </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
