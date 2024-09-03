import CardSide from "../../components/CardSide/CardSide";
import OmniCard from "../../components/OmniCard/OmniCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import { articles, homePageServices, homeSideCard } from "../../constants";
import Hero from "./Hero";
import OurLocations from "./OurLocations";

const Home = () => {
  const threeArticles = articles.slice(0, 3);
  return (
    <>
      <Hero />
      {/* Home Services Section  */}
      <div className="container">
        <div className="row row-cols-1 gy-4 row-cols-sm-2 row-cols-md-3 d-flex align-items-stretch home-page-services">
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
      {/* Articles  */}
      <div className="more-about-us py-50">
        <div className="container">
          <h2 className="section-title text-center">Learn More About Dayton</h2>
          <div className="row row-cols-1 gx-3 gy-4 row-cols-sm-2 row-cols-md-3 py-50">
            {threeArticles.map((article) => (
              <OmniCard key={article.id} readMoe="true" cardContent={article} />
            ))}
          </div>
          <div className="view-all-btn text-center">
            <a href="/" className="omni-primary-btn">
              View All
            </a>
          </div>
        </div>
      </div>
      {/* Our Locations  */}
      <OurLocations />
    </>
  );
};

export default Home;
