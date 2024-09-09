import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { logoImg } from "../../utils";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleMobileMenu = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <nav className="py-20 omni-nav-menu">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo-area">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
          </div>
          <div>
            <ul className="main-menu d-none d-md-flex">
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
            {/* Mobile Menu  */}
            <div className="responsive-menu">
              <div
                onClick={handleMobileMenu}
                className="responsive-bar d-flex justify-content-end d-md-none"
              >
                {show ? <IoMdClose /> : <FaBars />}
              </div>
              <div
                className={`mobile-menu ${show ? "open" : "close"} d-md-none`}
              >
                <ul>
                  <li>
                    <Link to="/" className="navigation-link">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown-link">
                    <Link to="/about-us" className="navigation-link me-2">
                      About Us
                    </Link>
                    <IoIosArrowDown />
                    <ul className="mobile-dropdown-items">
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
                    <Link to="/resources" className="navigation-link me-2">
                      Resources
                    </Link>
                    <IoIosArrowDown />
                    <ul className="mobile-dropdown-items flex flex-column gy-4">
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
            </div>
          </div>
          <div className="header-btn d-none d-lg-block">
            <Link to="/contact-us" className="omni-primary-btn">
              Lead Magnet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
