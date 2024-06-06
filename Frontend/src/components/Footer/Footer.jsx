import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <span>PlateMate</span>
            <p>Welcome to our gastronomic haven, where every dish tells a story of passion and flavor. Embark on a culinary adventure with us as we curate a symphony of tastes from around the world, showcasing the rich tapestry of cuisines that make dining an exquisite delight.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-556-878</li>
                <li>conatact@platemate.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 &copy; Rohit Joshi - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
