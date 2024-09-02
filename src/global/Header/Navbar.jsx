import { IoIosArrowDown } from "react-icons/io";
import { logoImg } from "../../utils";

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
                <a href="/" className="navigation-link">
                  Home
                </a>
              </li>
              <li className="dropdown-link navigation-link">
                About Us
                <IoIosArrowDown />
                <ul className="dropdown-items">
                  <li>
                    <a href="/">Why Us</a>
                  </li>
                  <li>
                    <a href="/">Our Projects</a>
                  </li>
                  <li>
                    <a href="/">Our History</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown-link navigation-link">
                Resources
                <IoIosArrowDown />
                <ul className="dropdown-items">
                  <li>
                    <a href="/">Success Stories</a>
                  </li>
                  <li>
                    <a href="/">Ebooks</a>
                  </li>
                  <li>
                    <a href="/">Magazines</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="navigation-link">
                  Contact Us
                </a>
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
