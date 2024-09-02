import CardSide from "../../components/CardSide/CardSide";
import OmniCard from "../../components/OmniCard/OmniCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import { homePageServices, homeSideCard } from "../../constants";
import Hero from "./Hero";

const Home = () => {
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
    </>
  );
};

export default Home;
