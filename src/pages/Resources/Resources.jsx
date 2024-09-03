import OmniCard from "../../components/OmniCard/OmniCard";
import { realEstateResources } from "../../constants";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <div className="container">
        <h2 className="section-title text-center">Resources</h2>
        <div className="row row-cols-sm-2 row-cols-md-3 py-50 our-resources">
          {realEstateResources.map((resource) => (
            <div className="col" key={resource.id}>
              <OmniCard readMore="true" cardContent={resource} />
            </div>
          ))}
        </div>
        <div className="view-more text-center">
          <a href="/" className="omni-primary-btn">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
