import { johnImg } from "../../utils";
import "./Testimonial.css";

const TestimonialCard = () => {
  return (
    <div className="testimionial-card">
      <p className="review-text">
        “ Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque “
      </p>
      <div className="reviewer d-flex align-items-center gap-top-20">
        <img src={johnImg} alt="john" />
        <p className="review-text">Mr. John Doe</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
