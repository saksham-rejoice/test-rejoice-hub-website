import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import BannerImage from "/assets/images/fintech.png";

export default function FintechHerobanner() {
  return (
    <div className="container-lg">
      <div className="grid grid-cols-[1fr_635px]  pt-[160px] max-mobile:pb-16 pb-20  max-tab:grid-cols-1 max-tab:gap-10 max-mobile:gap-5 gap-0 items-center z-auto">
        <div className="bg-[url('/assets/images/line.png')]  bg-no-repeat bg-cover w-full pr-10 max-tab:pr-0">
          <h2 className="title text-primary  mb-5 max-w-[845px] font-semibold ">
            FinTech{" "}
            <span className="text-gradient"> Software Development </span>{" "}
            Services
          </h2>
          <p className="text-lg text-black-500 max-w-[779px] mb-5 max-mobile:text-base">
            Serving a wide range of industries, RejoiceHub specializes in
            banking, fintech, and insurance software development. Since 2005, we
            deliver secure and compliant BFSI solutions that bring{" "}
            <span className="text-gradient">25-40%</span> faster business
            processes, <span className="text-gradient">5-40%</span> reduction in
            operational costs, <span className="text-gradient">10-15%</span>{" "}
            increase in revenue, and <span className="text-gradient">100%</span>{" "}
            visibility of FinTech transactions.
          </p>

          <div className="pt-5 flex items-center gap-4 max-mobile:grid max-mobile:grid-cols-1">
            <Link to="https://calendly.com/dipak-rejoicehub" target="_blank">
              <Button
                variant="default"
                size={"lg"}
                className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to={"/services/fintech-software-development/#portfolio"}>
              <Button
                variant="default"
                size={"lg"}
                className=" py-2  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)]  text-white  rounded-lg h-auto cursor-pointer font-medium text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-full max-mobile:rounded-lg"
            src={BannerImage}
            alt="BannerImage"
          />
        </div>
      </div>
    </div>
  );
}
