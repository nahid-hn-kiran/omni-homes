import "./OmniCard.css";

const OmniCard = (props) => {
  const { img, title, description, id } = props.cardContent;
  console.log(props.readMore);
  console.log(props);
  return (
    <div className="col">
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
          <a href={`/${id}`} className="omni-card-link gap-top-10">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default OmniCard;
