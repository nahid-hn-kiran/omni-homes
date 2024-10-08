import { Link } from "react-router-dom";
import "./Home.css";

const Hero = () => {
  return (
    <section id="hero-home">
      <div className="hero-bg-overlay"></div>
      <div className="container">
        <div className="col-lg-6">
          <h1 className="hero-title">Make Your Dream Home a Reality</h1>
          <p className="section-text gap-top-20">
            Welcome to Omni Homes Realty, where Friends are family!
          </p>
          <p className="section-text gap-top-10">
            As your trusted real estate team in the Greater Dayton, Ohio area,
            we believe in building lasting relationships with our clients for
            decades to come.
          </p>
          <div className="cta-btns">
            <Link to="/contact-us" className="omni-primary-btn gap-right-20">
              Contact Us
            </Link>
            <Link to="/about-us" className="omni-primary-btn cta-2">
              Meet Our agents
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
