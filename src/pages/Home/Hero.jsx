import "./Home.css";

const Hero = () => {
  return (
    <section id="hero-home">
      <div className="hero-bg-overlay"></div>
      <div className="container">
        <div className="col-md-6">
          <h1 className="hero-title">Make Your Dream Home a Reality</h1>
          <p className="section-text gap-top-20">
            Welcome to Odis Slone Realty, where Friends are family!
          </p>
          <p className="section-text gap-top-10">
            As your trusted real estate team in the Greater Dayton, Ohio area,
            we believe in building lasting relationships with our clients for
            decades to come.
          </p>
          <div className="cta-btns">
            <button className="omni-primary-btn gap-right-20">
              Contact Us
            </button>
            <button className="omni-primary-btn">Meet Our agents</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
