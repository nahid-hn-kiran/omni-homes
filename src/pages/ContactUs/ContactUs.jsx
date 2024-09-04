import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Thank You for your query!");
  };
  return (
    <div className="contact-us-page pb-50">
      <div className="contact-page-hero">
        <div className="container">
          <h2 className="section-title text-center">Contact Us</h2>
          <div className="row justify-content-center gap-top-20">
            <div className="col-sm-8 col-md-6">
              <div className="form contact-form">
                <form
                  className="d-flex flex-column gap-4"
                  onSubmit={handleForm}
                >
                  <input type="text" placeholder="Full Name" required />
                  <input type="text" placeholder="Phone Number" required />
                  <input type="email" placeholder="Enter Your Email" required />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={4}
                    required
                  ></textarea>
                  <div className="text-center">
                    <button type="submit" className="omni-primary-btn">
                      Send
                    </button>
                    <ToastContainer />
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
