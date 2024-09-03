import { IoIosArrowDown } from "react-icons/io";
import { logoImg } from "../../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-20">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo-area">
            <img src={logoImg} alt="Logo" />
          </div>
          <div>
            <ul className="main-menu">
              <li>
                <Link to="/" className="navigation-link">
                  Home
                </Link>
              </li>
              <li className="dropdown-link">
                <Link to="/about-us" className="navigation-link">
                  About Us
                </Link>
                <IoIosArrowDown />
                <ul className="dropdown-items">
                  <li>
                    <Link to="/">Why Us</Link>
                  </li>
                  <li>
                    <Link to="/">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/">Our History</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-link">
                <Link to="/resources" className="navigation-link">
                  Resources
                </Link>
                <IoIosArrowDown />
                <ul className="dropdown-items flex flex-column gy-4">
                  <li>
                    <Link to="/">Success Stories</Link>
                  </li>
                  <li>
                    <Link to="/">Ebooks</Link>
                  </li>
                  <li>
                    <Link to="/">Magazines</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us" className="navigation-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-btn">
            <button className="omni-primary-btn">Lead Magnet</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
