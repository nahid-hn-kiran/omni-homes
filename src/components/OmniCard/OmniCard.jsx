import "./OmniCard.css";
import { Link } from "react-router-dom";

const OmniCard = (props) => {
  const { img, title, name, description, id, bio, phone, email } =
    props.cardContent;
  return (
    <div className="omni-card">
      <div className="omni-card-thumbnail">
        <Link to="/">
          <img src={img} alt={title && title} className="omni-card-img" />
        </Link>
      </div>
      <div className="omni-content">
        <Link to={`/${id}`} className="omni-card-title">
          {title && title}
          {name && name}
        </Link>
        <p className="common-text gap-top-10">{description && description}</p>
        <p className="common-text gap-top-10">{bio && bio}</p>
        <p className="common-text gap-top-10">{phone && phone}</p>
        <p className="common-text gap-top-10">{email && email}</p>
        <Link to={`/${id}`} className="omni-card-link gap-top-10">
          {name ? "Contact " + name : props?.readMore && "Read More"}
        </Link>
      </div>
    </div>
  );
};

export default OmniCard;
