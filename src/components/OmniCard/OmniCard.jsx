import "./OmniCard.css";

const OmniCard = (props) => {
  const { img, title, description } = props.cardContent;
  return (
    <div className="col-4">
      <div className="omni-card">
        <div className="omni-card-thumbnail">
          <a href="/">
            <img src={img} alt={title} />
          </a>
        </div>
        <div className="omni-content">
          <a href="/" className="omni-card-title">
            {title}
          </a>
          <p className="common-text gap-top-10">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OmniCard;
