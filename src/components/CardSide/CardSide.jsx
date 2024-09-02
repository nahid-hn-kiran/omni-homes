import { homeTeamCardImg } from "../../utils";

const CardSide = (props) => {
  const { title, description1, description2, meetTeamBtn } =
    props?.cardSideContent;
  return (
    <div className="container py-50">
      <div className="row row-cols-md-2 align-items-center">
        <div className="col">
          <h2 className="section-title">{title && title}</h2>
          <p className="common-text gap-top-20">
            {description1 && description1}
          </p>
          <p className="common-text gap-top-10">
            {description2 && description2}
          </p>
          {meetTeamBtn && (
            <a href="/" className="omni-primary-btn meet-agents-btn gap-top-20">
              Meet Our Agents
            </a>
          )}
        </div>
        <div className="col omni-card-thumbnail">
          <img src={homeTeamCardImg} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default CardSide;
