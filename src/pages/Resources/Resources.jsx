import { Helmet } from "react-helmet-async";
import OmniCard from "../../components/OmniCard/OmniCard";
import { realEstateResources } from "../../constants";
import "./Resources.css";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="resources">
      <Helmet>
        <title>Omni Homes | Resources</title>
      </Helmet>
      <div className="container">
        <h2 className="section-title text-center">Resources</h2>
        <div className="omni-row-cols-1 omni-row-cols-md-2 omni-row-cols-lg-3 py-50 our-resources">
          {realEstateResources.map((resource) => (
            <div className="col" key={resource.id}>
              <OmniCard readMore="true" cardContent={resource} />
            </div>
          ))}
        </div>
        <div className="view-more text-center">
          <Link to="/" className="omni-primary-btn">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
