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

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row justify-content-between gy-5 footer-top">
          <div className="col-md-4 col-12">
            <img src={logoImg} alt="Logo" />
            <p className="common-text gap-top-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="d-flex gap-2 align-items-center gap-top-20">
              <FaEnvelope />
              <p className="common-text">Hello@Email.com</p>
            </div>
            <div className="d-flex align-items-center gap-2 footer-left gap-top-20">
              <FaPhoneAlt />
              <p className="common-text">+1 555-555-5555</p>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">Menu</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Lead Magnet
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">About Us</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Company Information
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Press and Media
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">Legal</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaPlay />
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h3 className="omni-card-title">Social</h3>
            <ul className="d-flex flex-column gap-3 gap-top-20">
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaXTwitter />
                  X.com
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaYoutube />
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaGithub />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="d-flex align-items-center gap-2 common-text"
                >
                  <FaLinkedin /> Linkedin
                </a>
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
