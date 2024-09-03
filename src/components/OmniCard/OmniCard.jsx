import "./OmniCard.css";

const OmniCard = (props) => {
  const { img, title, name, description, id, bio, phone, email } =
    props.cardContent;
  return (
    <div className="col">
      <div className="omni-card">
        <div className="omni-card-thumbnail">
          <a href="/">
            <img src={img} alt={title && title} className="omni-card-img" />
          </a>
        </div>
        <div className="omni-content">
          <a href={`/${id}`} className="omni-card-title">
            {title && title}
            {name && name}
          </a>
          <p className="common-text gap-top-10">{description && description}</p>
          <p className="common-text gap-top-10">{bio && bio}</p>
          <p className="common-text gap-top-10">{phone && phone}</p>
          <p className="common-text gap-top-10">{email && email}</p>
          <a href={`/${id}`} className="omni-card-link gap-top-10">
            {name ? "Contact " + name : props?.readMore && "Read More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default OmniCard;
