import { FaLocationCrosshairs } from "react-icons/fa6";

const OurLocations = () => {
  return (
    <div className="locations gap-top-45">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 gy-4 align-items-center">
          <div className="col">
            <h2 className="section-title">
              The Locations for Odis <br /> Slone Realty are:
            </h2>
            <div className="location row row-cols-2 gap-top-45">
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Kettering</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Tipp City</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Beavercreek</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Centerville</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Fairborn</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Englewood</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Miamisburg</p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-4">
                  <p className="location-icon">
                    <FaLocationCrosshairs />
                  </p>
                  <p className="city-title">Clayton</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1144537883847!2d90.38935528747079!3d23.778938332646714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7524aa2ccef%3A0x783784ee15084b1f!2sOmnitech%20Solutions%20Limited!5e0!3m2!1sen!2sbd!4v1722607267357!5m2!1sen!2sbd"
                width="100%"
                height="442"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocations;
