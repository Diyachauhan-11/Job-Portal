import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <footer>
        <div>
          <img src="/diya-logo.jpg" alt="Job Portal Logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Greater Noida, India</li>
            <li>diyac490@gmail.com</li>
            <li>+91 8218916147</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span><FaSquareXTwitter /></span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span><FaSquareInstagram /></span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span><FaYoutube /></span>
                <span>YouTube</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span><FaLinkedin /></span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div className="copyright">
        &copy; 2025 Diya Chauhan. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

