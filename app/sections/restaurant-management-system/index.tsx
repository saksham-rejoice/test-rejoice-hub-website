import React from "react";
import RestaurantHerobanner from "./restaurantHerobanner";
import RestaurantChallenges from "./restaurantChallenges";
import RestaurantPartner from "./restaurantPartner";
import RestaurantFeatures from "./restaurantFeatures";
import WhyChooseRejoiceHub from "./whyChooseRejoiceHub";
import HowItWorks from "./howItWorks";

export default function RestaurantManagementSystemPage() {
  return (
    <div className="restaurant-management-system">
      <RestaurantHerobanner />
      <RestaurantChallenges />
      <RestaurantPartner />
      <RestaurantFeatures />
      <WhyChooseRejoiceHub />
      <HowItWorks />
    </div>
  );
}
