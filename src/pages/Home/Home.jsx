import CardSide from "../../components/CardSide/CardSide";
import OmniCard from "../../components/OmniCard/OmniCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import { articles, homePageServices, homeSideCard } from "../../constants";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import OurLocations from "./OurLocations";

const Home = () => {
  const threeArticles = articles.slice(0, 3);
  return (
    <>
      <Hero />
      {/* Home Services Section  */}
      <div className="container">
        <div className="omni-row-cols-1 omni-row-cols-md-2 omni-row-cols-lg-3 home-page-services">
          {homePageServices.map((service) => (
            <OmniCard key={service.id} cardContent={service} />
          ))}
        </div>
      </div>
      {/* Meet the Team  */}
      <CardSide cardSideContent={homeSideCard} />
      {/* Our Values  */}
      <ValuesCard />
      {/* Testimonial  */}
      <Testimonial />
      <div className="spacer-212"></div>
      {/* Articles  */}
      <div className="more-about-us py-50">
        <div className="container">
          <h2 className="section-title text-center">Learn More About Dayton</h2>
          <div className="omni-articles omni-row-cols-1 omni-row-cols-md-2 omni-row-cols-lg-3 py-50">
            {threeArticles.map((article) => (
              <OmniCard
                key={article.id}
                readMore="true"
                cardContent={article}
              />
            ))}
          </div>
          <div className="view-all-btn text-center">
            <Link to="/" className="omni-primary-btn">
              View All
            </Link>
          </div>
        </div>
      </div>
      {/* Our Locations  */}
      <OurLocations />
    </>
  );
};

export default Home;
