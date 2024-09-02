import OmniCard from "../../components/OmniCard/OmniCard";
import { homePageServices } from "../../constants";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row row-cols-md-3 home-page-services">
          {homePageServices.map((service) => (
            <OmniCard key={service.id} cardContent={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
