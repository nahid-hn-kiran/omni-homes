import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page pb-50">
      <div className="contact-page-hero">
        <div className="container">
          <h2 className="section-title text-center">Contact Us</h2>
          <div className="row justify-content-center gap-top-20">
            <div className="col-sm-8 col-md-6">
              <div className="form contact-form">
                <form className="d-flex flex-column gap-4">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Phone Number" />
                  <input type="email" placeholder="Enter Your Email" />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={4}
                  ></textarea>
                  <div className="text-center">
                    <button type="submit" className="omni-primary-btn">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="about-core-values">
            <ValuesCard />
            <Testimonial />
            <div className="spacer-212"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
