import { homeTeamCardImg } from "../../utils";
import "./CardSide.css";

const CardSide = (props) => {
  const { title, img, description1, description2, btn } =
    props?.cardSideContent;
  return (
    <div className="card-side py-50">
      <div className="container">
        <div className="row row-cols-1 gy-4 row-cols-md-2 align-items-center">
          <div className="col">
            <h2 className="section-title card-side-title">{title && title}</h2>
            <p className="common-text gap-top-20">
              {description1 && description1}
            </p>
            <p className="common-text gap-top-10">
              {description2 && description2}
            </p>
            {btn && (
              <a
                href={btn?.link}
                className="omni-primary-btn meet-agents-btn gap-top-20"
              >
                {btn?.text}
              </a>
            )}
          </div>
          <div className="col omni-card-thumbnail">
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSide;
