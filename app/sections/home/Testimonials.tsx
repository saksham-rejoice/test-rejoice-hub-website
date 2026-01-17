import StarIcon from "~/assets/icons/starIcon";
import QuoteIcon from "/assets/icons/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

const Testimonials = () => {
  return (
    <>
      <section className=" bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
        <div className="absolute top-0 leading-0 w-full z-[-1]">
          <img className="block" src={TopLineImage} alt="TopLineImage" />
        </div>
        <div className="absolute bottom-0 leading-0 w-full z-[-1]">
          <img className="block" src={BottomLineImage} alt="BottomLineImage" />
        </div>
        <div className="container-lg">
          <div className="pb-[60px] max-mobile:pb-10">
            <span className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
              Testimonial
            </span>
            <h2 className="heading3 text-primary text-center mb-4">
              What Our Clients Say
              <span className=" text-gradient"> About Us</span>
            </h2>
            <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
              We've got the opportunity to work for a wide variety of clients
              across industries. This is what they have to say about our work.
            </p>
          </div>
          <div className="px-12 max-mobile:px-0">
            <div className="relative">
              {/* Custom arrows */}
              <div className="absolute max-mobile:hidden custom-swiper-button-prev top-1/2 -translate-y-1/2 hover:bg-orange transition-all ease-in-out duration-300 hover:text-white w-12 h-12 bg-white z-[99] border border-[#e9e9e9] left-[-55px] flex items-center justify-center rounded-full">
                <ChevronLeft className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="absolute max-mobile:hidden custom-swiper-button-next top-1/2 -translate-y-1/2 hover:bg-orange transition-all ease-in-out duration-300 hover:text-white w-12 h-12 bg-white z-[99] border border-[#e9e9e9] right-[-55px] flex items-center justify-center rounded-full">
                <ChevronRight className="w-6 h-6 cursor-pointer" />
              </div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                speed={1200}
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 15,
                  },
                  480: {
                    slidesPerView: 1.3,
                    spaceBetween: 18,
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.7,
                    spaceBetween: 25,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 35,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="bg-white max-mobile:p-3 max-mobile:rounded-lg border border-solid border-[#E9E9E9] rounded-[20px] p-6">
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center gap-0.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <img src={QuoteIcon} alt="QuoteIcon" className="block" />
                    </div>
                    <div className="pb-5 border-b border-solid border-[#DADADA]">
                      <p className="text-base font-medium text-black-500 line-clamp-4">
                        "Rejoicehub has been an exceptional partner,
                        demonstrating professionalism and commitment to
                        excellence. We look forward to a long and successful
                        collaboration. Tech projects, especially smartphone
                        apps, are complex and constantly evolving. Rejoicehub's
                        expertise is invaluable in navigating these challenges
                        and delivering outstanding results."
                      </p>
                    </div>
                    <div className="pt-5 flex items-center gap-4">
                      <div className="rounded-full text-white text-xl max-mobile:text-base flex items-center justify-center font-extrabold max-mobile:w-12 max-mobile:h-12 w-16 h-16 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]">
                        GS
                      </div>
                      <p className="text-xl max-mobile:text-base font-semibold text-primary">
                        GreenStreak
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-solid border-[#E9E9E9] rounded-[20px] p-6 max-mobile:p-3 max-mobile:rounded-lg">
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center gap-0.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <img src={QuoteIcon} alt="QuoteIcon" className="block" />
                    </div>
                    <div className="pb-5 border-b border-solid border-[#DADADA]">
                      <p className="text-base font-medium text-black-500 line-clamp-4">
                        "Highly impressed with your IT firm's solutions! Your
                        team's innovative approach and swift problem-solving
                        have significantly enhanced our technological
                        capabilities. Grateful for the seamless support and
                        transformative impact on our business. Excited for
                        what's ahead!"
                      </p>
                    </div>
                    <div className="pt-5 flex items-center gap-4">
                      <div className="rounded-full text-white text-xl max-mobile:text-base flex items-center justify-center font-extrabold max-mobile:w-12 max-mobile:h-12 w-16 h-16 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]">
                        LE
                      </div>
                      <p className="text-xl font-semibold text-primary max-mobile:text-base">
                        Lovato Ecofuel System
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-solid border-[#E9E9E9] rounded-[20px] p-6 max-mobile:p-3 max-mobile:rounded-lg">
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center gap-0.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <img src={QuoteIcon} alt="QuoteIcon" className="block" />
                    </div>
                    <div className="pb-5 border-b border-solid border-[#DADADA]">
                      <p className="text-base font-medium text-black-500 line-clamp-4">
                        "Rejoicehub has been an exceptional partner,
                        demonstrating professionalism and commitment to
                        excellence. We look forward to a long and successful
                        collaboration. Tech projects, especially smartphone
                        apps, are complex and constantly evolving. Rejoicehub's
                        expertise is invaluable in navigating these challenges
                        and delivering outstanding results."
                      </p>
                    </div>
                    <div className="pt-5 flex items-center gap-4">
                      <div className="rounded-full text-white text-xl max-mobile:text-base flex items-center justify-center font-extrabold max-mobile:w-12 max-mobile:h-12 w-16 h-16 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]">
                        GS
                      </div>
                      <p className="text-xl font-semibold text-primary max-mobile:text-base">
                        GreenStreak
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-solid border-[#E9E9E9] rounded-[20px] p-6 max-mobile:p-3 max-mobile:rounded-lg">
                    <div className="flex items-center justify-between pb-2">
                      <div className="flex items-center gap-0.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <img src={QuoteIcon} alt="QuoteIcon" className="block" />
                    </div>
                    <div className="pb-5 border-b border-solid border-[#DADADA]">
                      <p className="text-base font-medium text-black-500 line-clamp-4">
                        "Highly impressed with your IT firm's solutions! Your
                        team's innovative approach and swift problem-solving
                        have significantly enhanced our technological
                        capabilities. Grateful for the seamless support and
                        transformative impact on our business. Excited for
                        what's ahead!"
                      </p>
                    </div>
                    <div className="pt-5 flex items-center gap-4">
                      <div className="rounded-full text-white text-xl max-mobile:text-base flex items-center justify-center font-extrabold max-mobile:w-12 max-mobile:h-12 w-16 h-16 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]">
                        LE
                      </div>
                      <p className="text-xl font-semibold text-primary max-mobile:text-base">
                        Lovato Ecofuel System
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
