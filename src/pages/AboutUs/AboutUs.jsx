import { Helmet } from "react-helmet-async";
import CardSide from "../../components/CardSide/CardSide";
import OmniCard from "../../components/OmniCard/OmniCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import {
  aboutCommitmentCardBottom,
  aboutRealityCardTop,
  teamMembers,
} from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Helmet>
        <title>Omni Homes | About Us</title>
      </Helmet>
      <div className="about-page-hero">
        <div className="container">
          <div className="about-reality-top">
            <CardSide cardSideContent={aboutRealityCardTop} />
          </div>
          <CardSide cardSideContent={aboutCommitmentCardBottom} />
        </div>
      </div>
      {/* Team Members  */}
      <div className="about-us team">
        <div className="container">
          <h2 className="section-title text-center">Meet the Team</h2>
          <div className="omni-row-cols-1 omni-row-cols-md-2 omni-row-cols-lg-3 gap-top-45 team-members pb-100">
            {teamMembers.map((member) => (
              <div className="col" key={member.id}>
                <OmniCard cardContent={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Core Values  */}
      <div className="about-core-values">
        <ValuesCard />
      </div>
      {/* Testimonial  */}
      <Testimonial />
      <div className="spacer-212"></div>
    </div>
  );
};

export default AboutUs;
