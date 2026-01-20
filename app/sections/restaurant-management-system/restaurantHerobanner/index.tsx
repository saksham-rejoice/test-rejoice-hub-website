import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import BannerImage from "/restraunt-pic.png";

export default function RestaurantHerobanner() {
  return (
    <div className="container-lg">
      <div className="grid grid-cols-[1fr_635px]  pt-[160px] max-mobile:pb-16 pb-20  max-tab:grid-cols-1 max-tab:gap-10 max-mobile:gap-5 gap-0 items-center z-auto">
        <div className="bg-[url('/assets/images/line.png')]  bg-no-repeat bg-cover w-full pr-10 max-tab:pr-0">
          <h2 className="title text-primary  mb-5 max-w-[845px] font-semibold ">
            All-in-One{" "}
            <span className="text-gradient">Restaurant Management System</span>{" "}
            for Modern Businesses
          </h2>
          <p className="text-lg text-black-500 max-w-[779px] mb-3 max-mobile:text-base font-semibold">
            Smart, Scalable & AI-Ready Solution by RejoiceHub
          </p>
          <p className="text-lg text-black-500 max-w-[779px] mb-5 max-mobile:text-base">
            Run your restaurant smarter, faster, and more profitably with
            RejoiceHub's Restaurant Management System, a complete solution
            designed to handle everything from POS billing and restaurant order
            management system workflows to restaurant inventory management
            system, staff coordination, and real-time analytics.
          </p>
          <p className="text-lg text-black-500 max-w-[779px] mb-5 max-mobile:text-base">
            Whether you manage a single outlet or multiple locations, our
            platform helps you centralize operations, reduce costs, and scale
            efficiently using one powerful dashboard.
          </p>

          <div className="pt-5 flex items-center gap-4 max-mobile:grid max-mobile:grid-cols-1">
            <Link to="https://calendly.com/dipak-rejoicehub" target="_blank">
              <Button
                variant="default"
                size={"lg"}
                className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
              >
                Get Start Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/solutions/real-estate-management-system/#portfolio">
              <Button
                variant="default"
                size={"lg"}
                className=" py-2  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)]  text-white  rounded-lg h-auto cursor-pointer font-medium text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-full max-mobile:rounded-lg"
            src={BannerImage}
            alt="Restaurant Management System"
          />
        </div>
      </div>
    </div>
  );
}
