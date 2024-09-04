import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaPlay,
  FaYoutube,
} from "react-icons/fa";
import { logoImg } from "../../utils";
import "./Footer.css";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";
import FooterCopyright from "./FooterCopyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row justify-content-between gy-5 footer-top">
          <div className="col-md-4 col-12">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
            <p className="common-text gap-top-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="d-flex gap-2 align-items-center gap-top-20">
              <FaEnvelope />
              <p className="common-text">
                <Link to="mailto:Hello@Email.com">Hello@Email.com</Link>
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 footer-left gap-top-20">
              <FaPhoneAlt />
              <p className="common-text">
                <Link to="tel:+1 555-555-5555">+1 555-555-5555</Link>
              </p>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">Menu</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Lead Magnet
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">About Us</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Company Information
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Press and Media
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">Legal</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">Social</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaFacebook />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaXTwitter />
                  X.com
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaYoutube />
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaGithub />
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaLinkedin /> Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Copyright  */}
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
