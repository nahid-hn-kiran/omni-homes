import CardSide from "../../components/CardSide/CardSide";
import {
  aboutCommitmentCardBottom,
  aboutRealityCardTop,
} from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-page-hero">
        <div className="container">
          <div className="about-reality-top">
            <CardSide cardSideContent={aboutRealityCardTop} />
          </div>
          <CardSide cardSideContent={aboutCommitmentCardBottom} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
