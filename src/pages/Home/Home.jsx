import CardSide from "../../components/CardSide/CardSide";
import OmniCard from "../../components/OmniCard/OmniCard";
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
      <div className="container py-50">
        <CardSide cardSideContent={homeSideCard} />
      </div>
    </>
  );
};

export default Home;
