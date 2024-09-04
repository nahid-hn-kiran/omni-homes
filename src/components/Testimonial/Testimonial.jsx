import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonialData } from "../../constants";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container-lg">
        <div className="clients-on-us">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="section-title">We love our clients!</h2>
            <p className="common-text gap-top-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="testimonial-items gap-top-45">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                800: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonialData.map((data) => (
                <SwiperSlide key={data.id}>
                  <TestimonialCard reviews={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
