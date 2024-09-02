import "./Testimonial.css";

const TestimonialCard = (props) => {
  const { img, author, comment } = props?.reviews;
  return (
    <div className="testimionial-card">
      <p className="review-text">{comment && comment}</p>
      <div className="reviewer d-flex align-items-center gap-top-20">
        <img src={img && img} alt={author && author} />
        <p className="review-title">{author && author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
