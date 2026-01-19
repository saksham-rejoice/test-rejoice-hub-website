import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PlatformProject } from "~/types/platformTypes";

interface LearningPlatformProps {
  data: PlatformProject[];
}

export default function LearningPlatform({ data }: LearningPlatformProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="py-20 max-mobile:py-16" id="portfolio">
      <div className="container-lg2">
        <h2 className="heading2 text-primary text-center mb-[120px]  mx-auto max-mobile:mb-[60px]">
          A Corporate <span className="text-gradient"> Learning Platform </span>{" "}
          for Building a Thriving Culture
        </h2>
        <div className="bg-[#E9F1FF] rounded-2xl max-mobile:rounded-xl relative max-tab:grid max-tab:grid-cols-1 max-tab:gap-8 max-mobile:py-10 max-mobile:px-3">
          <div className="absolute max-tab:relative max-tab:top-0 max-mobile:left-0 top-[-8%] left-[-5%]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={data[activeSlide]?.image}
                alt="PuurspanjeImage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          <div className="py-[60px] max-tab:p-0 px-10 max-w-[670px] ml-auto max-tab:max-w-full ">
            <div className="">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              >
                {data?.map((project) => {
                  return (
                    <SwiperSlide key={project.id}>
                      <h3 className="text-[30px] max-mobile:text-2xl text-black font-semibold mb-4">
                        Project Name:{" "}
                        <span className="text-gradient">
                          {project.projectName}
                        </span>
                      </h3>
                      <p className="text-gray-500 text-lg font-medium mb-5 max-mobile:text-base">
                        {project.description}
                      </p>
                      <Link to={project.url || "#"} target="_blank">
                        <Button
                          variant="default"
                          size={"lg"}
                          className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
                        >
                          Visit Website
                        </Button>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="bg-[#DAE8FF] rounded-full p-2 flex items-center gap-2 w-fit ml-auto mt-2">
                <div className=" text-white cursor-pointer custom-swiper-button-prev   bg-gradient-to-b from-[#FF5E01] to-[#FF9404] transition-all ease-in-out duration-300 hover:text-white max-mobile:w-10 max-mobile:h-10 w-12 h-12 bg-white  border border-[#e9e9e9] flex items-center justify-center rounded-full">
                  <ChevronLeft className="w-6 h-6 max-mobile:w-5 max-mobile:h-5  " />
                </div>
                <div className=" text-white cursor-pointer custom-swiper-button-next   bg-gradient-to-b from-[#FF5E01] to-[#FF9404] transition-all ease-in-out duration-300 hover:text-white max-mobile:w-10 max-mobile:h-10 w-12 h-12 bg-white  border border-[#e9e9e9]  flex items-center justify-center rounded-full">
                  <ChevronRight className="w-6 h-6 max-mobile:w-5 max-mobile:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
