import RestaurantHerobanner from "./restaurantHerobanner";
import RestaurantChallenges from "./restaurantChallenges";
import RestaurantPartner from "./restaurantPartner";
import RestaurantFeatures from "./restaurantFeatures";
import RestaurantShowcase from "./restaurantShowcase";
import HowItWorks from "./howItWorks";
import platformData from "~/constant/platformData.json";
import WhyChooseRejoiceHub from "./whyChooseRejoiceHub";

export default function RestaurantManagementSystemPage() {
  return (
    <div className="restaurant-management-system">
      <RestaurantHerobanner />
      <RestaurantChallenges />
      <RestaurantPartner />
      <RestaurantFeatures />
      <WhyChooseRejoiceHub />
      <RestaurantShowcase data={platformData.lms} />
      <HowItWorks />
    </div>
  );
}
