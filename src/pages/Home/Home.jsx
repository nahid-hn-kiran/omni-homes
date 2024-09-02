import CardSide from "../../components/CardSide/CardSide";
import OmniCard from "../../components/OmniCard/OmniCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import { articles, homePageServices, homeSideCard } from "../../constants";
import Hero from "./Hero";

const Home = () => {
  const threeArticles = articles.slice(0, 3);
  return (
    <>
      <Hero />
      {/* Home Services Section  */}
      <div className="container">
        <div className="row row-cols-md-3 home-page-services">
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
          <div className="row grid-cols-md-3 py-50">
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
    </>
  );
};

export default Home;
