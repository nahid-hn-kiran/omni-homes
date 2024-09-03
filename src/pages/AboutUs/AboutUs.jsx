import CardSide from "../../components/CardSide/CardSide";
import {
  aboutCommitmentCardBottom,
  aboutRealityCardTop,
} from "../../constants";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-page-hero">
        <div className="container">
          <CardSide cardSideContent={aboutRealityCardTop} />
          <CardSide cardSideContent={aboutCommitmentCardBottom} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
